<template>
    <div>
      <h1>{{ title }} </h1>
      <Form :title="title"/>
    </div>
</template>

<script>
import Form from "@/components/Form";

export default {
  name: "Home",
  components: {
    Form
  },
  data() {
    return {
      title: "Welcome to Quiz"
    }
  }
}
</script>

<style scoped>

</style>