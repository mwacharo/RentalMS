<template>

  <div class="text-center pa-4">

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      show(item) {
          console.log(item);
          this.dialog = true;
          this.id = item.id;
          // this.openFilter();
      },
      close () {
        this.dialog = false
      },
    },
  }
</script>