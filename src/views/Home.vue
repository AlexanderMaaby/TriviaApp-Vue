<template>
    <div>
      <h1>{{ title }} </h1>
      <Form :title="title"/>
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
  created() {
    console.log()
    this.$router.history.current.path = "/"
  },
  data() {
    return {
      title: "Welcome to Quiz"
    }
  },
  computed: {
    ...mapState(["user"]) 
  }
}
</script>

<style scoped>

</style>