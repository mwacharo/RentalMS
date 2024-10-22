<script setup>
import Logout from "@/Components/Logout.vue";
import { ref, computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";
const drawer = ref(true);
const select = ref(false);

const userRoles = computed(() => usePage().props.value.user.roles || []);
const userPermissions = computed(() => usePage().props.value.user.permissions || []);

console.log("userRoles:", userRoles.value);
console.log("userPermissions:", userPermissions.value);



// Dynamically set available routes based on role
const menuItems = computed(() => {
    if (userRoles.value.includes('tenant')) {
        return [
            { name: "Dashboard", icon: "mdi-view-dashboard", route: "tenant-dashboard" },
            { name: "Unit", icon: "mdi-home-floor-a", route: "unit" },
            // { name: "Bills", icon: "mdi-currency-usd", route: "bill" },
            { name: "Invoices", icon: "mdi-receipt", route: "invoice" },
            { name: "Maintenance", icon: "mdi-wrench", route: "maintenance" },
            { name: "Payments", icon: "mdi-currency-usd", route: "payments" },
            { name: "Lease", icon: "mdi-file-document-edit", route: "lease" },
            // { name: "booking", icon: "mdi-calendar-check", route: "booking" },

            // mdi-calendar-check
        ];
    } else if (userRoles.value.includes('landlord')) {
        return [
            { name: "Dashboard", icon: "mdi-view-dashboard", route: "landlord-dashboard" },
            { name: "Tenant", icon: "mdi-account", route: "tenant" },
            { name: "Property", icon: "mdi-domain", route: "property" },
            { name: "Unit", icon: "mdi-home-floor-a", route: "unit" },
            { name: "Bills", icon: "mdi-currency-usd", route: "bill" },
            { name: "Invoices", icon: "mdi-receipt", route: "invoice" },
            { name: "Maintenance", icon: "mdi-wrench", route: "maintenance" },
            { name: "Payments", icon: "mdi-currency-usd", route: "payments" },
            { name: "Lease", icon: "mdi-file-document-edit", route: "lease" },
            // { name: "Admin", icon: "mdi-account-multiple", route: "admin" },

        ];
    }


    else if (userRoles.value.includes('company')) {
        return [
            { name: "Dashboard", icon: "mdi-view-dashboard", route: "dashboard" },
            { name: "Property", icon: "mdi-domain", route: "property" },
            { name: "Unit", icon: "mdi-home-floor-a", route: "unit" },
            { name: "Tenant", icon: "mdi-account", route: "tenant" },
            { name: "Landlord", icon: "mdi-account-multiple", route: "landlord" },
            { name: "Bills", icon: "mdi-currency-usd", route: "bill" },
            { name: "Invoices", icon: "mdi-receipt", route: "invoice" },
            { name: "Maintenance", icon: "mdi-wrench", route: "maintenance" },
            { name: "Payments", icon: "mdi-currency-usd", route: "payments" },
            { name: "Lease", icon: "mdi-file-document-edit", route: "lease" },
            { name: "Invoices", icon: "mdi-receipt", route: "invoice" },



        ];
    }

    else if (userRoles.value.includes('user')) {
        return [
            { name: "Dashboard", icon: "mdi-view-dashboard", route: "dashboard" },

            { name: "Property", icon: "mdi-domain", route: "property" },
            { name: "Unit", icon: "mdi-home-floor-a", route: "unit" },
            { name: "Bills", icon: "mdi-currency-usd", route: "bill" },
            { name: "Invoices", icon: "mdi-receipt", route: "invoice" },
            { name: "Maintenance", icon: "mdi-wrench", route: "maintenance" },
            { name: "Payments", icon: "mdi-currency-usd", route: "payments" },
            { name: "Lease", icon: "mdi-file-document-edit", route: "lease" },
            { name: "Admin", icon: "mdi-account-cog", route: "admin" },
            { name: "Permissions", icon: "mdi-shield-key", route: "permissions" },
            { name: "Roles", icon: "mdi-account-key", route: "roles" },

            { name: "Company", icon: "mdi-account-multiple", route: "company" },
            { name: "Tenant", icon: "mdi-account", route: "tenant" },
            { name: "Landlord", icon: "mdi-account-multiple", route: "landlord" },


        ];
    }


    return [];
});
</script>
<template>
    <v-app>
        <!-- Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" app color="black">

            <v-list-item>
                <v-img src="path/to/logo.png" alt="Logo" height="60" contain></v-img>
            </v-list-item>


            <Link v-for="item in menuItems" :key="item.name" :href="route(item.route)" class="text-decoration-none ">
            <v-list-item color="info" :value="item.route">
                <template v-slot:prepend>
                    <v-icon>{{ item.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
            </Link>

            -

            <!----<v-list density="compact" v-model="select" id="layout">
                <v-list-item> </v-list-item>

             <Link  v-for="item in menuItems" :key="item.name" :href="route('dashboard')">
                <v-list-item color="info" value="home">
                    <template v-slot:prepend>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </template>

                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                </Link>

  

                <Link  v-for="item in menuItems" :key="item.name" :href="route('tenant-dashboard')">
                <v-list-item color="info" value="home">
                    <template v-slot:prepend>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </template>

                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('tenant')">
                <v-list-item color="info" value="home">
                    <template v-slot:prepend>
                        <v-icon>mdi-account-tie</v-icon>
                    </template>

                    <v-list-item-title>Tenant</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('landlord')">
                <v-list-item color="info" value="landlords">
                    <template v-slot:prepend>
                        <v-icon>mdi-account-multiple</v-icon>
                    </template>

                    <v-list-item-title>Landlord</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('property')">
                <v-list-item color="info" value="properties">
                    <template v-slot:prepend>
                        <v-icon>mdi-domain</v-icon>
                    </template>

                    <v-list-item-title>Property</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('unit')">
                <v-list-item color="info" value="unit">
                    <template v-slot:prepend>
                        <v-icon>mdi-home-floor-a</v-icon>
                    </template>

                    <v-list-item-title>Unit</v-list-item-title>
                </v-list-item>
                </Link>


                <Link  v-for="item in menuItems" :key="item.name" :href="route('bill')">
                <v-list-item color="info" value="bill">
                    <template v-slot:prepend>
                        <v-icon>mdi-currency-usd</v-icon>
                    </template>

                    <v-list-item-title>Bill</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('booking')">
                <v-list-item color="info" value="bookings">
                    <template v-slot:prepend>
                        <v-icon>mdi-calendar-check</v-icon>
                    </template>

                    <v-list-item-title>Booking</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('lease')">
                <v-list-item color="info" value="leases">
                    <template v-slot:prepend>
                        <v-icon>mdi-file-document-edit</v-icon>
                    </template>

                    <v-list-item-title>Lease</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('invoice')">
                <v-list-item color="info" value="invoice
       ">
                    <template v-slot:prepend>
                        <v-icon>mdi-receipt</v-icon>
                    </template>
                    <v-list-item-title>Invoice</v-list-item-title>
                </v-list-item>
                </Link>



                <Link  v-for="item in menuItems" :key="item.name" :href="route('admin')">
                <v-list-item color="info" value="admins">
                    <template v-slot:prepend>
                        <v-icon>mdi-account-multiple</v-icon>
                    </template>

                    <v-list-item-title>Admin</v-list-item-title>
                </v-list-item>
                </Link>


                <Link  v-for="item in menuItems" :key="item.name" :href="route('company')">
                <v-list-item color="info" value="company">
                    <template v-slot:prepend>
                        <v-icon>mdi-account-multiple</v-icon>
                    </template>

                    <v-list-item-title>Company</v-list-item-title>
                </v-list-item>
                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('phone')">
                <v-list-item color="success" value="phone">
                    <template v-slot:prepend>
                        <v-icon>mdi-phone</v-icon>
                    </template>

                    <v-list-item-title>Call Centre</v-list-item-title>
                </v-list-item>
                </Link>


                <Link  v-for="item in menuItems" :key="item.name" :href="route('vacantAd')">
                <v-list-item value="vacantAd">
                    <template v-slot:prepend>
                        <v-icon>mdi-home-outline</v-icon>
                    </template>

                    <v-list-item-title>Vacancies Ad</v-list-item-title>
                </v-list-item>
                </Link>




                <Link  v-for="item in menuItems" :key="item.name" :href="route('maintenance')">

                <v-list-item color value="/maintenance-requests">
                    <template v-slot:prepend>
                        <v-icon>mdi-wrench</v-icon>
                    </template>
                    <v-list-item-title>Maintenance</v-list-item-title>

                </v-list-item>

                </Link>

                <Link  v-for="item in menuItems" :key="item.name" :href="route('payment')">
                <v-list-item color="info" value="payment">
                    <template v-slot:prepend>
                        <v-icon>mdi-currency-usd</v-icon>
                    </template>

                    <v-list-item-title>Payment</v-list-item-title>
                </v-list-item>
                </Link>

            </v-list>
 -->



            <!-- Add more menu items based on your specific features -->
        </v-navigation-drawer>

        <!-- App Bar -->
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Rental Management System</v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- Profile Avatar and Notification Icon -->
            <!-- onclick display log out menu-->

            <v-btn icon="mdi-bell">
                <Logout />
            </v-btn>

            <v-icon class="mx-2">mdi-bell</v-icon>
        </v-app-bar>

        <!-- Main Content -->
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<style>
/* Add any custom styles for your avatar and notification icon */

#layout .v-list-item-title,
#layout a {
    text-decoration: none;
    cursor: pointer;
    color: #fff;
}
</style>
