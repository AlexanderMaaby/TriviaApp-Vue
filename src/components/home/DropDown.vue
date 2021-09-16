<template>
  <option :id="id">{{item}}</option>
</template>

<script>
export default {
  name: "DropDown",
  props: ["item", "templateValue", "id"]
  
}
</script>

<style scoped>

</style>