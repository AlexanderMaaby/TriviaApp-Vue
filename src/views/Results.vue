<template>
  <div>
    <h2>Results</h2>
    <section>
      <p >You scored</p>
      <h3>{{ currentScore }} points</h3>
      <div v-if="this.user">Ree {{this.user.highScore}}</div>
      <section>
        <router-link to="/">Home</router-link>
        <button @click="reDoQuiz">Do Again</button>
      </section>
    </section>
    <QuestionResult v-for="question in questions" 
                    :key="questions.indexOf(question)" 
                    :answer="answers[questions.indexOf(question)]" 
                    :question="question"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuestionResult from "@/components/results/QuestionResult";
export default {
  name: "Results",
  data() {
    return {
      userScore: null
    }
  },
  created() {
    this.checkScore();
  },
  computed: {
    ...mapState(["currentScore", "answers", "questions", "user"]),
  },
  components:{ QuestionResult }, 
  methods: {
    ...mapActions(["updateUserWithNewScore", "getQuestionsFromTemplate"]),
    async checkScore() {
      this.userScore = this.user.highScore !== undefined ? this.user.highScore : this.user.score;
      if(this.currentScore > this.userScore)  {
        await this.updateUserWithNewScore()
      }
    },
    async reDoQuiz() {
      await this.getQuestionsFromTemplate();
      this.$router.push("/question/1");
    }
  }
}
</script>

<style scoped>

</style>