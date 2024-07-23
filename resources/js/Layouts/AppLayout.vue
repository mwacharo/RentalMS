<script setup>
import Logout from "@/Components/Logout.vue";
import { ref } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const drawer = ref(true);
const select = ref(false);
</script>
<template>
    <v-app>
        <!-- Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" app color="black">
            -

            <v-list density="compact" v-model="select" id="layout">
                <v-list-item> </v-list-item>

                <Link :href="route('dashboard')">
                <v-list-item color="info" value="home">
                    <template v-slot:prepend>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </template>

                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('tenant')">
                <v-list-item color="info" value="home">
                    <template v-slot:prepend>
                        <v-icon>mdi-account-tie</v-icon>
                    </template>

                    <v-list-item-title>Tenant</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('landlord')">
                <v-list-item color="info" value="landlords">
                    <template v-slot:prepend>
                        <v-icon>mdi-account-multiple</v-icon>
                    </template>

                    <v-list-item-title>Landlord</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('property')">
                <v-list-item color="info" value="properties">
                    <template v-slot:prepend>
                        <v-icon>mdi-domain</v-icon>
                    </template>

                    <v-list-item-title>Property</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('unit')">
                <v-list-item color="info" value="unit">
                    <template v-slot:prepend>
                        <v-icon>mdi-home-floor-a</v-icon>
                    </template>

                    <v-list-item-title>Unit</v-list-item-title>
                </v-list-item>
                </Link>


                <Link :href="route('bill')">
                <v-list-item color="info" value="bill">
                    <template v-slot:prepend>
                        <v-icon>mdi-currency-usd</v-icon>
                    </template>

                    <v-list-item-title>Bill</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('booking')">
                <v-list-item color="info" value="bookings">
                    <template v-slot:prepend>
                        <v-icon>mdi-calendar-check</v-icon>
                    </template>

                    <v-list-item-title>Booking</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('lease')">
                <v-list-item color="info" value="leases">
                    <template v-slot:prepend>
                        <v-icon>mdi-file-document-edit</v-icon>
                    </template>

                    <v-list-item-title>Lease</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('invoice')">
                <v-list-item color="info" value="invoice
       ">
                    <template v-slot:prepend>
                        <v-icon>mdi-receipt</v-icon>
                    </template>
                    <v-list-item-title>Invoice</v-list-item-title>
                </v-list-item>
                </Link>



                <Link :href="route('admin')">
                <v-list-item color="info" value="admins">
                    <template v-slot:prepend>
                        <v-icon>mdi-account-multiple</v-icon>
                    </template>

                    <v-list-item-title>Admin</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('phone')">
                <v-list-item color="success" value="phone">
                    <template v-slot:prepend>
                        <v-icon>mdi-phone</v-icon>
                    </template>

                    <v-list-item-title>Call Centre</v-list-item-title>
                </v-list-item>
                </Link>


                <Link :href="route('vacantAd')">
                <v-list-item value="vacantAd">
                    <template v-slot:prepend>
                        <!-- mdi-home-outline or mdi-sign-real-estate can represent a property or vacancy well -->
                        <v-icon>mdi-home-outline</v-icon>
                    </template>

                    <v-list-item-title>Vacancies Ad</v-list-item-title>
                </v-list-item>
                </Link>

                <Link :href="route('payment')">
                <v-list-item color="info" value="payment">
                    <template v-slot:prepend>
                        <v-icon>mdi-currency-usd</v-icon>
                    </template>

                    <v-list-item-title>Payment</v-list-item-title>
                </v-list-item>
                </Link>

            </v-list>




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
