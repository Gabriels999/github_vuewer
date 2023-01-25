<template>
  <div>
    <NavPath :path="path" />
    <v-treeview v-model="tree" :items="repoFiles" activatable @update:active="setPath" item-key="name" open-on-click>
      <template v-slot:prepend="{ item, open }">
        <v-icon v-if="!item.file">
          {{ open ? "mdi-folder-open" : "mdi-folder" }}
        </v-icon>
        <v-icon v-else>
          {{ files[item.file] }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import NavPath from "@/components/NavPath.vue";
import { API } from "@/helpers/api";
import { icons } from "@/assets/icons";

export default {
  props: ["repoLink"],
  components: {
    NavPath,
  },
  data: () => ({
    files: {},
    tree: [],
    repoFiles: [],
    selectedRepoLink: "",
    path: [],
  }),
  methods: {
    async getFiles() {
      this.searchingFiles = true;
      const data = await API.fetchRepoData(this.repoLink);
      this.searchingFiles = false;
      return data;
    },
    setPath(arr) {
      debugger;
      this.path = [
        {
          text: "/",
          disabled: true,
        },
      ];
      this.path.push({
        text: arr[0],
        disabled: true,
      });
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
