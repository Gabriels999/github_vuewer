<template>
  <div>
    <template>
      <div>
        <v-breadcrumbs divider=">" :items="items" @click="resetItems"></v-breadcrumbs>
      </div>
    </template>
    <v-card class="mx-auto">
      <v-list>
        <v-list-group
          v-for="file in repoFiles"
          :loading="searchingFiles"
          :key="file.name"
          @click="selectFile(file)"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ file.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>{{ file.type === "dir" ? "mdi-folder" : "mdi-file" }}</v-icon>
            </v-list-item-icon>
            <template v-if="childrenFiles">
              <v-row
                v-for="childFile in childrenFiles"
                :loading="searchingFiles"
                :key="childFile.name"
                @click="selectFile(childFile)"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{ childFile.name }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>{{ childFile.type === "dir" ? "mdi-folder" : "mdi-file" }}</v-icon>
                  </v-list-item-icon>
                </template>
              </v-row>
            </template>
          </template>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { API } from "@/helpers/api";

export default {
  props: ["repoLink"],
  data: () => ({
    selectedRepoLink: "",
    searchingFiles: false,
    repoFiles: [],
    items: [
      {
        text: "/",
        disabled: true,
      },
    ],
    selectedFile: null,
    childrenFiles: null,
  }),
  methods: {
    async getFiles() {
      this.searchingFiles = true;
      const data = await API.fetchRepoData(this.repoLink);
      this.searchingFiles = false;
      return data.json();
    },
    selectFile(e) {
      this.selectedFile = e;
    },
    resetItems() {
      this.items = [
        {
          text: "/",
          disabled: true,
        },
      ];
    },
  },
  watch: {
    async repoLink() {
      this.selectedRepoLink = this.repoLink;
      // Dar um jeito de incluir em cada elemento uma chave 'children files' que vai ser preenchida posteriormente com a fetchFileChildren dentro da selectedFile
      this.repoFiles = await this.getFiles();
    },
    async selectedFile() {
      this.resetItems();
      const response = await API.fetchFileChildren(this.selectedRepoLink, this.selectedFile.path);
      if (response.length > 0) {
        this.childrenFiles = response;
        this.items.push({
          text: this.selectedFile.path,
          disable: true,
        });
      } else {
        console.log("CHAMAR POPUP COM CONTEUDO DO ARQUIVO AQUI");
      }
    },
    items() {},
  },
};
</script>
