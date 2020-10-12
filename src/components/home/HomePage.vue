<template>
  <div id="home">
    <h3>
      Dashboard
      <button class="btn btn-outline-secondary float-right" @click="logout">
        Logout
      </button>
    </h3>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then((res) => {
        console.log(res);
        this.$router.push("/login");
      });
    },
  },
};
</script>
