<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>
<script>
export default {
  props: ["path"],
  data: () => ({
    items: [],
  }),
  watch: {
    path() {
      this.items = this.path;
    },
  },
};
</script>
