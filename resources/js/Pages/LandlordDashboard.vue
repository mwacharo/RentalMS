<template>
    <AppLayout>
        <v-container fluid>
            <!-- Header -->
            <v-row>
                <v-col cols="12">
                    <h2>Landlord Dashboard</h2>
                </v-col>
            </v-row>

            <!-- Summary Cards -->
            <v-row>
                <v-col cols="12" sm="6" md="3" v-for="card in summaryCards" :key="card.title">
                    <v-card class="mx-auto my-3">
                        <v-card-title>{{ card.title }}</v-card-title>
                        <v-card-text>
                            <v-row align="center" no-gutters>
                                <v-col class="text-h2" cols="6">
                                    {{ card.value }}
                                </v-col>
                                <v-col cols="6" class="text-right">
                                    <v-icon :color="card.iconColor" :size="88">{{ card.icon }}</v-icon>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Recent Transactions and Top Arrears -->
            <v-row>
                <v-col cols="12" md="6">
                    <v-card class="mx-auto my-3">
                        <v-card-title>Recent Transactions</v-card-title>
                        <v-card-text>
                            <v-data-table :headers="transactionHeaders" :items="recentTransactions"
                                class="elevation-1"></v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="mx-auto my-3">
                        <v-card-title>Top Arrears</v-card-title>
                        <v-card-text>
                            <v-data-table :headers="arrearsHeaders" :items="topArrears"
                                class="elevation-1"></v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Properties -->
            <v-row>
                <v-col cols="12">
                    <v-card class="mx-auto my-3">
                        <v-card-title>Properties</v-card-title>
                        <v-card-text>
                            <v-row>

                                <v-data-table :headers="propertyHeaders" :items="properties" class="elevation-1"
                                    :items-per-page="5" item-key="id">
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon small @click="viewProperty(item)">mdi-eye</v-icon>
                                        <v-icon small @click="editProperty(item)">mdi-pencil</v-icon>
                                        <v-icon small @click="deleteProperty(item)">mdi-delete</v-icon>
                                    </template>
                                </v-data-table>

                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from 'axios';

export default {
    components: {
        AppLayout,
    },
    data() {
        return {
            propertyHeaders: [
                {
                    title: "Property Name",
                    align: "start",
                    sortable: false,
                    key: "property_name",
                },
                { title: "Address", key: "address" },
                { title: "Email", key: "email" },
                { title: "Phone Number", key: "phone" },
                { title: "Description", key: "description" },
                { title: "Landlord", key: "landlord.landlord_name" },
                { title: "Units", key: "number_of_units" },
                { title: "Actions", key: "actions", sortable: false },
            ],

            properties: [
                {
                    id: 1,
                    name: "Sunset Apartments",
                    location: "123 Sunset Blvd",
                    email: "info@sunsetapartments.com",
                    phone: "123-456-7890",
                    description: "Luxury apartments with sea view.",
                    landlord: "John Doe",
                    totalUnits: 50,
                    occupiedUnits: 45,
                    vacantUnits: 5,
                },
                {
                    id: 2,
                    name: "Greenwood Villas",
                    location: "456 Green St",
                    email: "contact@greenwoodvillas.com",
                    phone: "987-654-3210",
                    description: "Eco-friendly living spaces.",
                    landlord: "Jane Smith",
                    totalUnits: 30,
                    occupiedUnits: 28,
                    vacantUnits: 2,
                },

            ],
            summaryCards: [
                { title: "Total Properties", value: 5, icon: "mdi-home-city", iconColor: "info" },
                { title: "Total Units", value: 100, icon: "mdi-domain", iconColor: "info" },
                { title: "Occupied Units", value: 90, icon: "mdi-home-group", iconColor: "success" },
                { title: "Vacant Units", value: 10, icon: "mdi-home-outline", iconColor: "warning" },
            ],
            transactionHeaders: [
                { title: "Tenant Name", value: "tenantName" },
                { title: "Unit Name", value: "unitName" },
                { title: "Transaction ID", value: "transactionId" },
                { title: "Total Amount", value: "totalAmount" },
                { title: "Payment Date", value: "paymentDate" },
            ],
            recentTransactions: [],
            arrearsHeaders: [
                { title: "Tenant Name", value: "tenantName" },
                { title: "Unit Name", value: "unitName" },
                { title: "Arrears Amount", value: "arrearsAmount" },
                { title: "Due Date", value: "dueDate" },
            ],
            topArrears: [],
            properties: [],
        };
    },
    mounted() {
        this.fetchDashboardData();
    },
    methods: {
        async fetchDashboardData() {
            try {
                const response = await axios.get('/api/landlord-dashboard-data');
                const data = response.data;

                this.summaryCards[0].value = data.totalProperties;
                this.summaryCards[1].value = data.totalUnits;
                this.summaryCards[2].value = data.occupiedUnits;
                this.summaryCards[3].value = data.vacantUnits;

                this.recentTransactions = data.recentTransactions;
                this.topArrears = data.topArrears;
                this.properties = data.properties;
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        }
    }
};
</script>

<style scoped>
.text-h2 {
    font-size: 2rem;
}
</style>
