<template>
  <section>
    <p v-text="questions.question"/> //question
    <CheckBoxes/> //Answers
  </section>
</template>

<script>
import CheckBoxes from "@/components/quiz/CheckBoxes";
import {mapGetters} from "vuex";
export default {
  name: "question",
  data() {
    return {
      questions: this.getQuestions()
    }
  },
  components: {CheckBoxes},
  computed: {
    ...mapGetters(["getQuestions"])
  },
  methods: {

  }
}
</script>

<style scoped>

</style>