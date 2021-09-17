<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #f2f2f2;
    height: 100%;
    margin: 0;
  } 

  html, body {
    background-color: #465362ff;
    min-height: 100%;
    margin: 0;
  }

  .button {
    height: 1.4rem;
  }

  .button:hover {
    cursor: pointer;
  }
</style>
