<template>
  <div id="file">
    <h3>
      Files
      <button class="btn btn-outline-secondary float-right" @click="back">
        Back
      </button>
    </h3>
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="name"
                placeholder="Name"
                class="form-control"
              />
            </div>
            <button
              :disabled="!validateForm"
              @click="submit"
              class="btn btn-primary"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div class="col-12 mb-3" v-for="(file, index) in files" :key="index">
            <div class="card">
              <div class="card-body">{{ file }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleFile from "../../store/file/moduleFile";

export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    validateForm() {
      return this.name !== "";
    },
    files() {
      return this.$store.state.moduleFile.file;
    },
  },
  created() {
    if (!moduleFile.isRegistered) {
      this.$store.registerModule("moduleFile", moduleFile);
      moduleFile.isRegistered = true;
    }
    this.$store.dispatch("moduleFile/get");
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    submit() {
      this.$store
        .dispatch("moduleFile/add", { name: this.name })
        .then(() => (this.name = ""));
    },
  },
};
</script>
