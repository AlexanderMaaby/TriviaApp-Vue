<template>
    <div>
        <h2>Quiz Template</h2>
        <section>
          <label>Difficulty </label>
          <select @change="onDifficultyChange($event)">
            <DropDown v-for="level in difficultyLevels" :key="level" :item="level" :templateValue="'difficulty'"/>
          </select >
          <label>Amount of questions </label>
          <select @change="onAmountChange($event)">
            <DropDown v-for="amount in amountOfQuestions" :key="amount" :item="amount" :templateValue="'numberOfQuestions'"/>
          </select>
          <label>Categories </label>
          <select @change="onCategoryChange($event)">
            <DropDown v-for="categoryObj in categories" :key="categoryObj.id" :item="categoryObj.name" :templateValue="'category'"/>
          </select>
        </section>
        <button @click="startQuiz">START</button>
    </div>
</template>

<script>
import { getCategories } from "@/api/quiz-API";
import DropDown from "@/components/home/DropDown";
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    name: "QuizTemplate",
    data() {
        return {
            difficultyLevels: ["Any Difficulty", "Easy", "Medium", "Hard"],
            amountOfQuestions: [10, 20, 30],
            categories: [""]
        }
    },
    computed: {
      ...mapState(["quizTemplate"])
    },
    async created() {
      //Maybe handle this error later :)
      const [error, result] = await getCategories()
      this.categories = result
      this.setError(error);
    },
    components: {
      DropDown
    },
    methods: {
      ...mapMutations(["setQuizDifficulty", "setQuizAmount", "setQuizCategory", "setError"]),
      ...mapActions(["getQuestionsFromTemplate"]),
      onDifficultyChange(event) {
        this.setQuizDifficulty(event.target.value)
      },
      onAmountChange(event) {
        this.setQuizAmount(event.target.value)
      },
      onCategoryChange(event) {
        this.setQuizCategory(event.target.value)
      },
      async startQuiz() {
        await this.getQuestionsFromTemplate();
        this.$router.push("/question/1")
      }
    }
}
</script>

<style scoped>

</style>