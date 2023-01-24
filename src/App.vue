<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-main>
      <SearchUsers @update="updateSelectUser" />
      <UserRepos @repo="selectRepo" :reposURL="userReposURL" />
      <RepoFiles :repoLink="selectedRepo" />
    </v-main>
  </v-app>
</template>

<script>
import SearchUsers from "./components/SearchUsers";
import UserRepos from "./components/UserRepos";
import RepoFiles from "./components/RepoFiles";

export default {
  name: "App",

  components: {
    SearchUsers,
    UserRepos,
    RepoFiles,
  },

  data: () => ({
    userReposURL: null,
    selectedRepo: null,
  }),
  methods: {
    updateSelectUser(e) {
      this.userReposURL = e.repos_url;
    },
    selectRepo(repo) {
      this.selectedRepo = repo;
    },
  },
};
</script>
