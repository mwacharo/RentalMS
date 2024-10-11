<template>
  <v-dialog v-model="mainDialog" max-width="800">
    <v-card class="my-card" outlined>
      <v-card-title>
        <span class="text-h5">Permissions</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-for="(permission, index) in permissions" :key="index" cols="12" md="3">
              <v-checkbox v-model="selectedPermissions" :label="permission.name" :value="permission.name"
                :checked="selectedPermissions.includes(permission.name)" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="closeDialog">Close</v-btn>
        <v-btn color="primary" @click="updatePermissions">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mainDialog: false,
      permissions: [],
      selectedPermissions: [],
      selectedUserId: '',
    };
  },
  methods: {
    fetchPermissions() {
      const API_URL = '/v1/permissions';
      axios
        .get(API_URL)
        .then((response) => {
          this.permissions = response.data;
        })
        .catch((error) => {
          console.error('API Error:', error);
        });
    },
    showDialog(userId) {
      this.fetchPermissions();
      
      console.log("userId:", userId);
      this.selectedUserId = userId;
      console.log("User ID passed to showDialog:", this.userId); // Log the user ID
      this.mainDialog = true;

      // Fetch user's current permissions
      const API_URL = `/v1/users/${userId}/permissions`;
      console.log("API URL:", API_URL);

      axios
        .get(API_URL)
        .then((response) => {
          console.log("Permissions fetched:", response.data); // Log the response data
          // this.selectedPermissions = response.data.map(p => p.name);
          this.selectedPermissions = response.data;
        })
        .catch((error) => {
          console.error("API Error:", error); // Log any errors
        });
    }
    ,
    closeDialog() {
      this.mainDialog = false;
    },
    updatePermissions() {
      const API_URL = `/v1/users/${this.selectedUserId}/permissions`;
      const payload = { permissions: this.selectedPermissions };
      axios
        .put(API_URL, payload)
        .then(() => {
          this.closeDialog();
          // Notify success
          this.$toastr.success('Permissions updated successfully');
        })
        .catch((error) => {
          console.error('API Error:', error);
          // Notify error
          this.$toastr.error('Failed to update permissions');
        });
    },
  },
};
</script>

<style scoped>
.my-card {
  margin: 20px;
}
</style>