<template>
  <div id="login">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <div class="card-text form">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  v-model="email"
                  id="email"
                  placeholder="Email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model="password"
                  id="password"
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <div class="text-danger text-sm my-2">{{ errorMessage }}</div>
              <router-link to="/register" class="card-link"
                >Register new account</router-link
              >
            </div>
            <button
              :disabled="!validateForm"
              @click="submit"
              class="btn btn-primary mt-3"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
    };
  },
  computed: {
    validateForm() {
      return this.email !== "" && this.password !== "";
    },
  },
  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("auth/login", payload)
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        })
        .catch((error) => {
          let message = error.message;
          if (error.response) {
            if (error.response.status === 401) {
              message = "wrong email or password";
            } else if (error.response.data.errors) {
              const errors = error.response.data.errors;
              message = errors[Object.keys(errors)[0]][0];
            }
          }
          this.errorMessage = message;
        });
    },
  },
};
</script>
