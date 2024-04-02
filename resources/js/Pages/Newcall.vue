<template>
    <div class="text-center pa-4">
        <v-dialog v-model="dialog" width="auto">
            <v-card width="600" height="400" input-type="text">
                <v-card>
                    <v-responsive class="mx-auto" max-width="600">
                        <v-text-field
                            hide-details="auto"
                            placeholder="enter  phone number"
                            type="text"
                            bg-color="success"
                        ></v-text-field>
                    </v-responsive>
                    <!-- icons -->
                    <v-card class="px-4">
                        <!-- 'px-4' adds padding on the x-axis, replace '4' with the desired size -->
                        <v-icon
                            class="mdi mdi-account ml-2"
                            color="error"
                        ></v-icon
                        ><br />
                        <!-- 'ml-2' adds left margin, replace '2' with the desired size -->
                        <v-icon class="mdi mdi-email ml-2" color="info"></v-icon
                        ><br />
                        <v-icon
                            class="mdi mdi-phone ml-2"
                            color="success"
                        ></v-icon
                        ><br />
                        <v-icon
                            class="mdi mdi-phone ml-2"
                            color="warning"
                        ></v-icon
                        ><br />
                        <v-icon class="mdi mdi-map-marker ml-2"></v-icon><br />
                    </v-card>
                </v-card>
                <!-- <template v-slot:actions>
                    <v-btn class="ms-auto" text @click="dialog = true">
                        <v-icon class="mdi mdi-phone" color="success"></v-icon>
                    </v-btn>
                    <div>
                    <v-icon class="mdi mdi-phone-hangup" color="error">hangup</v-icon>
                    <v-icon class="mdi mdi-pause grey--text" color="warning">Hold</v-icon>
                    <v-icon class="mdi mdi-phone-forward blue--text" color="info">Transfer</v-icon>
                    </div>
                </template> -->

                <template v-slot:actions>
                    <!-- Initial phone icon to be clicked, will hide itself and show other icons -->
                    <v-btn
                    :loading="loading"
                        v-if="showPhoneIcon"
                        class="ms-auto"
                        text
                        @click="toggleIcons"
                    >
                        <v-icon class="mdi mdi-phone" color="success"></v-icon>
                    </v-btn>

                    <space></space>

                    <!-- These icons will be hidden initially and shown when the phone icon is clicked -->
                    <div v-if="!showPhoneIcon">
                        <v-icon class="mdi mdi-phone-hangup" color="error" @click="dialog =false"
                            >hangup</v-icon
                        >
                        <v-icon class="mdi mdi-pause" color="warning"
                            >Hold</v-icon
                        >
                        <v-icon class="mdi mdi-phone-forward" color="info"
                            >Transfer</v-icon
                        >
                    </div>

                </template>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            showPhoneIcon: true, // This will control the visibility of the icons
        };
    },
    methods: {
        show(item) {
            console.log(item);
            this.dialog = true;
            this.id = item.id;
            // this.openNewCall;
        },
        close() {
            this.dialog = false;
        },
        toggleIcons() {
            this.loading = true; // Start loading
            this.showPhoneIcon = !this.showPhoneIcon; // This will switch between showing the phone icon and the other icons
        },
    },
};
</script>

<style scoped>
.icon-group {
  display: flex;
  align-items: left;
  justify-content: flex-end;
}
</style>