<template>
    <AppLayout>
        <v-row>
            <v-col sm="3">Dashboard</v-col>
        </v-row>
        <v-row>
            <v-col sm="3">FILTER</v-col>
        </v-row>

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
                        :items="desserts"
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
                        :items="desserts"
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

        <!-- Add more rows and columns as necessary to match the rest of the UI -->
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
        desserts: [
            {
                name: "Great Pyramid of Giza",
                location: "Egypt",
                height: "146.6",
                base: "230.4",
                volume: "2583285",
                constructionDate: "c. 2580–2560 BC",
            },
            {
                name: "Pyramid of Khafre",
                location: "Egypt",
                height: "136.4",
                base: "215.3",
                volume: "1477485",
                constructionDate: "c. 2570 BC",
            },
            {
                name: "Red Pyramid",
                location: "Egypt",
                height: "104",
                base: "220",
                volume: "1602895",
                constructionDate: "c. 2590 BC",
            },
            {
                name: "Bent Pyramid",
                location: "Egypt",
                height: "101.1",
                base: "188.6",
                volume: "1200690",
                constructionDate: "c. 2600 BC",
            },
            {
                name: "Pyramid of the Sun",
                location: "Mexico",
                height: "65",
                base: "225",
                volume: "1237097",
                constructionDate: "c. 200 CE",
            },
        ],
    }),

    components: {
        AppLayout,
    },
};
</script>
