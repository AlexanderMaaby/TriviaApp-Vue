<template>
<div>
    <label v-html="answer"></label>
    <input @change="onAnswerChange" type="radio" name="answer" :checked="isChecked"/>
</div>
</template>

// TODO: Fix label and input on press choose

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Answer",
    props: ["answer", "id"],
    data () {
      return {
        isChecked: false,
      }
    },
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
      onAnswerChange(event) {
        let currentAnswers = this.getAnswers()
        currentAnswers.push(this.answer)
        this.updateScore()
        this.addAnswer(currentAnswers)
        this.$emit('change', parseInt(this.id) + 1)
      },
    },
}
</script>