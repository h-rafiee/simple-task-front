<template>
  <div id="register">
    <div class="row justify-content-md-center">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Register</h5>
            <div class="card-text form">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  v-model="name"
                  id="name"
                  placeholder="Name"
                  class="form-control"
                />
              </div>
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
              <div class="form-group">
                <label for="password-confirmation">Password confirmation</label>
                <input
                  type="password"
                  v-model="passwordConfrimation"
                  id="password-confirmation"
                  placeholder="Password confirmation"
                  class="form-control"
                />
              </div>
              <div class="text-danger text-sm my-2">{{ errorMessage }}</div>
              <router-link to="/login" class="card-link"
                >I already have an account</router-link
              >
            </div>
            <button
              class="btn btn-primary mt-3"
              :disabled="!validateForm"
              @click="submit"
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
      name: "",
      email: "",
      password: "",
      passwordConfrimation: "",
      errorMessage: null,
    };
  },
  computed: {
    validateForm() {
      return (
        this.name !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.passwordConfrimation !== "" &&
        this.password === this.passwordConfrimation
      );
    },
  },
  methods: {
    submit() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfrimation,
      };

      this.$store
        .dispatch("auth/register", payload)
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        })
        .catch((error) => {
          let message = error.message;
          if (error.response) {
            if (error.response.data.errors) {
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
