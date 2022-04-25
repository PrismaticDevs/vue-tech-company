<template>
  <h1 class="text-center">Register</h1>
  <form>
    <!-- Password input -->
    <div class="form-outline mb-4">
      <input
        type="text"
        id="form2Example0"
        class="form-control"
        autocomplete="on"
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
      />
      <label class="form-label" for="form2Example2">Password</label>
    </div>

    <!-- Submit button -->
    <button type="button" class="btn btn-primary btn-block mb-4">
      Sign in
    </button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>
        Have an account?
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
export default {};
</script>

<style scoped>
form {
  width: 33%;
  margin: 0 auto;
}
</style>
