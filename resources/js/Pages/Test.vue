<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      color="#1a237e"
      theme="dark"
    >
      <v-list-item
        prepend-avatar="/api/placeholder/40/40"
        title="Rental Manager"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/dashboard" active></v-list-item>
        <v-list-item prepend-icon="mdi-chart-line" title="Analytics" value="analytics" to="/analytics"></v-list-item>
        <v-list-item prepend-icon="mdi-home-city" title="Properties" value="properties" to="/properties"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group" title="Tenants" value="tenants" to="/tenants"></v-list-item>
        <v-list-item prepend-icon="mdi-currency-usd" title="Payments" value="payments" to="/payments"></v-list-item>
        <v-list-item prepend-icon="mdi-wrench" title="Maintenance" value="maintenance" to="/maintenance"></v-list-item>
        <v-list-item prepend-icon="mdi-bell" title="Notifications" value="notifications" to="/notifications">
          <template v-slot:append>
            <v-badge
              color="error"
              content="3"
              inline
            ></v-badge>
          </template>
        </v-list-item>
        <v-list-item prepend-icon="mdi-file-document" title="Reports" value="reports" to="/reports"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-list-item
            prepend-icon="mdi-cog"
            title="Settings"
            value="settings"
            to="/settings"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Logout"
            value="logout"
            @click="logout"
          ></v-list-item>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="white" elevation="1">
      <v-app-bar-title>
        <div class="d-flex align-center">
          <v-img src="/api/placeholder/40/40" max-width="40"></v-img>
          <span class="ml-3 text-h6 font-weight-bold text-indigo-darken-4">Houzy Rental Manager</span>
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
        <v-badge
          color="error"
          content="3"
          floating
        ></v-badge>
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon
          >
            <v-avatar size="small">
              <v-img src="/api/placeholder/40/40" alt="User"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            prepend-avatar="/api/placeholder/40/40"
            title="John Doe"
            subtitle="john@example.com"
          ></v-list-item>
          <v-divider></v-divider>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Profile"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-cog"
            title="Settings"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Logout"
            @click="logout"
          ></v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center mb-6">
              <h2 class="text-h4 font-weight-bold text-indigo-darken-4">Landlord Dashboard</h2>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                prepend-icon="mdi-plus"
              >
                Add Property
              </v-btn>
            </div>
          </v-col>
        </v-row>

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
                    <div class="text-caption text-medium-emphasis">Total Properties</div>
                    <div class="text-h5 font-weight-bold">490</div>
                    <div class="text-caption">
                      <v-chip color="success" size="x-small" class="mt-1">+2.4%</v-chip>
                      <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                    </div>
                  </div>
                  <v-avatar color="green-lighten-5" size="50" rounded>
                    <v-icon color="green" size="30">mdi-home-city</v-icon>
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
        </v-row>

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
                    <div class="text-h4">90%</div>
                  </v-progress-circular>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    <div class="text-caption text-medium-emphasis">Occupied Units</div>
                    <div class="text-h6">450</div>
                  </div>
                  <div>
                    <div class="text-caption text-medium-emphasis">Vacant Units</div>
                    <div class="text-h6">50</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        
        <div class="d-flex align-center mb-4">
          <h3 class="text-h5 font-weight-bold text-indigo-darken-4">My Properties</h3>
          <v-spacer></v-spacer>
          <v-btn variant="text" color="primary">View All <v-icon end>mdi-chevron-right</v-icon></v-btn>
        </div>

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
          <v-col cols="12" sm="6" md="3" v-for="property in properties" :key="property.id">
            <v-card elevation="1" class="mb-4">
              <v-img
                :src="property.image"
                height="170"
                cover
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-4"
                    ></v-progress-circular>
                  </div>
                </template>
              </v-img>
              <v-card-item>
                <v-card-title>{{ property.name }}</v-card-title>
                <v-card-subtitle>
                  <v-icon size="small">mdi-map-marker</v-icon>
                  {{ property.location }}
                </v-card-subtitle>
              </v-card-item>
              <v-card-text>
                <div class="d-flex gap-2 mb-2">
                  <v-chip size="small">
                    <v-icon start size="small">mdi-home</v-icon>
                    {{ property.totalUnits }} Units
                  </v-chip>
                  <v-chip size="small" color="success" variant="outlined">
                    <v-icon start size="small">mdi-account-group</v-icon>
                    {{ property.occupiedUnits }} Occupied
                  </v-chip>
                </div>
                <div class="d-flex align-center">
                  <div class="text-h6 font-weight-bold">${{ property.price }}</div>
                  <v-spacer></v-spacer>
                  <v-rating
                    :model-value="property.rating"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                  ></v-rating>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn variant="text" color="primary">
                  View Details
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-pencil" variant="text" size="small"></v-btn>
                <v-btn icon="mdi-delete" variant="text" size="small"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card elevation="1" class="mb-4">
              <v-card-title class="d-flex align-center">
                <span class="text-h6">Recent Transactions</span>
                <v-spacer></v-spacer>
                <v-btn variant="text" size="small">View All</v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-list lines="two">
                <v-list-item v-for="transaction in recentTransactions" :key="transaction.id">
                  <template v-slot:prepend>
                    <v-avatar color="indigo-lighten-5">
                      <v-icon color="indigo">mdi-cash</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title>{{ transaction.tenantName }}</v-list-item-title>
                  <v-list-item-subtitle>
                    ID: {{ transaction.transactionId }} | {{ transaction.paymentDate }}
                  </v-list-item-subtitle>
                  <template v-slot:append>
                    <div class="text-success">+${{ transaction.totalAmount }}</div>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card elevation="1" class="mb-4">
              <v-card-title class="d-flex align-center">
                <span class="text-h6">Top Arrears</span>
                <v-spacer></v-spacer>
                <v-btn variant="text" size="small">View All</v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-list lines="two">
                <v-list-item v-for="arrear in topArrears" :key="arrear.id">
                  <template v-slot:prepend>
                    <v-avatar color="red-lighten-5">
                      <v-icon color="red">mdi-alert-circle</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title>{{ arrear.tenantName }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ arrear.unitName }} | Due: {{ arrear.dueDate }}
                  </v-list-item-subtitle>
                  <template v-slot:append>
                    <div class="text-error">-${{ arrear.arrearsAmount }}</div>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const drawer = ref(true);
