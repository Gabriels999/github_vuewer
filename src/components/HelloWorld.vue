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
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: null,
    searchUser: null,
    usersList: [],
    userIsLoading: false,
  }),

  watch: {
    searchUser() {
      this.userIsLoading = true;

      // Items have already been loaded
      if (this.usersList.length > 0) {
        return (this.userIsLoading = false);
      }

      this.usersList = [{ login: "gabi" }, { login: "sara" }];

      // Items have already been requested
      if (this.userIsLoading) return;

      this.userIsLoading = false;
    },
  },
};
</script>
