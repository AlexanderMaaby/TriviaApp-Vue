<template>
  <img v-if="shouldDisplay" src="@/assets/pepepng.png"/>
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
      if (score < 30) return true
      return false
    }
  },
}
</script>