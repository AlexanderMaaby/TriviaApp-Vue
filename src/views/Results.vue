<template>
  <div>
    <h2>Results</h2>
    <section>
      <p v-if="currentScore > userScore">You scored</p>
      <h3>{{ userScore }}</h3>
    </section>
    <QuestionResult v-for="question in questions" 
                    :key="questions.indexOf(question)" 
                    :answer="answers[questions.indexOf(question)]" 
                    :question="question"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QuestionResult from "@/components/results/QuestionResult";
export default {
  name: "Results",
  data() {
    return {
      userScore: user.highScore || user.score
    }
  },
  components:{ QuestionResult },
  computed: {
    ...mapState(["currentScore", "answers", "questions", "user"]),
  },
}
</script>

<style scoped>

</style>