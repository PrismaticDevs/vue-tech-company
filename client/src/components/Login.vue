<template>
  <p class="h1 text-center" :class="{ 'text-danger': err, green: success }">
    {{ response }}
  </p>
  <h1 class="text-center">Login</h1>
  <form>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input
        v-model="email"
        type="email"
        id="form2Example1"
        class="form-control"
        autocomplete="on"
      />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input
        v-model="password"
        type="password"
        id="form2Example2"
        class="form-control"
        autocomplete="on"
      />
      <label class="form-label" for="form2Example2">Password</label>
    </div>

    <!-- Submit button -->
    <button @click="login" type="button" class="btn btn-primary btn-block mb-4">
      Sign in
    </button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>
        Not a member?

        <router-link class="btn btn-success" to="/register"
          >Register</router-link
        >
      </p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>

      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>

      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>

      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
</template>

<script>
import axios from "../../axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      response: "",
      err: false,
      success: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    async login(e) {
      e.preventDefault();
      await axios
        .post("/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.response = res.data;
          if (res.data.trim() === "Invalid login credentials") {
            this.success = false;
            this.err = true;
          } else {
            this.success = true;
            this.err = false;
            setTimeout(() => {
              this.goHome();
            }, 2500);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
form {
  width: 33%;
  margin: 0 auto;
}
</style>