const rail = ref(false);
const selectedPropertyType = ref(0);

const properties = ref([
  {
    id: 1,
    name: "Royal Heights Residence",
    location: "Sankarea Maki St, Kennebert No. 17",
    image: "/api/placeholder/400/320",
    totalUnits: 24,
    occupiedUnits: 22,
    vacantUnits: 2,
    price: 850.00,
    rating: 4.5,
    type: "Hotel"
  },
  {
    id: 2,
    name: "Emerald Heights",
    location: "Machinefield, Surikumi No. 23",
    image: "/api/placeholder/400/320",
    totalUnits: 18,
    occupiedUnits: 15,
    vacantUnits: 3,
    price: 600.00,
    rating: 4.0,
    type: "House"
  },
  {
    id: 3,
    name: "Willow Grove Estates",
    location: "Dhirah Oji, Roisumi No. 29",
    image: "/api/placeholder/400/320",
    totalUnits: 30,
    occupiedUnits: 27,
    vacantUnits: 3,
    price: 600.00,
    rating: 4.8,
    type: "Kost"
  },
  {
    id: 4,
    name: "Harmony Meadows",
    location: "Diyuna Irya Rm, Parlevon No. 30",
    image: "/api/placeholder/400/320",
    totalUnits: 12,
    occupiedUnits: 10,
    vacantUnits: 2,
    price: 800.00,
    rating: 4.2,
    type: "Villa"
  },
  {
    id: 5,
    name: "Rosewood Gardens",
    location: "Chroiny Rd, Resuikimi No. 28",
    image: "/api/placeholder/400/320",
    totalUnits: 20,
    occupiedUnits: 18,
    vacantUnits: 2,
    price: 550.00,
    rating: 3.9,
    type: "Kost"
  },
  {
    id: 6,
    name: "Maplewood Meadows",
    location: "Machinefield, Surikumi No. 60",
    image: "/api/placeholder/400/320",
    totalUnits: 15,
    occupiedUnits: 12,
    vacantUnits: 3,
    price: 700.00,
    rating: 4.1,
    type: "Kost"
  },
  {
    id: 7,
    name: "Riverstone Retreat",
    location: "Dhirah Oji, Roisumi No. 54",
    image: "/api/placeholder/400/320",
    totalUnits: 24,
    occupiedUnits: 20,
    vacantUnits: 4,
    price: 650.00,
    rating: 4.3,
    type: "Homestay"
  },
  {
    id: 8,
    name: "Griya Santa Residence",
    location: "Diyuna Irya Rm, Parlevon No. 32",
    image: "/api/placeholder/400/320",
    totalUnits: 16,
    occupiedUnits: 15,
    vacantUnits: 1,
    price: 820.00,
    rating: 4.7,
    type: "Office"
  }
]);

