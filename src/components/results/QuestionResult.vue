<template>
    <div>
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
    props: ["question", "answer"],
}
</script>

<style scoped>

</style>