<template>
  <div>
    <h1>Question {{id + 1}}</h1>
    <p :key:="id">{{ questions[id].question }}</p>
    <Answer @change="onAnswerChange" :answer="answers" v-for="answers in answer" :key="answers" :id="id" :item="answers" />
  </div>
</template>

<script>
import Answer from "@/components/quiz/Answer";
import {mapGetters, mapState} from "vuex";

export default {
  name: "Quiz",

  data() {
    return {
      answer: [],
      id: this.$route.params.id -1
    }
  },
  created() {
    this.setAnswersArray();
  },
  computed: {
    ...mapGetters(["getQuestions"]),
    ...mapState(["questions"])
  },
  components: {Answer},
  methods: {
    setAnswersArray() {
      this.answer = this.questions[this.id].incorrect_answers
      this.answer.push(this.questions[this.id].correct_answer)
    },
    onAnswerChange(newId) {
      //If there are still more questions, set this id to the next question id.
      if(this.id < this.questions.length -1) {
        this.id = newId
        this.setAnswersArray()
      }
      //else go to the results screen
      else {
        this.$router.push("/results")
      }
    },
  }
}
</script>

<style scoped>

</style>