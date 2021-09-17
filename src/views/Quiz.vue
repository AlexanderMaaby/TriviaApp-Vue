<template>
  <div ref="answerDiv" id="answerDiv">
    <h1>Question {{id + 1}}</h1>
    <p :key:="id" v-html="decodeURIComponent(questions[id].question)"/>
    <Answer @change="onAnswerChange" :answer="answers" v-for="answers in answer" :key="answers" :id="id" :item="answers" />
  </div>
</template>

<script>
import Answer from "@/components/quiz/Answer";
import {mapGetters, mapState, mapMutations} from "vuex";

export default {
  name: "Quiz",

  data() {
    return {
      answer: [],
      id: 0
    }
  },
  created() {
    this.setAnswersArray();
    this.setCurrentScore(0);
  },
  computed: {
    ...mapGetters(["getQuestions"]),
    ...mapState(["questions"])
  },
  components: {Answer},
  methods: {
    ...mapMutations(["setCurrentScore"]),
    setAnswersArray() {
      this.answer = this.questions[this.id].incorrect_answers
      this.answer.push(this.questions[this.id].correct_answer)
      this.answer.sort()
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
#answerDiv {
  color: #ed254eff;
}
</style>