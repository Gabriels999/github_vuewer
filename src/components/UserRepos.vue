<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12">
        <v-select
          v-model="selectedRepo"
          :items="userRepos"
          :loading="reposIsLoading"
          :hint="`Stars: ${selectedRepo.stargazers_count}`"
          item-text="name"
          item-value="stargazers_count"
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
import { fetchRepos } from "@/helpers/api";

export default {
  props: ["reposURL"],
  data: () => ({
    selectedRepo: { name: null, stargazers_count: 0 },
    reposIsLoading: false,
    userRepos: [{ name: "Selecione um usuario", stargazers_count: 0 }],
  }),
  methods: {
    async getRepos() {
      this.reposIsLoading = true;
      debugger;
      const data = await fetchRepos.userRepos(this.reposURL);
      this.reposIsLoading = false;
      return data;
    },
  },
  watch: {
    async reposURL() {
      this.userRepos = await this.getRepos();
    },
    selectedRepo() {},
  },
};
</script>
