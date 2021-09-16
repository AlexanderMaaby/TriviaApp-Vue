<template>
<div>

    <label >{{level}}</label>
    <input type="radio" name="level"/>
</div>
</template>

// TODO: Fix label and input on press chose

<script>
export default {
    name: "CheckBoxes",
    props: ["level"]
}
</script>