const recentTransactions = ref([
  {
    id: 1,
    tenantName: "Michael Johnson",
    unitName: "Sunset Apartments #301",
    transactionId: "TRX-20250415-001",
    totalAmount: "1,200.00",
    paymentDate: "Apr 15, 2025"
  },
  {
    id: 2,
    tenantName: "Sarah Williams",
    unitName: "Greenwood Villas #B12",
    transactionId: "TRX-20250414-089",
    totalAmount: "950.00",
    paymentDate: "Apr 14, 2025"
  },
  {
    id: 3,
    tenantName: "Robert Davis",
    unitName: "Emerald Heights #205",
    transactionId: "TRX-20250414-076",
    totalAmount: "800.00",
    paymentDate: "Apr 14, 2025"
  },
  {
    id: 4,
    tenantName: "Emily Brown",
    unitName: "Royal Heights #118",
    transactionId: "TRX-20250413-045",
    totalAmount: "1,050.00",
    paymentDate: "Apr 13, 2025"
  }
]);

const topArrears = ref([
  {
    id: 1,
    tenantName: "David Wilson",
    unitName: "Willow Grove #401",
    arrearsAmount: "1,500.00",
    dueDate: "Apr 5, 2025"
  },
  {
    id: 2,
    tenantName: "Jennifer Martinez",
    unitName: "Harmony Meadows #C3",
    arrearsAmount: "1,200.00",
    dueDate: "Apr 7, 2025"
  },
  {
    id: 3,
    tenantName: "Thomas Anderson",
    unitName: "Maplewood Meadows #208",
    arrearsAmount: "950.00",
    dueDate: "Apr 8, 2025"
  },
  {
    id: 4,
    tenantName: "Lisa Taylor",
    unitName: "Rosewood Gardens #D12",
    arrearsAmount: "850.00",
    dueDate: "Apr 10, 2025"
  }
]);

const logout = () => {
  // Implement logout functionality
  console.log('Logging out...');
};

onMounted(() => {
  fetchDashboardData();
});

const fetchDashboardData = async () => {
  try {
    // Uncomment when API is ready
    // const response = await axios.get('/api/landlord-dashboard-data');
    // const data = response.data;
    // Update the data here
    console.log('Dashboard data fetched');
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }
};
</script>

<style>
.v-card {
  border-radius: 12px;
}

.v-list-item {
  border-radius: 8px;
  margin: 4px 0;
}

.v-list-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.v-navigation-drawer .v-list-item.active {
  background-color: rgba(255, 255, 255, 0.12);
}

.v-chip-group .v-chip {
  margin-right: 8px;
}
</style>








