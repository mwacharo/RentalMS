<template>
    <AppLayout>

        
        <v-container fluid>
            <!-- Header -->
            <v-row>
          <v-col cols="12">
            <div class="d-flex align-center mb-6">
              <h2 class="text-h4 font-weight-bold text-indigo-darken-4">Landlord Dashboard</h2>
              <v-spacer></v-spacer>
              <!-- <v-btn
                color="primary"
                prepend-icon="mdi-plus"
              >
                Add Property
              </v-btn> -->
            </div>
          </v-col>
        </v-row>

        <v-chip-group
          v-model="selectedPropertyType"
          selected-class="bg-primary text-white"
          class="mb-4"
        >
          <v-chip>All</v-chip>
          <v-chip>Hotel</v-chip>
          <v-chip>House</v-chip>
          <v-chip>Apartment</v-chip>
          <v-chip>Villa</v-chip>
          <v-chip>Kost</v-chip>
          <v-chip>Homestay</v-chip>
          <v-chip>Office</v-chip>
        </v-chip-group>

        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Total Income</div>
                    <div class="text-h5 font-weight-bold">$1,345,545.09</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+4.5%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="indigo-lighten-5" size="50" rounded>
                    <v-icon color="indigo" size="30">mdi-currency-usd</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Total Expenses</div>
                    <div class="text-h5 font-weight-bold">$998,923.09</div>
                    <div class="text-caption">
                      <v-chip color="error" size="x-small" class="mt-1">+1.2%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="red-lighten-5" size="50" rounded>
                    <v-icon color="red" size="30">mdi-chart-line-variant</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Total Views</div>
                    <div class="text-h5 font-weight-bold">112,023</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="indigo-lighten-5" size="50" rounded>
                    <v-icon color="indigo" size="30">mdi-eye</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Total Properties</div>
                    <div class="text-h5 font-weight-bold">5</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="indigo-lighten-5" size="50" rounded>
                    <v-icon color="indigo" size="30">mdi-eye</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Total Units</div>
                    <div class="text-h5 font-weight-bold">2000</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="indigo-lighten-5" size="50" rounded>
                    <v-icon color="indigo" size="30">mdi-eye</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Occupied Units</div>
                    <div class="text-h5 font-weight-bold">160</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="indigo-lighten-5" size="50" rounded>
                    <v-icon color="indigo" size="30">mdi-eye</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Total Vacant Units</div>
                    <div class="text-h5 font-weight-bold">78</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="indigo-lighten-5" size="50" rounded>
                    <v-icon color="indigo" size="30">mdi-eye</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card elevation="1" class="mb-4">
              <v-card-item>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="text-caption text-medium-emphasis">Total Properties Under Maintenance</div>
                    <div class="text-h5 font-weight-bold">98</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="indigo-lighten-5" size="50" rounded>
                    <v-icon color="indigo" size="30">mdi-eye</v-icon>
                  </v-avatar>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
         </v-row>
         

         



            <!-- Summary Cards -->
            <!-- <v-row>
                <v-col cols="12" sm="6" md="3" v-for="card in summaryCards" :key="card.title">
                    <v-card elevation="1" class="mx-auto my-3">
                        <v-card-title>{{ card.title }}</v-card-title>
                        <v-card-item>
                            
                        </v-card-item>
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
            </v-row> -->


            
            


         <v-row>
          <v-col cols="12" md="8">
            <v-card elevation="1" class="mb-4">
              <v-card-title class="d-flex align-center">
                <span class="text-h6">Revenue Overview</span>
                <v-spacer></v-spacer>
                <v-btn size="small" variant="text">
                  This Month
                  <v-icon end>mdi-chevron-down</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <v-sheet height="300">
                  <!-- Placeholder for Chart -->
                  <div class="d-flex align-center justify-center h-100">
                    <span class="text-medium-emphasis">Revenue Chart</span>
                  </div>
                </v-sheet>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="1" class="mb-4">
              <v-card-title class="d-flex align-center">
                <span class="text-h6">Occupancy Rate</span>
                <v-spacer></v-spacer>
                <v-btn size="small" variant="text">
                  This Month
                  <v-icon end>mdi-chevron-down</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <div class="text-center my-4">
                  <v-progress-circular
                    :model-value="90"
                    color="indigo"
                    size="150"
                    width="15"
                  >
                    <div class="text-h4">62%</div>
                  </v-progress-circular>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    <div class="text-caption text-medium-emphasis">Occupied Units</div>
                    <div class="text-h6">160</div>
                  </div>
                  <div>
                    <div class="text-caption text-medium-emphasis">Vacant Units</div>
                    <div class="text-h6">78</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        


            <!-- Recent Transactions and Top Arrears -->
            <v-row>
                <v-col cols="12" md="6">
                    <v-card elevation="1" class="mb-4">
                        <v-card-title class="d-flex align-center">
                            <span class="text-h6 font-weight-bold text-indigo-darken-4">Recent Transactions</span>
                            <v-spacer></v-spacer>
                            <v-btn size="small" variant="text" color="primary">
                                View All
                                <v-icon end>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table
                                :headers="transactionHeaders"
                                :items="recentTransactions"
                                class="elevation-1"
                                dense
                                hide-default-footer
                            >
                                <template v-slot:top>
                                    <v-toolbar flat>
                                        <v-toolbar-title class="text-h6 font-weight-bold text-indigo-darken-4">Recent Transactions</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                    </v-toolbar>
                                </template>
                                <template v-slot:item.totalAmount="{ item }">
                                    <span class="font-weight-bold text-success">${{ item.totalAmount }}</span>
                                </template>
                                <template v-slot:item.paymentDate="{ item }">
                                    <span class="text-caption text-medium-emphasis">{{ item.paymentDate }}</span>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card elevation="1" class="mb-4">
                        <v-card-title class="d-flex align-center">
                            <span class="text-h6 font-weight-bold text-indigo-darken-4">Top Arrears</span>
                            <v-spacer></v-spacer>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table 
                                :headers="arrearsHeaders" 
                                :items="topArrears"
                                class="elevation-1"
                                dense
                                hide-default-footer
                            >
                                <template v-slot:top>
                                    <v-toolbar flat>
                                        <v-toolbar-title class="text-h6 font-weight-bold text-indigo-darken-4">Top Arrears</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                    </v-toolbar>
                                </template>
                                <template v-slot:item.arrearsAmount="{ item }">
                                    <span class="font-weight-bold text-error">${{ item.arrearsAmount }}</span>
                                </template>
                                <template v-slot:item.dueDate="{ item }">
                                    <span class="text-caption text-medium-emphasis">{{ item.dueDate }}</span>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Properties -->
            <v-row>
                <v-col cols="12">
                    <v-card elevation="1" class="mb-4">
                        <v-card-title class="d-flex align-center">
                            <span class="text-h6 font-weight-bold text-indigo-darken-4">Properties</span>
                            <v-spacer></v-spacer>
                            <v-btn size="small" variant="text" color="primary">
                                Add Property
                                <v-icon end>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table
                                :headers="propertyHeaders"
                                :items="properties"
                                class="elevation-1"
                                dense
                                :items-per-page="5"
                                item-key="id"
                            >
                                <template v-slot:top>
                                    <v-toolbar flat>
                                        <v-toolbar-title class="text-h6 font-weight-bold text-indigo-darken-4">Property List</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                    </v-toolbar>
                                </template>
                                <template v-slot:item.actions="{ item }">
                                    <v-btn icon color="primary" @click="viewProperty(item)">
                                        <v-icon>mdi-eye</v-icon>
                                    </v-btn>
                                    <v-btn icon color="warning" @click="editProperty(item)">
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn icon color="error" @click="deleteProperty(item)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </template>
                            </v-data-table>
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
