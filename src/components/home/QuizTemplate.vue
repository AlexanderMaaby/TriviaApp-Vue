<template>
    <div>
        <h2>Quiz Template</h2>
        <section>
            <div v-for="level in difficultyLevels" :key="level" >
                <CheckBoxes :level="level" />
            </div>

        </section>
    </div>

</template>


<script>
import CheckBoxes from "@/components/home/CheckBoxes"
export default {
    name: "QuizTemplate",
    data() {
        return {
            difficultyLevels: ["Any Difficulty", "Easy", "Medium", "Hard"],
            categories: [""]
        }
    },
    components: {
        CheckBoxes
    }
}
</script>

<style scoped>

</style>