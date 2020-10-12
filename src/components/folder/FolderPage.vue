<template>
  <div id="folder">
    <h3>
      Folders
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
          <div
            class="col-12 mb-3"
            v-for="(folder, index) in folders"
            :key="index"
          >
            <div class="card">
              <div class="card-body">{{ folder }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleFolder from "../../store/folder/moduleFolder";

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
    folders() {
      return this.$store.state.moduleFolder.folder;
    },
  },
  created() {
    if (!moduleFolder.isRegistered) {
      this.$store.registerModule("moduleFolder", moduleFolder);
      moduleFolder.isRegistered = true;
    }
    this.$store.dispatch("moduleFolder/get");
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    submit() {
      this.$store
        .dispatch("moduleFolder/add", { name: this.name })
        .then(() => (this.name = ""));
    },
  },
};
</script>
