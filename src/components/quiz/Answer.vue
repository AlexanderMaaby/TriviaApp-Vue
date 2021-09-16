<template>
<div>
    <label>{{ answer }}</label>
    <input @change="onAnswerChange" type="radio" name="answer"/>
</div>
</template>

// TODO: Fix label and input on press choose

<script>
export default {
    name: "Answer",
    props: ["answer", "id"],
    methods: {
      onAnswerChange(event) {
        console.log(this.answer + "meow " + this.id)
        this.$router.push("/question/" + (parseInt(this.id) + 2)).toString() //this is just silly
      },
    }
}
</script>