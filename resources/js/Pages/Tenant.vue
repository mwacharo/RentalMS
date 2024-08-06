<template>
    <AppLayout>
        <VCard class="my-card">
            <v-container>
                <v-text-field v-model="searchQuery" label="Search" @keyup.enter="performSearch"
                    variant="outlined"></v-text-field>
            </v-container>
        </VCard>

        <VCard class="my-card" outlined>
            <v-data-table show-select :headers="headers" :loading="loading" :items="tenants"
                :sort-by="[{ key: 'tenant_name', order: 'asc' }]">
                <template v-slot:top>
                    <v-toolbar>
                        <v-toolbar-title>Tenant</v-toolbar-title>

                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>

                        <v-dialog v-model="dialog" max-width="700px">
                            <template v-slot:activator="{ props }">
                                <v-btn color="success" dark class="mb-2 mr-2" @click="openExcel"
                                    prepend-icon="mdi-file-excel" variant="outlined">
                                    Import
                                </v-btn>

                                <v-btn color="primary" dark class="mb-2" prepend-icon="mdi-send" variant="outlined">
                                    Invoice
                                </v-btn>

                                <v-btn color="primary" dark class="mb-2" prepend-icon="mdi-email">
                                    Invoice
                                </v-btn>

                                <v-btn color="primary" dark class="mb-2" v-bind="props" prepend-icon="mdi-plus"
                                    variant="outlined">
                                    Tenant
                                </v-btn>
                            </template>

                            <V-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" >
                                                <v-text-field v-model="editedItem.tenant_name
                                                    " label="Tanant Name"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" >
                                                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" >
                                                <v-text-field v-model="editedItem.phone" label="phone"></v-text-field>
                                            </v-col>

                                            <v-col cols="12" sm="6" >
                                                <v-select v-model="editedItem.property_id
                                                    " :items="properties" item-title="property_name"
                                                    label="Property Name" item-value="id"></v-select>
                                            </v-col>

                                            <v-col cols="12" sm="6" >
                                                <v-select v-model="editedItem.unit_id" :items="units"
                                                    item-title="unit_number" label="Account Number"
                                                    item-value="id"></v-select>
                                            </v-col>

                                            <v-file-input label="Select  file" accept="pfd"
                                                @change="uploadaAgreement"></v-file-input>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="close">
                                        Cancel
                                    </v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="save">
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </V-card>
                        </v-dialog>

                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Are you sure you want to delete this
                                    item?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props" @click="tenantInvoice(item)" variant="text">
                                <v-icon color="info"> mdi-book </v-icon>
                            </v-btn>
                        </template>

                        <span> Create Invoice</span>
                    </v-tooltip>

                    <!-- 
                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-btn
                                icon
                                v-bind="props"
                                @click="openTenantInvoice(item)"
                                variant="text"
                            >
                                <v-icon color="primary"> mdi-eye </v-icon>
                            </v-btn>
                        </template>

                        <span>Invoice details</span>
                    </v-tooltip> -->

                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props" @click="editItem(item)" variant="text">
                                <v-icon color="info"> mdi-pencil </v-icon>
                            </v-btn>
                        </template>

                        <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props" @click="openBill(item)" variant="text">
                                <v-icon color="info"> mdi-cog </v-icon>
                            </v-btn>
                        </template>

                        <span>Assign Bills</span>
                    </v-tooltip>

                    <v-tooltip location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-btn icon v-bind="props" @click="deleteItem(item)" variant="text">
                                <v-icon color="error"> mdi-delete </v-icon>
                            </v-btn>
                        </template>

                        <span>Delete</span>
                    </v-tooltip>
                </template>

                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize"> Reset </v-btn>
                </template>
            </v-data-table>
            <!-- import of bill component -->
            <bill ref="bill" />
            <tenantinvoice ref="tenantinvoice" />

            <excel ref="excel" />
        </VCard>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from "axios";
import bill from "./Bill.vue";
import tenantinvoice from "./TenantInvoice.vue";
import excel from "./Excel.vue";

export default {
    components: {
        AppLayout,
        bill,
        tenantinvoice,
        excel,
    },
    data: () => ({
        dialog: false,
        loading: false,
        dialogDelete: false,
        headers: [
            {
                title: "Tenant Name",
                align: "start",
                sortable: false,
                key: "tenant_name",
            },
            { title: "Email", key: "email" },
            { title: "Phone", key: "phone" },
            { title: "Property ", key: "property.property_name" },
            { title: "Actions", key: "actions", sortable: false },
        ],

        selected: [],
        invoiceData: null,

        landlords: [],
        searchQuery: "",
        properties: [],
        tenants: [],
        tenant_name: [],
        property_id: [],
        units: [],
        bills: [],

        unit_id: "",

        editedIndex: -1,
        editedItem: {
            landlord_name: "",
            email: "",
            phone: "",
        },
        defaultItem: {
            landlord_name: "",
            email: "",
            phone: "",
            tenant_name: "",
            property_id: "",
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Tenant" : "Edit Tenant";
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
        this.fetchUnits();
        //   this.assignBills()
    },
    methods: {
        initialize() {
            const API_URL = "/tenants";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("API Response:", response.data);
                    this.tenants = response.data;
                })
                .catch((error) => {
                    console.error("API Error:", error);
                });
        },
        openBill(item) {
            this.$refs.bill.show(item);
        },
        openTenantInvoice(item) {
            this.$refs.tenantinvoice.show(item);
        },
        openExcel(item) {
            this.$refs.excel.show(item);
        },
        tenantInvoice(item) {
            const API_URL = "tenantInvoice/" + item.id;

            const data = {
                tenantId: this.tenantId,
            };

            axios
                .post(API_URL, data)
                .then((response) => {
                    console.log("Invoice created:", response.data);
                    this.invoiceData = response.data; // Store the response data

                    // Handle success (e.g., show a success message or update UI)
                })
                .catch((error) => {
                    console.error("Error creating invoice:", error);
                    // Handle error (e.g., show an error message)
                });
        },

        editItem(item) {
            this.editedIndex = this.tenants.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.tenants.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            axios
                .delete(`/tenant/${this.editedItem.id}`)
                .then(() => {
                    this.tenants.splice(this.editedIndex, 1);
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
                    `/tenant/${this.editedItem.id}`,
                    this.editedItem
                );
            } else {
                request = axios.post(`/tenant`, this.editedItem);
            }
            request
                .then((response) => {
                    if (this.editedIndex > -1) {
                        Object.assign(
                            this.tenants[this.editedIndex],
                            response.data.data
                        );
                    } else {
                        this.tenants.push(response.data.data);
                    }
                    this.close();
                })
                .catch((error) => console.error("Saving error:", error));

            //   this.close();
        },
        performSearch() {
            this.loading = true;
            const API_URL = "/landlords/search?query=" + this.searchQuery;
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("Search response:", response.data);
                    this.tenants = response.data; // Update your landlords list with the search result
                    this.loading = false;
                })
                .catch((error) => {
                    console.error("Search error:", error);
                    this.loading = false;
                });
        },

        fetchUnits() {
            const API_URL = "units";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("units response:", response.data);
                    this.units = response.data;
                })
                .catch((error) => {
                    console.error("failed to load units:", error);
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
    margin: 40px;
    /* Adjust the margin as needed */
}
</style>
