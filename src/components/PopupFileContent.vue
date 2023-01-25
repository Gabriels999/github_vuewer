<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" :value="isOpen" max-width="600">
        <template v-slot:default>
          <v-card>
            <v-toolbar color="primary" dark>{{ contentFile.name }}</v-toolbar>
            <v-card-text>
              <div class="text-body-1 pa-6">{{ contentFile.content }}</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="close">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["contentFile"],
  data: () => ({
    isOpen: false,
    text: "",
  }),
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>
