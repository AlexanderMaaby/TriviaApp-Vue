<template>
  <div>
    <img v-if="shouldDisplay" src="@/assets/pepepng.png"/>
    <img v-else src="@/assets/clappeepo.gif"/>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ResultImage",
  methods: {
    ...mapGetters(["getCurrentScore"]),
  },
  computed: {
    shouldDisplay: function () {
      const score = this.getCurrentScore()
      console.log(score)
      if (score < 40) return true
      return false
    }
  },
}
</script>

<style scoped>

</style>