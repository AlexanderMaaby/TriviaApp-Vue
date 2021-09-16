<template>
<div>
    <label>{{ answer }}</label>
    <input @change="onAnswerChange" type="radio" name="answer"/>
</div>
</template>

// TODO: Fix label and input on press choose

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Answer",
    props: ["answer", "id"],
    methods: {
      ...mapActions(["addAnswer"]),
      ...mapGetters(["getAnswers"]),
      onAnswerChange(event) {
        console.log(this.answer + " is the answer")

        let currentAnswers = this.getAnswers()
        currentAnswers.push(this.answer)
        this.addAnswer(currentAnswers)
        this.$emit('change', parseInt(this.id) + 1)
      },
    },
}
</script>