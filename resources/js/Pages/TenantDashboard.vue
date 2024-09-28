<template>
    <AppLayout>
        <v-container fluid>
            <!-- Header -->
            <v-row>
                <v-col>
                    <h2>Tenant Dashboard</h2>
                </v-col>
            </v-row>

            <!-- Summary Cards -->
            <v-row>
                <v-col cols="12" sm="6" md="3" v-for="(card, index) in cards" :key="index">
                    <v-card class="mx-auto my-3">
                        <v-card-title>{{ card.title }}</v-card-title>
                        <v-card-text class="py-0">
                            <v-row align="center" no-gutters>
                                <v-col class="text-h2" cols="6">
                                    {{ card.value }}
                                </v-col>
                                <v-col cols="6" class="text-right">
                                    <v-icon :color="card.color" :icon="card.icon" size="88"></v-icon>
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
                            <v-data-table :headers="transactionHeaders" :items="recentTransactions" class="elevation-1"></v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="mx-auto my-3">
                        <v-card-title>Invoices</v-card-title>
                        <v-card-text>
                            <v-data-table :headers="arrearsHeaders" :items="invoices" class="elevation-1"></v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Maintenance Requests -->
            <v-row>
                <v-col>
                    <v-card class="mx-auto my-3">
                        <v-card-title>Maintenance Requests</v-card-title>
                        <v-card-text>
                            <v-data-table :headers="maintenanceHeaders" :items="maintenanceRequests" class="elevation-1"></v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
    data: () => ({
        // Dashboard summary cards
        cards: [
            { title: "Units", value: 1, color: "info", icon: "mdi-domain" },
            { title: "Paid Rent", value: "72000", color: "blue", icon: "mdi-cash-check" },            
            { title: "Arrears", value: 0, color: "error", icon: "mdi-alert-octagon" },
            { title: "Maintenance", value: 1, color: "warning", icon: "mdi-wrench" },

        ],
        // Headers and data for tables
        transactionHeaders: [
            { title: "Unit Name", value: "unit" },
            { title: "Transaction ID", value: "transactionId" },
            { title: "Total Amount", value: "amount" },
            { title: "Payment Date", value: "date" },
        ],
        arrearsHeaders: [
            { title: "Invoice Number", value: "id" },
            { title: "Unit Name", value: "unit" },
            { title: "Amount", value: "amount" },
        ],
        maintenanceHeaders: [
            { title: "Request ID", value: "id" },
            { title: "Description", value: "description" },
            { title: "Status", value: "status" },
            { title: "Date", value: "date" },
        ],
        recentTransactions: [
            { unit: "Unit 101", transactionId: "T123", amount: "$500", date: "2024-07-01" },
        ],
        invoices: [
            { id :"100",unit: "Unit 101", amount: "$300" },
        ],
        maintenanceRequests: [
            { id: "R101", description: "Leaking faucet", status: "Pending", date: "2024-07-01" },
        ],
    }),
    components: {
        AppLayout,
    },
};
</script>

<style scoped>
.text-h2 {
    font-size: 2rem;
}
</style>
