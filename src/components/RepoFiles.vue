<template>
  <div>
    <template>
      <div>
        <v-breadcrumbs divider=">" :items="breadcrumbPath" @click="resetBreadcrumb"></v-breadcrumbs>
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
              <v-list-item-title v-text="file.name"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon v-text="file.type === 'dir' ? 'mdi-folder' : 'mdi-file'"></v-icon>
            </v-list-item-icon>
          </template>
          <v-list-item v-if="file.childrenFiles">
            <v-list-item-content v-for="childFile in file.childrenFiles" :key="childFile.name" no-action>
              <v-list-item-title v-text="childFile.name"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="childFile.type === 'dir' ? 'mdi-folder' : 'mdi-file'"></v-icon>
              </v-list-item-icon>
            </v-list-item-content>
          </v-list-item>
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
    breadcrumbPath: [
      {
        text: "/",
        disabled: true,
      },
    ],
    selectedFile: null,
  }),
  methods: {
    async getFiles() {
      this.searchingFiles = true;
      const data = await API.fetchRepoData(this.repoLink);
      this.searchingFiles = false;
      //mock
      // return data;
      //real
      return data.json();
    },
    selectFile(e) {
      this.resetBreadcrumb();
      this.selectedFile = e;
    },
    resetBreadcrumb() {
      this.breadcrumbPath = [
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
      debugger;
      const response = await API.fetchFileChildren(
        this.selectedRepoLink,
        this.selectedFile.path,
        this.selectedFile.type,
        this.selectedFile
      );
      if (response.length > 0) {
        this.childrenFiles = response;
        this.breadcrumbPath.push({
          text: this.selectedFile.path,
          disable: true,
        });
        this.selectedFile["childrenFiles"] = response;
      } else {
        // usar campo download_url
        console.log("CHAMAR POPUP COM CONTEUDO DO ARQUIVO AQUI");
      }
    },
    breadcrumbPath() {},
  },
};
</script>
