<template>
  <div>
    <NavPath :path="path" />
    <v-treeview
      v-model="tree"
      :items="repoFiles"
      activatable
      @update:open="setPath"
      @update:active="setContent"
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>
    <PopupFileContent :contentFile="filePopUp" ref="filepopup" />
  </div>
</template>

<script>
import NavPath from "@/components/NavPath.vue";
import PopupFileContent from "@/components/PopupFileContent.vue";
import { API } from "@/helpers/api";
import { icons } from "@/assets/icons";

export default {
  props: ["repoLink"],
  components: {
    NavPath,
    PopupFileContent,
  },
  data: () => ({
    files: {},
    tree: [],
    repoFiles: [],
    selectedRepoLink: "",
    path: [],
    openPopup: false,
    filePopUp: {},
  }),
  methods: {
    async getFiles() {
      this.searchingFiles = true;
      const data = await API.fetchRepoData(this.repoLink);
      this.searchingFiles = false;
      return data;
    },
    setPath(arr) {
      this.openPopup = true;
      this.path = [
        {
          text: "/",
          disabled: true,
        },
      ];
      this.path.push({
        text: arr[arr.length - 1],
        disabled: true,
      });
    },
    async setContent(arr) {
      let indexFile = "";
      for (const item of this.repoFiles) {
        if (item["name"] == arr[arr.length - 1]) {
          indexFile = this.repoFiles.indexOf(item);
        }
      }
      this.filePopUp["content"] = await API.fetchFileContent(this.repoFiles[indexFile]["download_url"]);
      this.filePopUp["name"] = this.repoFiles[indexFile]["name"];
      this.$refs.filepopup.open();
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