<!-- Below is a sample line chart view for monthly revenue overview. -->
<template>
  <v-col cols="12" md="8">
    <v-card elevation="1" class="mb-4">
      <v-card-title class="d-flex align-center">
        <span class="text-h6">Revenue Overview</span>
        <v-spacer></v-spacer>
        <v-select
          v-model="selectedYear"
          :items="yearOptions"
          variant="underlined"
          density="compact"
          hide-details
          class="year-selector"
          style="max-width: 120px"
        ></v-select>
      </v-card-title>
      
      <v-card-text>
        <div class="d-flex justify-space-between mb-2">
          <div class="revenue-stats">
            <div class="d-flex align-center mb-2">
              <v-icon color="indigo" size="small" class="mr-1">mdi-circle</v-icon>
              <span class="text-caption text-indigo">Current Year</span>
              <span class="text-body-1 font-weight-bold ml-2">{{ currentYearTotal }}</span>
              <v-chip color="success" size="x-small" class="ml-2">+{{ currentYearGrowth }}%</v-chip>
            </div>
            <div class="d-flex align-center">
              <v-icon color="orange-lighten-1" size="small" class="mr-1">mdi-circle</v-icon>
              <span class="text-caption text-orange-lighten-1">Previous Year</span>
              <span class="text-body-1 font-weight-bold ml-2">{{ previousYearTotal }}</span>
            </div>
          </div>
          
          <div class="time-filter">
            <v-btn-toggle
              v-model="selectedTimeRange"
              color="primary"
              density="comfortable"
              mandatory
              rounded="pill"
              variant="outlined"
            >
              <v-btn value="monthly" class="text-caption px-2">Monthly</v-btn>
              <v-btn value="quarterly" class="text-caption px-2">Quarterly</v-btn>
              <v-btn value="yearly" class="text-caption px-2">Yearly</v-btn>
            </v-btn-toggle>
          </div>
        </div>
        
        <v-sheet
          class="pa-4 rounded"
          height="320"
          style="position: relative"
        >
          <canvas ref="revenueChart" height="300"></canvas>
          
          <div class="chart-labels d-flex justify-space-between mt-2">
            <span v-for="(month, index) in months" :key="index" class="text-caption text-medium-emphasis">
              {{ month.substring(0, 3) }}
            </span>
          </div>
          
          <div v-if="isLoading" class="chart-loading-overlay">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </div>
        </v-sheet>
        
        <div class="d-flex justify-space-between align-center mt-2">
          <div class="metrics-summary d-flex gap-2">
            <v-chip variant="outlined" color="success" class="text-caption">
              <v-icon start size="x-small">mdi-trending-up</v-icon>
              High: 95.2
            </v-chip>
            <v-chip variant="outlined" color="error" class="text-caption">
              <v-icon start size="x-small">mdi-trending-down</v-icon>
              Low: 42.8
            </v-chip>
            <v-chip variant="outlined" color="primary" class="text-caption">
              <v-icon start size="x-small">mdi-calculator</v-icon>
              Avg: 68.5
            </v-chip>
          </div>
          
          <v-btn
            variant="text"
            color="primary"
            density="comfortable"
            @click="downloadReport"
          >
            <v-icon start>mdi-download</v-icon>
            Export
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import Chart from 'chart.js/auto';

// Chart reference and data
const revenueChart = ref(null);
let chart = null;
const isLoading = ref(true);

// Chart data and options
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const selectedYear = ref('2025');
const yearOptions = ['2023', '2024', '2025'];
const selectedTimeRange = ref('monthly');

// Sample data - would be replaced with API data in production
const currentYearData = ref([48, 52, 58, 65, 72, 68, 76, 82, 88, 92, 95, 89]);
const previousYearData = ref([42, 44, 50, 54, 61, 58, 65, 71, 75, 78, 80, 76]);

