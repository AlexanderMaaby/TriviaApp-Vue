<template>
  <div>
    <h1>Quiz!!!!</h1>
    <p>{{ questions[id].question }}</p>
    <Answer :answer="answers" v-for="answers in answer" :key="answers" :id="id" :item="answers" />
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
    console.log(this.answer)
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
    onAnswerChange() {
      // Get the selected index in the select list and use that index to get the Id of category
      //const index = event.target.options.selectedIndex
      //const categoryId = event.target.options[index].id

    },
  }
}
</script>

<style scoped>

</style>