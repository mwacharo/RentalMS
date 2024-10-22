<template>
    <AppLayout>
        <v-row>
            <v-col sm="3">Dashboard</v-col>
        </v-row>
        <!-- <v-row>
            <v-col sm="3">FILTER</v-col>
        </v-row> -->

        <v-row>
            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Units"> </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }} 100
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="info"
                                    icon="mdi-domain"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>
                </v-card>
            </v-col>

            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Maintanance">
                        <template v-slot:subtitle> </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }} 64
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="warning"
                                    icon="mdi-wrench"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>

                    <v-divider></v-divider>
                </v-card>
            </v-col>

            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Occupied Units">
                        <template v-slot:subtitle> </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }} 90
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="success"
                                    icon="mdi-home-group"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>

                    <v-divider></v-divider>
                </v-card>
            </v-col>
            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Vacant Units">
                        <template v-slot:subtitle> </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }} 10
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="info"
                                    icon="mdi-home-outline"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>

                    <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Total Income ">
                        <template v-slot:subtitle> </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }}1 M
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="green"
                                    icon="mdi-cash-multiple"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>

                    <v-divider></v-divider>
                </v-card>
            </v-col>

            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Paid Rent">
                        <template v-slot:subtitle> </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }}0.9M
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="blue"
                                    icon="mdi-cash-check"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>

                    <v-divider></v-divider>
                </v-card>
            </v-col>

            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Arrears">
                        <template v-slot:subtitle> </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }} 64
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="error"
                                    icon="mdi-alert-octagon"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>

                    <v-divider></v-divider>
                </v-card>
            </v-col>

            <v-col sm="3">
                <v-card class="mx-auto">
                    <v-card-item title="Notice">
                        <template v-slot:subtitle> </template>
                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h2" cols="6">
                                {{ $total_tenants }} 64
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon
                                    color="error"
                                    icon="mdi-bell-alert"
                                    size="88"
                                ></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <div class="d-flex py-3 justify-space-between"></div>

                    <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>

        <!-- Datatable for recent transcations -->
        <v-card>
            <v-row>
                <v-col sm="6">
                    <v-data-table
                        :headers="headers"
                        :items="transactions"
                        class="elevation-1"
                    >
                        <template v-slot:top>
                            <v-toolbar flat>
                                <v-toolbar-title
                                    >Recent Transcations</v-toolbar-title
                                >
                            </v-toolbar>
                        </template>
                    </v-data-table></v-col
                >

                <v-col sm="6">
                    <v-data-table
                        :headers="headers"
                        :items="transactions"
                        class="elevation-1"
                    >
                    <template v-slot:top>
                            <v-toolbar flat>
                                <v-toolbar-title
                                    >Top Arrears</v-toolbar-title
                                >
                            </v-toolbar>
                        </template>
                    </v-data-table
                ></v-col>
            </v-row>


        </v-card>

    </AppLayout>
</template>
<script>
import AppLayout from "@/Layouts/AppLayout.vue";

export default {
    data: () => ({
        headers: [
            { title: "Tenant Name", value: "name" },
            { title: "Unit Name", value: "location" },
            { title: "Transaction ID", value: "constructionDate" },
            { title: "Total amount", value: "constructionDate" },
            { title: "Payment Date", value: "constructionDate" },

            {},
        ],
        transactions: [
       
         
          
        ],
    }),

    components: {
        AppLayout,
    },
};
</script>
