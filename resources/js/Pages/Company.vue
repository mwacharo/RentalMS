<template>
    <AppLayout>
        <VCard class="my-card">
            <v-container>
                <v-text-field
                    v-model="searchQuery"
                    label="Search"
                    @keyup.enter="performSearch"
                    variant="outlined"
                ></v-text-field>
            </v-container>
        </VCard>
  
        <VCard class="my-card" outlined>
            <v-data-table
                :headers="headers"
                :loading="loading"
                :items="users"
                :sort-by="[{ key: 'company_name', order: 'asc' }]"
            >
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Company</v-toolbar-title>
  
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="props"
                                >
                                    New Company
                                </v-btn>
                            </template>
  
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>
  
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" >
                                                <v-text-field
                                                    v-model="
                                                        editedItem.company_name
                                                    "
                                                    label=" Name"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" >
                                                <v-text-field
                                                    v-model="editedItem.email"
                                                    label="Email"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" >
                                                <v-text-field
                                                    v-model="editedItem.phone"
                                                    label="phone"
                                                ></v-text-field>
                                            </v-col>
                                       
                                      
                                        </v-row>
                                    </v-container>
                                </v-card-text>
  
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue-darken-1"
                                        variant="text"
                                        @click="close"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        color="blue-darken-1"
                                        variant="text"
                                        @click="save"
                                    >
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5"
                                    >Are you sure you want to delete this
                                    item?</v-card-title
                                >
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue-darken-1"
                                        variant="text"
                                        @click="closeDelete"
                                        >Cancel</v-btn
                                    >
                                    <v-btn
                                        color="blue-darken-1"
                                        variant="text"
                                        @click="deleteItemConfirm"
                                        >OK</v-btn
                                    >
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
           
  
                    <v-icon size="small" class="me-2" @click="editItem(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon size="small" @click="deleteItem(item)">
                        mdi-delete
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize"> Reset </v-btn>
                </template>
            </v-data-table>
        </vcard>
    </AppLayout>
  </template>
  
  <script>
  import AppLayout from "@/Layouts/AppLayout.vue";
  import axios from "axios";
  
  export default {
    components: {
        AppLayout,
    },
    data: () => ({
        dialog: false,
        loading: false,
        dialogDelete: false,
        headers: [
            {
                title: "Agent Name",
                align: "start",
                sortable: false,
                key: "company_name",
            },
            { title: "Email", key: "email" },
            { title: "Phone", key: "phone" },
            { title: "Actions", key: "actions", sortable: false },
        ],
        users: [],
        searchQuery: "",
  
        editedIndex: -1,
        editedItem: {
            company_name: "",
            email: "",
            phone: "",
        },
        defaultItem: {
            company_name: "",
            email: "",
            phone: "",
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Company" : "Edit Company";
        },
    },
    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },
  
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            const API_URL = "/companies";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("API Response:", response.data);
                    this.users = response.data;
                })
                .catch((error) => {
                    console.error("API Error:", error);
                });
        },
        editItem(item) {
            this.editedIndex = this.users.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
     
        deleteItem(item) {
            this.editedIndex = this.users.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            axios
                .delete(`/company/${this.editedItem.id}`)
                .then(() => {
                    this.users.splice(this.editedIndex, 1);
                    this.closeDelete();
                })
                .catch((error) => console.error("Deletion error:", error));
        },
        close() {
            this.dialog = false;
            this.resetForm();
        },
  
  
  
        closeDelete() {
            this.dialogDelete = false;
            this.resetForm();
        },
        resetForm() {
            this.editedItem = Object.assign({}, this.defaultItem);
            this.editedIndex = -1;
     
        },
        save() {
            let request;
            if (this.editedIndex > -1) {
                request = axios.put(
                    `/company/${this.editedItem.id}`,
                    this.editedItem
                );
            } else {
                request = axios.post(`/company`, this.editedItem);
            }
            request
                .then((response) => {
                    if (this.editedIndex > -1) {
                        Object.assign(
                            this.users[this.editedIndex],
                            response.data.data
                        );
                    } else {
                        this.users.push(response.data.data);
                    }
                    this.close();
                })
                .catch((error) => console.error("Saving error:", error));
  
            this.close();
        },
        performSearch() {
            this.loading = true;
            const API_URL = "/company/search?query=" + this.searchQuery;
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("Search response:", response.data);
                    this.users = response.data; // Update your users list with the search result
                    this.loading = false;
                })
                .catch((error) => {
                    console.error("Search error:", error);
                    this.loading = false;
                });
   
        },
    },
  };
  </script>
  
  <style scoped>
  .my-card {
    margin: 40px; /* Adjust the margin as needed */
  }
  </style>
  