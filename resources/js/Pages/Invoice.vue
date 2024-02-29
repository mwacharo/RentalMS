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
                :items="invoices"
                :sort-by="[{ key: 'invoice_id', order: 'asc' }]"
            >
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Invoice</v-toolbar-title>

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
                                </v-btn>
                            </template>

                      
                        </v-dialog>
                    </v-toolbar>
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
            {
                title: "Invoice ID",
                align: "start",
                sortable: false,
                key: "id",
            },
            { title: "Property Name", key: "tenant.property.property_name" },
            { title: "Unit Number", key: "unit.unit_number" },
            { title: "Tenant Name", key: "tenant.tenant_name" },
            // { title: "Rent", key: "unit.rent" },
            // { title: "Deposit", key: "unit.deposit" },
            { title: "Rent", key: "total_amount" },
            { title: "Due Date", key: "due_date" },
            { title: "Status", key: "status" },
            { title: "Issue Date ", key: "issued_at" },
        ],
        invoices: [],
        searchQuery: "",
        unit_number: " ",
        tenant_name: " ",
        due_date: "",
        issued_at: "",
        property_name: "",
    }),

    created() {
        this.initialize();
    },
    
    methods: {
        initialize() {
            const API_URL = "/api/invoices";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("API Invoice Response:", response.data);
                    this.invoices = response.data;
                })
                .catch((error) => {
                    console.error("API Error:", error);
                });
        },

        performSearch() {
            this.loading = true;
            const API_URL = "/api/invoice/search?query=" + this.searchQuery;
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("Search response:", response.data);
                    this.invoices = response.data;
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


