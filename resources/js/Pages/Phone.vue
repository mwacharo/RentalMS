<template>
    <AppLayout>
        <VCard class="my-card">
            <v-row class="my-4">
                <!-- Adds margin to the y-axis -->
                <v-col>
                    <v-card class="pa-4">
                        <!-- Adds padding inside the card -->
                        <!-- Card content goes here -->
                        <!-- <v-icon>mdi-phone</v-icon> Make a new Call<br /> -->
                            <v-icon @click="openNewCall" class="call-action"left>mdi-phone</v-icon> Make a new Call<br>
                        <v-icon>mdi-account-supervisor</v-icon> Call an agent<br />
                        <v-icon>mdi-phone-missed</v-icon> Missed Calls 26<br />
                        <v-icon>mdi-format-list-checks</v-icon> Check Queue<br />
                    </v-card>
                </v-col>

                <v-spacer></v-spacer>
                <!-- This will create space between two columns -->

                <v-col>
                    <v-card class="pa-4">
                        <v-icon> mdi-phone</v-icon>
                        Calls made<br />
                        <v-icon>mdi-phone-hangup</v-icon>
                        Calls rejected<br />
                        <v-icon>mdi-phone-incoming</v-icon>
                        Incoming Calls<br />
                    </v-card>
                </v-col>
            </v-row>
        </VCard>

        <v-card>
            <v-tabs v-model="tab">
                <v-tab value="tenants">Tenants</v-tab>
                <v-tab value="landlords">Landlords</v-tab>
                <v-tab value="calls">Calls</v-tab>
            </v-tabs>
        </v-card>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field
                        required
                        id="input-search"
                        label="Search Contact ( phone, name,property)"
                        prepend-icon="mdi-magnify"
                        append-icon="mdi-tune"

                        @click="openFilter"
                        type="text"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>

        <!-- <v-card> -->
        <v-card>
            <VCard class="my-card" outlined>
                <v-data-table
                    show-select
                    :headers="headers"
                    :loading="loading"
                    :items="tenants"
                    :sort-by="[{ key: 'tenant_name', order: 'asc' }]"
                >
                    <template v-slot:top>
                        <v-toolbar>
                            <v-toolbar-title>Tenant</v-toolbar-title>

                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>

                            <v-dialog v-model="dialog" max-width="700px">
                                <V-card>
                                    <v-card-title>
                                        <span class="text-h5">{{
                                            formTitle
                                        }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.tenant_name
                                                        "
                                                        label="Tanant Name"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.email
                                                        "
                                                        label="Email"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.phone
                                                        "
                                                        label="phone"
                                                    ></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="4">
                                                    <v-select
                                                        v-model="
                                                            editedItem.property_id
                                                        "
                                                        :items="properties"
                                                        item-title="property_name"
                                                        label="Property Name"
                                                        item-value="id"
                                                    ></v-select>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="4">
                                                    <v-select
                                                        v-model="
                                                            editedItem.unit_id
                                                        "
                                                        :items="units"
                                                        item-title="unit_number"
                                                        label="Account Number"
                                                        item-value="id"
                                                    ></v-select>
                                                </v-col>

                                                <v-file-input
                                                    label="Select  file"
                                                    accept="pfd"
                                                    @change="uploadaAgreement"
                                                ></v-file-input>
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
                                </V-card>
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

                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            Reset
                        </v-btn>
                    </template>
                </v-data-table>
                <!-- import newcal and filter component -->

                <newcall ref="newcall" />
                <filter ref="filter" />
            </VCard>
        </v-card>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from "axios";
import newcall from "./Newcall.vue";
import filter from "./Filter.vue";

export default {
    components: {
        AppLayout,
        newcall,
        filter,
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
        openNewCall(item) {
            this.$refs.newcall.show(item);
        },
        openFilter(item) {
            this.$refs.filter.show(item);
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
            const API_URL = "property";
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
