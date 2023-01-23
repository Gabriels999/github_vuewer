<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <template>
          <v-card color="blue text--lighten-2" dark>
            <v-card-text>
              <v-autocomplete
                v-model="user"
                :items="usersList"
                :loading="userIsLoading"
                :search-input.sync="searchUser"
                color="white"
                hide-no-data
                item-text="login"
                label="Usuarios GitHub"
                placeholder="Digite para buscar"
                prepend-icon="mdi-database-search"
                return-object
              ></v-autocomplete>
            </v-card-text>
            <v-list-item-avatar v-show="user">
              <img :src="user.avatar_url" />
            </v-list-item-avatar>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { searchUsersAPI } from "@/helpers/api";

export default {
  data: () => ({
    user: "",
    searchUser: null,
    usersList: [],
    userIsLoading: false,
  }),

  watch: {
    searchUser() {
      this.userIsLoading = true;
      this.clearUserList();

      // Items have already been loaded
      if (this.usersList.length > 0) {
        return (this.userIsLoading = false);
      }
      this.fetchUsersDebounced();
    },
    user() {
      this.$emit("update", this.user);
    },
  },
  methods: {
    clearUserList() {
      this.usersList = [];
    },
    fetchUsersDebounced() {
      clearTimeout(this._searchTimerId);
      this._searchTimerId = setTimeout(() => {
        searchUsersAPI.fetchUsers(this.searchUser).then((data) => {
          this.usersList = data;
          this.userIsLoading = false;
        });
      }, 500);
    },
  },
};
</script>
