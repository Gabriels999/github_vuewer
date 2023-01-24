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

export default {
  props: ["repoLink"],
  data: () => ({
    files: {
      html: "mdi-language-html5",
      js: "mdi-nodejs",
      json: "mdi-code-json",
      py: "mdi mdi-language-python",
      md: "mdi-language-markdown",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      xls: "mdi-file-excel",
      gitignore: "mdi mdi-git",
    },
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
      this.selectedRepoLink = this.repoLink;
      this.repoFiles = await this.getFiles();
    },
  },
};
</script>