// Computed values for display
const currentYearTotal = computed(() => {
  return `$${(currentYearData.value.reduce((a, b) => a + b, 0) * 1000).toLocaleString()}`;
});

const previousYearTotal = computed(() => {
  return `$${(previousYearData.value.reduce((a, b) => a + b, 0) * 1000).toLocaleString()}`;
});

const currentYearGrowth = computed(() => {
  const currentSum = currentYearData.value.reduce((a, b) => a + b, 0);
  const previousSum = previousYearData.value.reduce((a, b) => a + b, 0);
  return ((currentSum - previousSum) / previousSum * 100).toFixed(1);
});

// Initialize and render chart
onMounted(() => {
  setTimeout(() => {
    renderChart();
    isLoading.value = false;
  }, 800); // Simulate loading
});

// Update chart when filters change
watch([selectedYear, selectedTimeRange], () => {
  isLoading.value = true;
  setTimeout(() => {
    updateChartData();
    isLoading.value = false;
  }, 600);
});

const renderChart = () => {
  const ctx = revenueChart.value.getContext('2d');
  
  // Create gradient for current year
  const gradientCurrent = ctx.createLinearGradient(0, 0, 0, 300);
  gradientCurrent.addColorStop(0, 'rgba(63, 81, 181, 0.2)');
  gradientCurrent.addColorStop(1, 'rgba(63, 81, 181, 0)');
  
  // Create gradient for previous year
  const gradientPrevious = ctx.createLinearGradient(0, 0, 0, 300);
  gradientPrevious.addColorStop(0, 'rgba(255, 152, 0, 0.1)');
  gradientPrevious.addColorStop(1, 'rgba(255, 152, 0, 0)');
  
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Current Year',
          data: currentYearData.value,
          borderColor: '#3F51B5',
          backgroundColor: gradientCurrent,
          borderWidth: 3,
          tension: 0.4,
          pointBackgroundColor: '#3F51B5',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true
        },
        {
          label: 'Previous Year',
          data: previousYearData.value,
          borderColor: '#FF9800',
          backgroundColor: gradientPrevious,
          borderWidth: 2,
          tension: 0.4,
          pointBackgroundColor: '#FF9800',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#333',
          bodyColor: '#666',
          borderColor: '#ddd',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': $' + (context.raw * 1000).toLocaleString();
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        },
        y: {
          min: 0,
          max: 100,
          grid: {
            color: 'rgba(200, 200, 200, 0.15)',
            drawBorder: false
          },
          ticks: {
            stepSize: 20,
            padding: 10,
            callback: function(value) {
              return '$' + value + 'k';
            }
          }
        }
      }
    }
  });
};

const updateChartData = () => {
  if (!chart) return;
  
  // In a real application, this would fetch data from an API based on filters
  // For this example, we'll just modify the existing data
  
  if (selectedTimeRange.value === 'quarterly') {
    // Aggregate monthly data to quarterly
    const quarterly = [];
    for (let i = 0; i < 12; i += 3) {
      const avg = (currentYearData.value[i] + currentYearData.value[i+1] + currentYearData.value[i+2]) / 3;
      quarterly.push(avg);
    }
    
    const prevQuarterly = [];
    for (let i = 0; i < 12; i += 3) {
      const avg = (previousYearData.value[i] + previousYearData.value[i+1] + previousYearData.value[i+2]) / 3;
      prevQuarterly.push(avg);
    }
    
    chart.data.labels = ['Q1', 'Q2', 'Q3', 'Q4'];
    chart.data.datasets[0].data = quarterly;
    chart.data.datasets[1].data = prevQuarterly;
  } else if (selectedTimeRange.value === 'yearly') {
    // Show yearly totals
    const currentAvg = [currentYearData.value.reduce((a, b) => a + b, 0) / 12];
    const previousAvg = [previousYearData.value.reduce((a, b) => a + b, 0) / 12];
    
    chart.data.labels = [selectedYear.value];
    chart.data.datasets[0].data = currentAvg;
    chart.data.datasets[1].data = previousAvg;
  } else {
    // Default monthly view
    chart.data.labels = months;
    chart.data.datasets[0].data = currentYearData.value;
    chart.data.datasets[1].data = previousYearData.value;
  }
  
  chart.update();
};

