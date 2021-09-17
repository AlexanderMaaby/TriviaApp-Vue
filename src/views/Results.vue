<template>
  <div>
    <h2>Results</h2>
    <section>
      <p >You scored</p>
      <h3>{{ currentScore }} points</h3>
      <div v-if="this.user">High score: {{this.user.highScore}}</div>
      <section class="navigation">
        <router-link class="home-link"  to="/">Home</router-link>
        <button @click="reDoQuiz" class="button">Do Again</button>
      </section>
    </section>
    <QuestionResult v-for="question in questions" 
                    :key="questions.indexOf(question)" 
                    :answer="answers[questions.indexOf(question)]" 
                    :question="question"
    />
    <ResultImage />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuestionResult from "@/components/results/QuestionResult";
import ResultImage from "@/components/results/ResultImage";
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
  components:{ResultImage, QuestionResult },
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
      this.$router.push("/quiz");
    }
  }
}
</script>

<style scoped>

  .navigation { 
    margin: 2rem 0 3rem 0;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 2rem;
  }

  .navigation .home-link {
    color: #1cb887 ;
  }



</style>