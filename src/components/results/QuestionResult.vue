<template>
    <div :class="{match: matches}">
        <h4>{{ decodeURIComponent(question.question) }}</h4>
        <div>
            <p>You answered: {{ decodeURIComponent(answer) }}</p>
            <p>Correct answer: {{ decodeURIComponent(question.correct_answer) }}</p>
        </div>
        <div class="breaker"></div>
    </div>
</template>

<script>
export default {
    name: "QuestionResult",
    data() {
        return {
            matches: null
        }
    },
    props: ["question", "answer"],
    created() {
        this.matches = this.answer === this.question.correct_answer;
    }
}
</script>

<style scoped>
    .match {
        border: solid 5px #1cb887;
        margin: 1rem;
    }

</style>