<template>
  <section class="page mt-3">
    <h1>Leave a Message</h1>
    <form ref="form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message"></textarea>
      <input class="btn btn-primary mt-3" type="submit" value="Send" />
    </form>
  </section>
  <Modal v-if="modal" title="Success!" />
</template>

<script>
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal.vue";
export default {
  name: "Contact",
  data() {
    return {
      modal: false,
    };
  },
  components: { Modal },
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
            this.modal = true;
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
  margin: 0 auto;
  color: white;
  width: 33%;
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
