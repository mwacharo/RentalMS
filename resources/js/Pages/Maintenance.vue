<template>
    <AppLayout>
        <VCard class="my-card">
            <v-container>
                <v-text-field
                    v-model="searchQuery"
                    label="Search Maintenance Requests"
                    @keyup.enter="performSearch"
                    variant="outlined"
                ></v-text-field>
            </v-container>
        </VCard>

        <VCard class="my-card" outlined>    
            <v-data-table
                :headers="headers"
                :loading="loading"
                :items="maintenanceRequests"
                :sort-by="[{ key: 'request_date', order: 'asc' }]"
                :responsive
            >
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Maintenance Requests</v-toolbar-title>

                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="700px">
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="props"
                                >
                                    New Request
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field
                                                    v-model="editedItem.description"
                                                    label="Description"
                                                    required
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12">
                                                <v-select
                                                    v-model="editedItem.unit_id"
                                                    :items="units"
                                                    item-title="unit_number"
                                                    label="Select Unit"
                                                    item-value="id"
                                                ></v-select>
                                            </v-col>

                                            <v-col cols="12">
                                                <v-menu
                                                    ref="menu"
                                                    v-model="menu"
                                                    :close-on-content-click="false"
                                                    :nudge-right="40"
                                                    :return-value.sync="editedItem.request_date"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="290px"
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                            v-model="editedItem.request_date"
                                                            label="Request Date"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="editedItem.request_date" no-title @input="menu = false"></v-date-picker>
                                                </v-menu>
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
                                    request?</v-card-title
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
        </VCard>
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
            { title: "Description", key: "description" },
            { title: "Unit Number", key: "unit.unit_number" },
            { title: "Request Date", key: "request_date" },
            { title: "Actions", key: "actions", sortable: false },
        ],
        searchQuery: "",
        maintenanceRequests: [],
        units: [],
        menu: false,
        editedIndex: -1,
        editedItem: {
            description: "",
            request_date: new Date().toISOString().substr(0, 10),
            unit_id: null,
        },
        defaultItem: {
            description: "",
            request_date: "",
            unit_id: null,
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "Maintenance Request" : "Maintenance Request";
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
        this.fetchUnits();
    },
    methods: {
        initialize() {
            const API_URL = "/v1/maintenance-requests";
            axios
                .get(API_URL)
                .then((response) => {
                    this.maintenanceRequests = response.data;
                })
                .catch((error) => {
                    console.error("API Error:", error);
                });
        },
        editItem(item) {
            this.editedIndex = this.maintenanceRequests.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            this.editedIndex = this.maintenanceRequests.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            axios
                .delete(`/v1/maintenance-request/${this.editedItem.id}`)
                .then(() => {
                    this.maintenanceRequests.splice(this.editedIndex, 1);
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
                request = axios.put(`/v1/maintenance-request/${this.editedItem.id}`, this.editedItem);
            } else {
                request = axios.post(`/v1/maintenance-request`, this.editedItem);
            }
            request
                .then((response) => {
                    if (this.editedIndex > -1) {
                        Object.assign(this.maintenanceRequests[this.editedIndex], response.data);
                    } else {
                        this.maintenanceRequests.push(response.data);
                    }
                    this.close();
                })
                .catch((error) => console.error("Saving error:", error));
        },
        performSearch() {
    this.loading = true;

    // Filter the maintenanceRequests based on the search query
    if (this.searchQuery.trim() === "") {
        // If the search query is empty, show all maintenance requests
        this.filteredMaintenanceRequests = this.maintenanceRequests;
    } else {
        const query = this.searchQuery.toLowerCase();

        this.filteredMaintenanceRequests = this.maintenanceRequests.filter((request) => {
            // Check if any relevant field contains the search query (e.g., request title, description, etc.)
            return (
                request.title.toLowerCase().includes(query) ||
                request.description.toLowerCase().includes(query) ||
                request.status.toLowerCase().includes(query)
            );
        });
    }

    this.loading = false;
},

        fetchUnits() {
            axios
                .get("/units")
                .then((response) => {
                    this.units = response.data;
                })
                .catch((error) => {
                    console.error("Failed to load units:", error);
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
