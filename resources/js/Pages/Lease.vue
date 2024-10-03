<template>
    <AppLayout>
        <VCard class="my-card">
            <container>
                <v-text-field label="Search" variant="outlined"></v-text-field>
            </container>
        </VCard>

        <VCard class="my-card" outlined>
            <v-data-table :headers="headers" :items="leases" :sort-by="[{ key: 'calories', order: 'asc' }]">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Lease</v-toolbar-title>
                        <!-- <v-btn color="primary" dark class="mb-2" @click="LeaseDetails" prepend-icon="mdi-plus"
                            variant="outlined">
                            Lease Details
                        </v-btn> -->

                        <v-btn color="primary" dark class="mb-2" @click="OpenCreateLease" prepend-icon="mdi-plus"
                            variant="outlined">
                            Lease
                        </v-btn>
                    </v-toolbar>
                </template>

            </v-data-table>

            <!-- create a lease dialog-->
            <v-dialog v-model="dialog" max-width="800px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Create Lease Agreement</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="createLeaseAgreement">
                            <v-select label="Tenant" :items="tenants" item-title="tenant_name" item-value="id"
                                v-model="leaseAgreement.tenant_id" required></v-select>
                            <v-select label="Property" :items="properties" item-title="property_name" item-value="id"
                                v-model="leaseAgreement.property_id" required></v-select>
                            <v-select label="Unit" :items="units" item-title="unit_number" item-value="id"
                                v-model="leaseAgreement.unit_id" required></v-select>
                            <v-text-field label="Start Date" v-model="leaseAgreement.start_date" type="date"
                                required></v-text-field>
                            <v-text-field label="End Date" v-model="leaseAgreement.end_date" type="date"
                                required></v-text-field>
                            <v-text-field label="Rent Amount" v-model="leaseAgreement.rent_amount"
                                required></v-text-field>
                            <v-text-field label="Security Deposit" v-model="leaseAgreement.security_deposit"
                                required></v-text-field>
                                <!-- <v-col cols="12" sm="6">
                  <h6>Terms and Conditions</h6>
                  <p><strong>1. Parties</strong></p>
                  <p>The Landlord and Tenant as specified above.</p>
                  <p><strong>2. Term</strong></p>
                  <p>The lease starts on {{ lease.start_date }} and ends on {{ lease.end_date }}.</p>
                  <p><strong>3. Rent</strong></p>
                  <p>The monthly rent is KES {{ lease.rent }}, payable on or before the due date each month.</p>
                  <p><strong>4. Security Deposit</strong></p>
                  <p>The security deposit is KES {{ lease.security_deposit }}.</p>
                  <p><strong>5. Utilities</strong></p>
                  <p>The Tenant is responsible for all utilities.</p>
                  <p><strong>6. Maintenance and Repairs</strong></p>
                  <p>The Tenant shall maintain the Premises in good condition and notify the Landlord of necessary repairs.</p>
                  <p><strong>7. Use of Premises</strong></p>
                  <p>The Premises are for residential purposes only.</p>
                  <p><strong>8. Alterations</strong></p>
                  <p>No alterations without written consent from the Landlord.</p>
                  <p><strong>9. Subletting and Assignment</strong></p>
                  <p>No subletting or assignment without written consent from the Landlord.</p>
                  <p><strong>10. Termination</strong></p>
                  <p>Either party may terminate with [Number of Days] days notice.</p>
                </v-col> -->

                            <v-btn type="submit" color="primary">Create Lease</v-btn>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
    data() {
        return {
            dialog: false,
            leaseAgreement: {
                tenant_id: '',
                property_id: '',
                unit_id: '',
                start_date: '',
                end_date: '',
                rent_amount: '',
                security_deposit: ''
            },
            tenants: [],
            properties: [],
            units: [],
            headers: [
                { title: "Lease ID", align: "start", sortable: false, key: "ID" },
                { title: "Property", key: "calories" },
                { title: "Unit", key: "fat" },
                { title: "Tenant", key: "fat" },
                { title: "Start Date", key: "carbs" },
                { title: "End Date", key: "protein" },
                { title: "Rent Amount", key: "protein" },
                { title: "Security Deposit", key: "protein" },
                { title: "Actions", key: "actions", sortable: false }
            ],
            leases: [],
            editedIndex: -1,
            editedItem: {},
            defaultItem: {}
        };
    },
    created() {
        this.initialize();
    },
    methods: {
        OpenCreateLease() {
            this.dialog = true;

        },
        initialize() {
            // Fetch initial data here
            this.fetchTenants();
            this.fetchProperties();
            this.fetchUnits();
        },
        fetchTenants() {
            // Fetch tenants from the backend
            axios.get('tenants').then(response => {
                this.tenants = response.data;
            });
        },
        fetchProperties() {
            // Fetch properties from the backend
            axios.get('properties').then(response => {
                this.properties = response.data;
            });
        },
        // fetchUnits(propertyId) {
        fetchUnits() {
            // Fetch units based on the selected property from the backend
            // axios.get(`properties/${propertyId}/units`).then(response => {
            axios.get('units').then(response => {

                this.units = response.data;
            });
        },
        createLeaseAgreement() {
            // Send lease agreement data to the backend
            axios.post('/lease-agreements', this.leaseAgreement).then(response => {
                // Handle response
                console.log(response.data);
                // Add the new lease to the leases array or refresh the leases list
                this.leases.push(response.data);
                this.dialog = false;
                // Reset the form
                this.leaseAgreement = {
                    tenant_id: '',
                    property_id: '',
                    unit_id: '',
                    start_date: '',
                    end_date: '',
                    rent_amount: '',
                    security_deposit: ''
                };
            });
        },
    },
    // watch: {
    //     'leaseAgreement.property_id': function(newPropertyId) {
    //         this.fetchUnits(newPropertyId);
    //     }
    // }
};
</script>

<style scoped>
.my-card {
    margin: 40px;
    /* Adjust the margin as needed */
}
</style>


