<template>
<div>
    <label for="answer">{{ decodeURIComponent(answer) }}</label>
    <input @change="onAnswerChange" type="radio" name="answer" id="answer"/>
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
        if(this.answer == question[this.id].correct_answer) {
          //you answered correctly
          let currentScore = this.getCurrentScore()
          currentScore += 10
          this.addCurrentScore(currentScore)
        }
      },
      onAnswerChange() {
        let currentAnswers = this.getAnswers()
        currentAnswers.push(this.answer)
        this.updateScore()
        this.addAnswer(currentAnswers)
        this.$emit('change', parseInt(this.id) + 1)
      },
    },
}
</script>