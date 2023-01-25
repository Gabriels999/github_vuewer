<template>
  <v-treeview v-model="tree" :items="repoFiles" activatable item-key="name" open-on-click>
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? "mdi-folder-open" : "mdi-folder" }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
import { API } from "@/helpers/api";
import { icons } from "@/assets/icons";

export default {
  props: ["repoLink"],
  data: () => ({
    files: {},
    tree: [],
    repoFiles: [],
    selectedRepoLink: "",
  }),
  methods: {
    async getFiles() {
      this.searchingFiles = true;
      const data = await API.fetchRepoData(this.repoLink);
      this.searchingFiles = false;
      return data;
    },
  },
  watch: {
    async repoLink() {
      this.files = icons;
      this.selectedRepoLink = this.repoLink;
      this.repoFiles = await this.getFiles();
    },
  },
};
</script>
