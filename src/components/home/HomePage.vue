<template>
  <div id="home">
    <h3>
      Dashboard
      <button class="btn btn-outline-secondary float-right" @click="logout">
        Logout
      </button>
    </h3>
    <div class="row mt-3">
      <div class="col">
        <table-object :columns="processColumns" :data="processData" />
      </div>
    </div>
  </div>
</template>

<script>
import TableObject from "../objects/TableObject";
import moduleProcess from "../../store/process/moduleProcess";

export default {
  data() {
    return {
      processColumns: [
        "USER",
        "PID",
        "%CPU",
        "%MEM",
        "VSZ",
        "RSS",
        "TTY",
        "STAT",
        "START",
        "TIME",
        "COMMAND",
      ],
    };
  },
  components: {
    TableObject,
  },
  computed: {
    processData() {
      return this.$store.state.moduleProcess.process;
    },
  },
  created() {
    if (!moduleProcess.isRegistered) {
      this.$store.registerModule("moduleProcess", moduleProcess);
      moduleProcess.isRegistered = true;
    }
    this.$store.dispatch("moduleProcess/get");
  },
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
