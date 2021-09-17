<template>
    <div>
        <h2>Quiz Template</h2>
        <section>
          <div class="temp-drop-container">
            <label>Difficulty - </label>
            <select @change="onDifficultyChange($event)">
              <DropDown v-for="level in difficultyLevels" :key="level" :id="level" :item="level" :templateValue="'difficulty'"/>
            </select >
          </div>
          <div class="temp-drop-container">
            <label>Amount of questions - </label>
            <select @change="onAmountChange($event)">
              <DropDown v-for="amount in amountOfQuestions" :key="amount" :item="amount" :templateValue="'numberOfQuestions'"/>
            </select>
          </div>
          <div class="temp-drop-container"> 
            <label>Categories - </label>
            <select @change="onCategoryChange($event)">
              <DropDown v-for="categoryObj in categories" :key="categoryObj.id" :id="categoryObj.id" :item="categoryObj.name" :templateValue="'category'"/>
            </select>
          </div>
        </section>
        <button @click="startQuiz" class="start-button">START</button>
    </div>
</template>

<script>
import { getCategories } from "@/api/quiz-API";
import DropDown from "@/components/home/DropDown";
import { mapActions, mapMutations, mapState } from 'vuex';
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
        // Get the selected index in the select list and use that index to get the Id of category
        const index = event.target.options.selectedIndex
        const categoryId = event.target.options[index].id
        this.setQuizCategory(categoryId)
      },
      async startQuiz() {
        await this.getQuestionsFromTemplate();
        this.$router.push("/quiz")
      }
    }
}
</script>

<style scoped>
  .temp-drop-container {
    margin: 0 0 1rem 0;
  }

  .start-button {
    background-color: rgb(129, 188, 255);
    width: 50%;
    border-radius: 5px;
    border: none;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 2rem;
    font-family:  Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .start-button:hover {
    background-color: rgb(22, 86, 163);
  }

</style>