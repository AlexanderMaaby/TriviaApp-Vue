<template>
    <div class="home">
      <h1>{{ title }}<span>Vue</span>
      </h1>
      <Form />
      <QuizTemplate v-if="user" />
    </div>
</template>

<script>
import Form from "@/components/home/Form";
import QuizTemplate from "@/components/home/QuizTemplate";
import { mapState } from 'vuex';

export default {
  name: "Home",
  components: {
    Form,
    QuizTemplate
  },
  data() {
    return {
      title: "Welcome to The-unnecessary-long-name-for-a-tiny-" +
      "little-quiz-game-made-for-a-one-week-project-with-"
    }
  },
  computed: {
    ...mapState(["user"]) 
  }
}
</script>

<style scoped>
  .home {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  span {
    color: #1cb887;
  }


</style>