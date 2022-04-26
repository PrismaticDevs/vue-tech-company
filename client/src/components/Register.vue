<template>
  <p class="h1 text-center" :class="{ 'text-danger': err, green: success }">
    {{ response }}
  </p>
  <h1 class="text-center">Register</h1>
  <form>
    <!-- Password input -->
    <div class="form-outline mb-4">
      <input
        type="text"
        id="form2Example0"
        class="form-control"
        autocomplete="on"
        v-model="username"
      />
      <label class="form-label" for="form2Example0">Username</label>
    </div>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input
        type="email"
        id="form2Example1"
        class="form-control"
        autocomplete="on"
        v-model="email"
      />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input
        type="password"
        id="form2Example2"
        class="form-control"
        autocomplete="on"
        v-model="password"
      />
      <label class="form-label" for="form2Example2">Password</label>
    </div>

    <!-- Submit button -->
    <button
      type="button"
      class="btn btn-primary btn-block mb-4"
      @click="register"
    >
      Register
    </button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>
        Already have an account?
        <router-link class="btn btn-success" to="/login">Login</router-link>
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
      username: "",
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
    async register(e) {
      e.preventDefault();
      await axios
        .post("/users", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.response = res.data;
          if (
            this.response.includes("Password must be at least 8 characters")
          ) {
            this.err = true;
            this.success = false;
          } else if (this.response.includes("already has an account")) {
            this.err = true;
            this.success = false;
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
