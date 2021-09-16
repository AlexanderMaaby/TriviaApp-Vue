<template>
    <div>
        <h2>Quiz Template</h2>
        <section>
          <label>Difficulty </label>
          <select>
            <DropDown v-for="level in difficultyLevels" :key="level" :item="level"/>
          </select>
          <label>Amount of questions </label>
          <select>
            <DropDown v-for="amount in amountOfQuestions" :key="amount" :item="amount"/>
          </select>
          <label>Categories </label>
          <select>
            <DropDown v-for="category in categories" :key="category.id" :item="category.name"/>
          </select>
        </section>
    </div>
</template>

<script>
import {getCategories} from "@/api/quiz-API";
import DropDown from "@/components/home/DropDown";
export default {
    name: "QuizTemplate",
    data() {
        return {
            difficultyLevels: ["Any Difficulty", "Easy", "Medium", "Hard"],
            amountOfQuestions: [10, 20, 30],
            categories: [""]
        }
    },
    async created() {
      //Maybe handle this error later :)
      const [error, result] = await getCategories()
      this.categories = result
    },
  components: {
      DropDown
    }
}
</script>

<style scoped>

</style>