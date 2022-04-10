<template>
  <h1>Send Us a Message</h1>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message"></textarea>
    <input class="btn btn-primary" type="submit" value="Send" />
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_n35seue",
          "template_i0765eo",
          this.$refs.form,
          "Z8sh-4HD70jP-HY-0"
        )
        .then(
          (result) => {
            alert("SUCCESS!");
          },
          (error) => {
            alert("FAILED...");
          }
        );
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #e1e1e1;
  padding: 20px;
  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.5);
}
h1 {
  background: none;
  text-align: center;
  margin: 0;
}

input[type="text"],
select,
input[type="email"],
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  font-size: 1.5em;
}

label {
  font-size: 1.5em;
}
</style>
