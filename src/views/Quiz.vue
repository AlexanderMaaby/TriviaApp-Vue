<template>
  <div>
    <h1>Quiz!!!!</h1>
    <Question/>
  </div>
</template>

<script>
import Question from "@/components/quiz/Question";

export default {
  name: "Quiz",
  aQuestion: "meow",
  data() {

  },
  components: {Question}
}
</script>

<style scoped>

</style>