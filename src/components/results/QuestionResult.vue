<template>
    <div>
        <h4>{{ question.question }}</h4>
        <div>
            <p>You answered: {{ answer }}</p>
            <p>Correct answer: {{ question.correct_answer }}</p>
        </div>
        <div class="breaker"></div>
    </div>
</template>

<script>
export default {
    name: "QuestionResult",
    props: ["question", "answer"]
}
</script>

<style scoped>

</style>