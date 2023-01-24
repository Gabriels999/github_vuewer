<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12">
        <v-select
          v-model="selectedRepo"
          :items="userRepos"
          :loading="reposIsLoading"
          item-text="name"
          label="User Repos"
          persistent-hint
          return-object
          single-line
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { API } from "@/helpers/api";

export default {
  props: ["reposURL"],
  data: () => ({
    selectedRepo: { name: null },
    reposIsLoading: false,
    userRepos: [{ name: "Selecione um usuario" }],
  }),
  methods: {
    async getRepos() {
      this.reposIsLoading = true;
      const data = await API.userRepos(this.reposURL);
      this.reposIsLoading = false;
      return data;
    },
  },
  watch: {
    async reposURL() {
      this.userRepos = await this.getRepos();
    },
    selectedRepo() {
      this.$emit("repo", this.selectedRepo.contents_url);
    },
  },
};
</script>
