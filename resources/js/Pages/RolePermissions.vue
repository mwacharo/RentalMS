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
                <v-checkbox v-model="selectedPermissions" :label="permission.name" :value="permission.name" />
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
        selectedRoleId: '',
      };
    },
    methods: {
      fetchPermissions() {
        const API_URL = '/api/v1/permissions';
        axios
          .get(API_URL)
          .then(response => {
            this.permissions = response.data;
          })
          .catch(error => {
            console.error('Error fetching permissions:', error);
            this.$toastr.error('Failed to fetch permissions');
          });
      },
  
      showDialog(roleId) {
        this.fetchPermissions();
        this.selectedRoleId = roleId;
        console.log('Role ID passed to showDialog:', roleId);
        this.mainDialog = true;
  
        const API_URL = `/api/v1/roles/${roleId}/permissions`;
        console.log('Fetching permissions from:', API_URL);
        axios
          .get(API_URL)
          .then(response => {
            console.log('Permissions fetched:', response.data);
            this.selectedPermissions = response.data.permissions;
          })
          .catch(error => {
            console.error('Error fetching role permissions:', error);
            this.$toastr.error('Failed to fetch role permissions');
          });
      },
  
      closeDialog() {
        this.mainDialog = false;
      },
  
      updatePermissions() {
    const API_URL = `/api/v1/roles/${this.selectedRoleId}/permissions`;
    const payload = { permissions: this.selectedPermissions };
  
    axios
      .put(API_URL, payload)
      .then(() => {
        this.closeDialog();
        this.$toastr.success('Permissions updated successfully');
      })
      .catch(error => {
        console.error('Error updating permissions:', error);
        this.$toastr.error('Failed to update permissions');
      });
  },
  
      
    },
  };
  </script>
  