<template>
<div>
  <!--  <label for="answer">{{ decodeURIComponent(answer) }}</label>-->
 <!-- <input @change="onAnswerChange" type="checkbox" name="answer" id="answer"/> -->
    <button @click="onAnswerChange" v-text="decodeURIComponent(answer)" name="answer" class="answerButton"/>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Answer",
    props: ["answer", "id"],
    methods: {
      ...mapActions(["addAnswer", "addCurrentScore"]),
      ...mapGetters(["getAnswers", "getQuestions", "getCurrentScore"]),
      updateScore() {
        const question = this.getQuestions()
        if(this.answer === question[this.id].correct_answer) {
          //you answered correctly
          let currentScore = this.getCurrentScore()
          currentScore += 10
          this.addCurrentScore(currentScore)
        }
      },
      onAnswerChange() {
        let currentAnswers = this.getAnswers()
        currentAnswers.push(decodeURIComponent(this.answer))
        this.updateScore()
        this.addAnswer(currentAnswers)
        this.$emit('change', parseInt(this.id) + 1)
      },
    },
}
</script>
<style scoped>
  .answerButton {
    background-color: rgb(24, 41, 39);
    color: rgb(233, 235, 236);
    font-weight: bolder;
    border-radius: 5px;
    border: none;
    padding: 1rem;
    margin: 1rem;
    width: 40%;
  }

  .answerButton:hover {
    background-color: rgb(59, 104, 99);
  }
</style>