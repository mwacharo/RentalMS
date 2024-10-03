<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="my-card" outlined>
            <v-data-table
              :headers="headers"
              :loading="loading"
              :items="maintenanceRequests"
              :sort-by="[{ key: 'request_date', order: 'asc' }]"
              class="table-responsive"
              mobile-breakpoint="600"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Maintenance Requests</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" dark @click="createRequest">New Request</v-btn>
                </v-toolbar>
              </template>
  
              <template v-slot:item.actions="{ item }">
                <v-icon size="small" class="me-2" @click="editRequest(item)">
                  mdi-pencil
                </v-icon>
                <v-icon size="small" @click="deleteRequest(item)">
                  mdi-delete
                </v-icon>
              </template>
  
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize"> Reset </v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { title: "Request Date", key: "request_date" },
          { title: "Description", key: "description" },
          { title: "Status", key: "status" },
          { title: "Actions", key: "actions", sortable: false }
        ],
        loading: false,
        maintenanceRequests: []
      };
    },
    methods: {
      initialize() {
        // Logic to initialize data
      },
      createRequest() {
        // Logic to create a new maintenance request
      },
      editRequest(item) {
        // Logic to edit an existing request
      },
      deleteRequest(item) {
        // Logic to delete a request
      }
    }
  };
  </script>
  
  <style scoped>
  .table-responsive {
    overflow-x: auto;
  }
  .my-card {
    margin: 40px;
  }
  </style>
  