const downloadReport = () => {
  // In production, this would generate a report
  console.log('Downloading revenue report...');
  // Example functionality could be:
  // 1. Generate PDF/CSV with chart data
  // 2. Use API to prepare downloadable file
  // 3. Trigger browser download
};
</script>

<style scoped>
.year-selector :deep(.v-field__input) {
  padding-top: 0;
  padding-bottom: 0;
  min-height: 32px;
}

.chart-loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
}

.revenue-stats {
  padding: 8px;
}

.chart-labels {
  margin-left: 45px;
  margin-right: 45px;
}
</style>



<!-- Below is a sample line chart view for monthly revenue overview. -->

// Replace the existing Revenue Overview section with this implementation

<v-col cols="12" md="8">
  <v-card elevation="1" class="mb-4">
    <v-card-title class="d-flex align-center">
      <span class="text-h6">Revenue Overview</span>
      <v-spacer></v-spacer>
      <v-select
        v-model="selectedYear"
        :items="yearOptions"
        density="compact"
        variant="outlined"
        hide-details
        class="ml-2"
        style="max-width: 120px"
      ></v-select>
    </v-card-title>
    <v-card-text>
      <v-sheet class="my-4" height="350">
        <v-chart class="chart" :option="revenueChartOption" autoresize></v-chart>
      </v-sheet>
      
      <div class="d-flex gap-4 justify-space-between flex-wrap">
        <div class="payment-insight">
          <div class="text-caption text-medium-emphasis">Payments on time</div>
          <div class="d-flex align-center">
            <span class="text-h6 font-weight-bold mr-2">78%</span>
            <v-chip color="success" size="x-small">+5%</v-chip>
          </div>
        </div>
        
        <div class="payment-insight">
          <div class="text-caption text-medium-emphasis">Average days late</div>
          <div class="d-flex align-center">
            <span class="text-h6 font-weight-bold mr-2">4.2</span>
            <v-chip color="error" size="x-small">+0.5</v-chip>
          </div>
        </div>
        
        <div class="payment-insight">
          <div class="text-caption text-medium-emphasis">Collection rate</div>
          <div class="d-flex align-center">
            <span class="text-h6 font-weight-bold mr-2">94%</span>
            <v-chip color="success" size="x-small">+2%</v-chip>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</v-col>

