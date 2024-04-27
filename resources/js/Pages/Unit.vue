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
                :items="units"
                :sort-by="[{ key: 'unit_number', order: 'asc' }]"
            >
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Unit</v-toolbar-title>

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
                                    New Unit
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>

                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    v-model="editedItem.unit_number"
                                                    label="Unit Number"
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    v-model="
                                                        editedItem.rent
                                                    "
                                                    label="Rent"
                                                ></v-text-field>
                                            </v-col>


                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    v-model="editedItem.deposit"
                                                    label="Deposit"
                                                ></v-text-field>
                                            </v-col>

                                            <!-- <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    v-model="editedItem.tenant_name"
                                                    label="Tenant"
                                                ></v-text-field>
                                            </v-col> -->

                                            <v-col cols="12" sm="6" md="4">
                                                <v-select
                                                    v-model="
                                                        editedItem.property_id
                                                    "
                                                    :items="properties"
                                                    item-title="property_name"
                                                    label="Property"
                                                    item-value="id"
                                                ></v-select>
                                            </v-col>
<!-- 
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field
                                                    v-model="editedItem.unit_status"
                                                    label="Unit Status"
                                                ></v-text-field>
                                            </v-col> -->

                                        
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
                    <!-- <v-icon
                        size="small"
                        class="me-2"
                        @click="assignBills(item)"
                    >
                        mdi-cog
                    </v-icon> -->

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
            // { title: "Tenant Name", key: "tenant_name" },
            {
                title: "Unit Number",
                align: "start",
                sortable: false,
                key: "unit_number",
            },
            { title: "Rent", key: "rent" },
            { title: "Deposit", key: "deposit" },
            // { title: "Unit Status", key: "unit_status" },
            { title: "Property ", key: "property.property_name" },
          
            { title: "Actions", key: "actions", sortable: false },
        ],
        unit_number: "",
        searchQuery: "",
        properties: [],
        rent: [],
        deposit: [],
        units:[],
        // tenant_name: "",
        property_name:"",
        // unit_status:"",
        property_id: "",

        editedIndex: -1,
        editedItem: {
            unit_number: "",
            rent: "",
            deposit: "",
        // unit_status:"",
        

        },
        defaultItem: {
            // landlord_name: "",
            email: "",
            phone: "",
            // tenant_name: "",
            property_id: "",
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Unit" : "Edit Unit";
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
        this.fetchProperties();
    },
    methods: {
        initialize() {
            const API_URL = "/units";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("API Response:", response.data);
                    this.units = response.data;
                })
                .catch((error) => {
                    console.error("API Error:", error);
                });
        },
        // assignBills(item) {
        //     // eventBus.$emit('billsEvent');
        //     this.$refs.bill.show(item);
        // },
        editItem(item) {
            this.editedIndex = this.units.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.units.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            axios
                .delete(`/unit/${this.editedItem.id}`)
                .then(() => {
                    this.units.splice(this.editedIndex, 1);
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
                // console.log(Item);
                request = axios.put(
                    `/unit/${this.editedItem.id}`,
                    this.editedItem
                );
            } else {
                request = axios.post(`/unit`, this.editedItem);
            }
            request
                .then((response) => {
                    if (this.editedIndex > -1) {
                        Object.assign(
                            this.units[this.editedIndex],
                            response.data.data
                        );
                    } else {
                        this.units.push(response.data.data);
                    }
                    this.close();
                })
                .catch((error) => console.error("Saving error:", error));

            //   this.close();
        },
        performSearch() {
            this.loading = true;
            const API_URL = "/unit/search?query=" + this.searchQuery;
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("Search response:", response.data);
                    this.units = response.data; // Update your landlords list with the search result
                    this.loading = false;
                })
                .catch((error) => {
                    console.error("Search error:", error);
                    this.loading = false;
                });
        },
        fetchProperties() {
            const API_URL = "properties";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("properties response:", response.data);
                    this.properties = response.data;
                })
                .catch((error) => {
                    console.error("failed to load properties:", error);
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
