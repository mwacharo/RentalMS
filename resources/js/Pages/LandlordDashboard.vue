<template>
  <AppLayout>
    <v-container fluid>
      <!-- Header -->
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center mb-6">
            <h2 class="text-h4 font-weight-bold text-indigo-darken-4">Landlord Dashboard</h2>
            <v-spacer></v-spacer>
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

      <!-- Summary Cards Row -->
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card elevation="1" class="mb-4">
            <v-card-item>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="text-caption text-medium-emphasis">Total Income</div>
                  <div class="text-h5 font-weight-bold">${{ formatNumber(totalIncome) }}</div>
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
                  <div class="text-h5 font-weight-bold">${{ formatNumber(totalExpenses) }}</div>
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
                  <div class="text-h5 font-weight-bold">{{ totalViews }}</div>
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
                  <div class="text-h5 font-weight-bold">{{ totalProperties }}</div>
                  <div class="text-caption">
                    <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                    <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                  </div>
                </div>
                <v-avatar color="indigo-lighten-5" size="50" rounded>
                  <v-icon color="indigo" size="30">mdi-home-city</v-icon>
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
                  <div class="text-h5 font-weight-bold">{{ totalUnits }}</div>
                  <div class="text-caption">
                    <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                    <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                  </div>
                </div>
                <v-avatar color="indigo-lighten-5" size="50" rounded>
                  <v-icon color="indigo" size="30">mdi-domain</v-icon>
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
                  <div class="text-h5 font-weight-bold">{{ occupiedUnits }}</div>
                  <div class="text-caption">
                    <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                    <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                  </div>
                </div>
                <v-avatar color="indigo-lighten-5" size="50" rounded>
                  <v-icon color="indigo" size="30">mdi-home-group</v-icon>
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
                  <div class="text-h5 font-weight-bold">{{ vacantUnits }}</div>
                  <div class="text-caption">
                    <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                    <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                  </div>
                </div>
                <v-avatar color="indigo-lighten-5" size="50" rounded>
                  <v-icon color="indigo" size="30">mdi-home-outline</v-icon>
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
                  <div class="text-h5 font-weight-bold">{{ propertiesUnderMaintenance }}</div>
                  <div class="text-caption">
                    <v-chip color="success" size="x-small" class="mt-1">+3.2%</v-chip>
                    <span class="text-caption text-medium-emphasis ml-1">Last Month</span>
                  </div>
                </div>
                <v-avatar color="indigo-lighten-5" size="50" rounded>
                  <v-icon color="indigo" size="30">mdi-tools</v-icon>
                </v-avatar>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <!-- Charts Row -->
      <v-row>
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
                  :model-value="occupancyRate"
                  color="indigo"
                  size="150"
                  width="15"
                >
                  <div class="text-h4">{{ occupancyRate }}%</div>
                </v-progress-circular>
              </div>
              <div class="d-flex justify-space-between">
                <div>
                  <div class="text-caption text-medium-emphasis">Occupied Units</div>
                  <div class="text-h6">{{ occupiedUnits }}</div>
                </div>
                <div>
                  <div class="text-caption text-medium-emphasis">Vacant Units</div>
                  <div class="text-h6">{{ vacantUnits }}</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Properties Table -->
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
                <template v-slot:item.actions="{ item }">
                    <v-btn icon color="primary" @click="viewProperty(item)" class="rounded-pill" style="width: 36px; height: 36px;">
                    <v-icon size="18">mdi-eye</v-icon>
                    </v-btn>
                    <v-btn icon color="warning" @click="editProperty(item)" class="rounded-pill" style="width: 36px; height: 36px;">
                    <v-icon size="18">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon color="error" @click="deleteProperty(item)" class="rounded-pill" style="width: 36px; height: 36px;">
                    <v-icon size="18">mdi-delete</v-icon>
                    </v-btn>
                </template>
              </v-data-table>
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
    </v-container>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from 'axios';
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default {
  components: {
    AppLayout,
    VChart
  },
  data() {
    return {
      // Property filtering
      selectedPropertyType: 0,
      
      // Chart data
      selectedYear: '2025',
      yearOptions: ['2023', '2024', '2025'],
      
      // Summary card data
      totalIncome: 1345545.09,
      totalExpenses: 998923.09,
      totalViews: 112023,
      totalProperties: 5,
      totalUnits: 2000,
      occupiedUnits: 160,
      vacantUnits: 78,
      propertiesUnderMaintenance: 98,
      occupancyRate: 62,
      
      // Table headers
      propertyHeaders: [
        { title: "Property Name", align: "start", sortable: true, key: "name" },
        { title: "Location", key: "location" },
        { title: "Total Units", key: "totalUnits" },
        { title: "Occupied", key: "occupiedUnits" },
        { title: "Vacant", key: "vacantUnits" },
        { title: "Actions", key: "actions", sortable: false },
      ],
      
      // Property data
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
        {
          id: 3,
          name: "City Heights",
          location: "789 Urban Ave",
          email: "info@cityheights.com",
          phone: "555-123-4567",
          description: "Modern downtown living.",
          landlord: "Robert Johnson",
          totalUnits: 80,
          occupiedUnits: 65,
          vacantUnits: 15,
        },
        {
          id: 4,
          name: "Garden Place",
          location: "321 Flora St",
          email: "leasing@gardenplace.com",
          phone: "444-555-6666",
          description: "Serene living with beautiful gardens.",
          landlord: "Lisa Wong",
          totalUnits: 40,
          occupiedUnits: 38,
          vacantUnits: 2,
        },
        {
          id: 5,
          name: "Riverside Condos",
          location: "567 River Rd",
          email: "info@riversidecondos.com",
          phone: "111-222-3333",
          description: "Luxurious condos with river views.",
          landlord: "Michael Brown",
          totalUnits: 60,
          occupiedUnits: 52,
          vacantUnits: 8,
        }
      ],
      
      // Transaction data
      transactionHeaders: [
        { title: "Tenant", key: "tenant" },
        { title: "Property", key: "property" },
        { title: "Unit", key: "unit" },
        { title: "Total Amount", key: "totalAmount" },
        { title: "Payment Date", key: "paymentDate" },
      ],
      recentTransactions: [
        { tenant: "James Wilson", property: "Sunset Apartments", unit: "101", totalAmount: "1200.00", paymentDate: "2025-04-15" },
        { tenant: "Sarah Johnson", property: "Greenwood Villas", unit: "A3", totalAmount: "1500.00", paymentDate: "2025-04-14" },
        { tenant: "David Lee", property: "City Heights", unit: "507", totalAmount: "1800.00", paymentDate: "2025-04-12" },
        { tenant: "Emma Brown", property: "Garden Place", unit: "B2", totalAmount: "1350.00", paymentDate: "2025-04-10" },
        { tenant: "Michael Chen", property: "Riverside Condos", unit: "305", totalAmount: "2100.00", paymentDate: "2025-04-08" }
      ],
      
      // Arrears data
      arrearsHeaders: [
        { title: "Tenant", key: "tenant" },
        { title: "Property", key: "property" },
        { title: "Unit", key: "unit" },
        { title: "Arrears Amount", key: "arrearsAmount" },
        { title: "Due Date", key: "dueDate" },
      ],
      topArrears: [
        { tenant: "Thomas Parker", property: "City Heights", unit: "512", arrearsAmount: "1800.00", dueDate: "2025-03-31" },
        { tenant: "Karen White", property: "Sunset Apartments", unit: "201", arrearsAmount: "1200.00", dueDate: "2025-04-01" },
        { tenant: "Richard Taylor", property: "Riverside Condos", unit: "402", arrearsAmount: "2100.00", dueDate: "2025-04-05" },
        { tenant: "Jennifer Adams", property: "Garden Place", unit: "C4", arrearsAmount: "1350.00", dueDate: "2025-04-07" },
        { tenant: "Steven Garcia", property: "Greenwood Villas", unit: "B1", arrearsAmount: "1500.00", dueDate: "2025-04-10" }
      ],
      
      // Chart configuration
      revenueChartOption: {}
    };
  },
  mounted() {
    this.initRevenueChart();
    this.fetchDashboardData();
  },
  methods: {
    formatNumber(number) {
      return new Intl.NumberFormat('en-US').format(number);
    },
    
    initRevenueChart() {
      this.revenueChartOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Income', 'Expenses', 'Net']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Income',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [120000, 132000, 101000, 134000, 90000, 230000, 210000, 182000, 191000, 234000, 260000, 300000],
            color: '#4CAF50'
          },
          {
            name: 'Expenses',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: [80000, 92000, 71000, 94000, 60000, 130000, 110000, 100000, 90000, 110000, 130000, 140000],
            color: '#F44336'
          },
          {
            name: 'Net',
            type: 'line',
            emphasis: {
              focus: 'series'
            },
            data: [40000, 40000, 30000, 40000, 30000, 100000, 100000, 82000, 101000, 124000, 130000, 160000],
            color: '#3F51B5'
          }
        ]
      };
    },
    
    updateChartData(year) {
      // Data could vary based on selected year
      const yearData = {
        '2023': {
          income: [90000, 102000, 81000, 104000, 70000, 190000, 180000, 152000, 161000, 194000, 220000, 260000],
          expenses: [60000, 72000, 51000, 74000, 40000, 110000, 90000, 80000, 70000, 90000, 110000, 120000],
          net: [30000, 30000, 30000, 30000, 30000, 80000, 90000, 72000, 91000, 104000, 110000, 140000]
        },
        '2024': {
          income: [110000, 122000, 91000, 124000, 80000, 220000, 200000, 172000, 181000, 224000, 250000, 290000],
          expenses: [70000, 82000, 61000, 84000, 50000, 120000, 100000, 90000, 80000, 100000, 120000, 130000],
          net: [40000, 40000, 30000, 40000, 30000, 100000, 100000, 82000, 101000, 124000, 130000, 160000]
        },
        '2025': {
          income: [120000, 132000, 101000, 134000, 90000, 230000, 210000, 182000, 191000, 234000, 260000, 300000],
          expenses: [80000, 92000, 71000, 94000, 60000, 130000, 110000, 100000, 90000, 110000, 130000, 140000],
          net: [40000, 40000, 30000, 40000, 30000, 100000, 100000, 82000, 101000, 124000, 130000, 160000]
        }
      };
      
      this.revenueChartOption.series[0].data = yearData[year].income;
      this.revenueChartOption.series[1].data = yearData[year].expenses;
      this.revenueChartOption.series[2].data = yearData[year].net;
      
      // Force chart update
      this.revenueChartOption = {...this.revenueChartOption};
    },
    
    async fetchDashboardData() {
      try {
        // If you have a real API endpoint, uncomment this
        // const response = await axios.get('/api/landlord-dashboard-data');
        // const data = response.data;
        
        // For now, we'll just use our predefined data
        console.log('Dashboard data loaded');
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    },
    
    viewProperty(item) {
      console.log('View property:', item);
      // Implement navigation to property detail page
    },
    
    editProperty(item) {
      console.log('Edit property:', item);
      // Implement property edit functionality
    },
    
    deleteProperty(item) {
      console.log('Delete property:', item);
      // Implement property deletion with confirmation
    }
  },
  watch: {
    selectedYear(newYear) {
      this.updateChartData(newYear);
    }
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}

.payment-insight {
  padding: 12px 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  min-width: 150px;
  flex: 1;
}

@media (max-width: 600px) {
  .payment-insight {
    margin-bottom: 8px;
    width: 100%;
  }
}
</style>