// Add this to your data() function
data() {
  return {
    // ... your existing data
    selectedYear: '2025',
    yearOptions: ['2023', '2024', '2025'],
    revenueChartOption: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function(params) {
          let tooltipContent = `<div style="font-weight:bold">${params[0].name}</div>`;
          
          // On-time payments
          tooltipContent += `<div style="display:flex;justify-content:space-between;margin:5px 0">
            <span style="margin-right:15px">
              <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#4CAF50;margin-right:5px"></span>On-time:
            </span>
            <span style="font-weight:bold">$${params[0].data.toLocaleString()}</span>
          </div>`;
          
          // Late payments
          tooltipContent += `<div style="display:flex;justify-content:space-between;margin:5px 0">
            <span style="margin-right:15px">
              <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#FF9800;margin-right:5px"></span>1-7 days:
            </span>
            <span style="font-weight:bold">$${params[1].data.toLocaleString()}</span>
          </div>`;
          
          // Very late payments
          tooltipContent += `<div style="display:flex;justify-content:space-between;margin:5px 0">
            <span style="margin-right:15px">
              <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#F44336;margin-right:5px"></span>8+ days:
            </span>
            <span style="font-weight:bold">$${params[2].data.toLocaleString()}</span>
          </div>`;
          
          // Total
          const total = params.reduce((sum, current) => sum + current.data, 0);
          tooltipContent += `<div style="display:flex;justify-content:space-between;margin-top:8px;padding-top:8px;border-top:1px dashed #ccc">
            <span style="margin-right:15px">Total:</span>
            <span style="font-weight:bold">$${total.toLocaleString()}</span>
          </div>`;
          
          return tooltipContent;
        }
      },
      legend: {
        data: ['On-time payments', '1-7 days late', '8+ days late'],
        bottom: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        top: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLine: {
          lineStyle: {
            color: '#E0E0E0'
          }
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: 'Revenue ($)',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#E0E0E0'
          }
        },
        axisLabel: {
          formatter: function(value) {
            if (value >= 1000) {
              return '$' + (value / 1000) + 'k';
            }
            return '$' + value;
          }
        }
      },
      series: [
        {
          name: 'On-time payments',
          type: 'bar',
          stack: 'total',
          itemStyle: {
            color: '#4CAF50'
          },
          emphasis: {
            focus: 'series'
          },
          data: [10500, 12200, 15800, 18200, 17500, 15200, 16800, 15200, 14000, 15600, 16900, 18200]
        },
        {
          name: '1-7 days late',
          type: 'bar',
          stack: 'total',
          itemStyle: {
            color: '#FF9800'
          },
          emphasis: {
            focus: 'series'
          },
          data: [2800, 3200, 4500, 3800, 3200, 2800, 2200, 2600, 3400, 2800, 3200, 2600]
        },
        {
          name: '8+ days late',
          type: 'bar',
          stack: 'total',
          itemStyle: {
            color: '#F44336'
          },
          emphasis: {
            focus: 'series'
          },
          data: [1200, 800, 1400, 900, 1100, 700, 600, 800, 1200, 900, 700, 500]
        }
      ]
    }
  };
},

// Add these methods to your methods section
methods: {
  // ... your existing methods
  
  // Add this if you want to dynamically update the chart when year changes
  updateChartData(year) {
    // Here you would typically fetch data for the selected year
    // For demonstration, we'll just use different random data based on year
    if (year === '2023') {
      this.revenueChartOption.series[0].data = [9000, 10000, 12000, 14000, 16000, 13000, 14000, 13000, 12000, 13500, 15000, 16500];
      this.revenueChartOption.series[1].data = [3500, 4000, 5500, 4800, 4200, 3800, 3200, 3600, 4400, 3800, 4200, 3600];
      this.revenueChartOption.series[2].data = [2000, 1800, 2400, 1900, 2100, 1700, 1600, 1800, 2200, 1900, 1700, 1500];
    } else if (year === '2024') {
      this.revenueChartOption.series[0].data = [9800, 11000, 14000, 16000, 16500, 14200, 15800, 14200, 13000, 14600, 15900, 17200];
      this.revenueChartOption.series[1].data = [3000, 3500, 5000, 4300, 3700, 3300, 2700, 3100, 3900, 3300, 3700, 3100];
      this.revenueChartOption.series[2].data = [1500, 1300, 1900, 1400, 1600, 1200, 1100, 1300, 1700, 1400, 1200, 1000];
    } else {
      // 2025 data (default)
      this.revenueChartOption.series[0].data = [10500, 12200, 15800, 18200, 17500, 15200, 16800, 15200, 14000, 15600, 16900, 18200];
      this.revenueChartOption.series[1].data = [2800, 3200, 4500, 3800, 3200, 2800, 2200, 2600, 3400, 2800, 3200, 2600];
      this.revenueChartOption.series[2].data = [1200, 800, 1400, 900, 1100, 700, 600, 800, 1200, 900, 700, 500];
    }
    
    // Force chart to update
    this.$nextTick(() => {
      const chart = this.$refs.chart;
      if (chart) {
        chart.setOption(this.revenueChartOption);
      }
    });
  }
}

// Add this to your watch section if not already present
watch: {
  selectedYear(newYear) {
    this.updateChartData(newYear);
  }
}