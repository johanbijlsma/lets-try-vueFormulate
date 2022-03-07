<template>
  <div id="formulate form">
    <h1>{{ msg }}</h1>
    At the project I currently working, all forms are build using
    <a href="https://vueformulate.com/" target="_blank"> Vue-formulate</a>. As
    I'm not experienced with this library, I'm taking some time to learn it.
    <hr />
    <FormulateForm
      name="test-form"
      v-model="formValues"
      @submit="submitForm"
      v-if="!this.isSubmitted"
    >
      <FormulateInput
        type="text"
        name="Name"
        label="Name"
        Placeholder="Please enter your name"
        validation="required"
        class="w100"
      />
      <FormulateInput
        type="range"
        name="Age"
        label="Please select your age"
        min="10"
        max="100"
        validation="required"
        class="w100"
        show-value="true"
        value="25"
      />
      <FormulateInput
        :options="{
          pizza: 'Pizza 🍕',
          fries: 'Fries 🍟',
          burger: 'Burger 🍔',
          sushi: 'Sushi 🍣',
        }"
        type="checkbox"
        label="Select your favourite snacks"
        validation="required|max:3"
      />
      <FormulateInput
        type="text"
        name="Movie"
        label="What's your favourite movie?"
        Placeholder="Star wars, Titanic, etc"
        validation="required"
        class="w100"
      />
      <FormulateInput
        type="submit"
        label="Submit Form"
        class="w100 button btn"
      />
    </FormulateForm>
    <template v-if="this.isSubmitted">
      <h2>Thank you {{ this.formValues.name }}!!! 👋</h2>

      <p>
        Thank you for filling in this form. You have been a great help 👍. If
        you would like to fill out the form again, please click the button
        below.
      </p>

      <button class="btn primary" @click="RedoForm">To the form!!!</button>
    </template>
  </div>
</template>

<script>
export default {
  name: "FormulateFormComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      formValues: {},
      isSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log(this.formValues);
      this.isSubmitted = true;
    },
    RedoForm() {
      this.formValues = {};
      this.isSubmitted = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
