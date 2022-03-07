<template>
  <div id="app">
    <FormulateFormComponent msg="Let's experiment with Vue-Formulate" />
  </div>
</template>

<script>
import FormulateFormComponent from "./components/FormulateForm";

export default {
  name: "App",
  components: {
    FormulateFormComponent,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
