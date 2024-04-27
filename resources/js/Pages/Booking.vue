<template>
    <AppLayout>
        <VCard class="my-card">
            <v-container>
                <v-text-field
                    v-model="searchQuery"
                    label="Search"
                    variant="outlined"
                ></v-text-field>
            </v-container>
        </VCard>
        <v-toolbar flat>
            <v-toolbar-title class="text-center" style="width: 100%"
                >Book</v-toolbar-title
            >
        </v-toolbar>

        <v-card>
            <v-tabs v-model="tab" background-color="transparent">
                <v-tab value="viewPosts">View Posts</v-tab>
                <v-tab value="fetchBookings">Bookings</v-tab>
            </v-tabs>
        </v-card>

        <!-- Conditionally render the form to post a vacant ad -->
        <v-card class="my-card">
            <div v-if="tab === 'postVacant'">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-select
                        v-model="property_id"
                        :items="properties"
                        item-title="property_name"
                        label="Property"
                        item-value="id"
                    ></v-select>

                    <v-text-field
                        v-model="ad.description"
                        label="Description"
                        required
                        :rules="descriptionRules"
                    ></v-text-field>

                    <v-text-field
                        v-model="ad.number_of_units"
                        label="Number of units"
                        required
                        :rules="number_of_unitsRules"
                    ></v-text-field>

                    <v-text-field
                        v-model="ad.rent"
                        label="rent"
                        required
                        :rules="rent"
                    ></v-text-field>

                    <v-file-input
                        v-model="ad.images"
                        label="Property images"
                        multiple
                        accept="image/png, image/jpeg, image/bmp"
                    ></v-file-input>

                    <!-- Add other input fields as necessary -->

                    <v-btn :disabled="!valid" @click="submitAd">Submit</v-btn>
                </v-form>

                <!-- Your form to post a vacant ad -->
            </div>
        </v-card>

        <v-card class="my-card">
            <!-- Conditionally render the section to view posts -->
            <div v-if="tab === 'viewPosts'">
                <v-data-table
                    :headers="headers"
                    :items="vacants"
                    class="elevation-1"
                >
                    <template #item.actions="{ item }">
                        <v-tooltip bottom>
                            <template #activator="{ on, attrs }">
                                <v-btn
                                    small
                                    color="info"
                                    icon
                                    v-on="on"
                                    v-bind="attrs"
                                    @click="OpenBookVacant(item)"
                                >
                                    <v-icon>mdi-calendar-check</v-icon>
                                </v-btn>
                            </template>
                            <span>Book Vacant</span>
                        </v-tooltip>
                    </template>
                </v-data-table>

                <!-- Component or code to display posts -->
                <!-- datatable  -->
            </div>
        </v-card>
        <v-card class="my-card">
            <!-- Conditionally render the section for bookings -->
            <div v-if="tab === 'fetchBookings'">
                <!-- Component or code for bookings -->

                <!-- <v-data-table
                    :headers="bookingHeaders"
                    :items="bookings"
                    class="elevation-1"
                >
                </v-data-table> -->

                <v-data-table
                    :headers="bookingHeaders"
                    :items="bookings"
                    :sort-by="[{ key: 'calories', order: 'asc' }]"
                >
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Bookings</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <!-- <template v-slot:activator="{ props }">
                                    <v-btn
                                        class="mb-2"
                                        color="primary"
                                        dark
                                        v-bind="props"
                                    >
                                        New Item
                                    </v-btn>
                                </template> -->
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">{{
                                            formTitle
                                        }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                        v-model="editedItem.id"
                                                        label="Dessert name"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.vacant_id
                                                        "
                                                        label="Calories"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.property_id
                                                        "
                                                        label="Fat (g)"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.date
                                                        "
                                                        label="Carbs (g)"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                        v-model="
                                                            editedItem.status
                                                        "
                                                        label="Protein (g)"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="close"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="save"
                                        >
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5"
                                        >Are you sure you want to delete this
                                        item?</v-card-title
                                    >
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="closeDelete"
                                            >Cancel</v-btn
                                        >
                                        <v-btn
                                            color="blue-darken-1"
                                            variant="text"
                                            @click="deleteItemConfirm"
                                            >OK</v-btn
                                        >
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            class="me-2"
                            size="small"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon size="small" @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            Reset
                        </v-btn>
                    </template>
                </v-data-table>
            </div>
            <bookvacant ref="bookVacant" />
        </v-card>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from "axios";
import bookvacant from "./BookVacant.vue";

export default {
    components: {
        AppLayout,
        bookvacant,
    },
    data() {
        return {
            bookingHeaders: [
                { title: "Booking ID", value: "id" },

                { title: "Vacant Id", value: "vacant_id" },
                { title: "Properpty Name", value: "property.property_name" },

                { title: "Date", value: "date" },
                { title: "Status", value: "status" },
            ],
            bookings: [],

            tab: "viewPosts", // This is the initial tab that will be shown
            valid: true,

            properties: [],
            property_name: "",
            property_id: "",
            rent: "",
            vacants: [],
            // ...other data properties
            headers: [
                { title: "Vacant ID", key: "id" },
                { title: "Property Name", key: "property.property_name" },
                { title: "Description", key: "description" },
                { title: "Rent", key: "rent" },
                { title: "Units", key: "number_of_units" },
                { title: "Actions", key: "actions", sortable: false },

                // ...add other headers as needed
            ],

            // Add other rules here
        };
    },
    created() {
        this.fetchProperties();
        this.viewPosts();
        this.fetchBookings();
    },

    computed: {
        // Computed property to always get the current tenant's ID reactively
        tenant_id() {
            return this.$page.props.auth.user
                ? this.$page.props.auth.user.id
                : null;
        },
    },

    methods: {
        OpenBookVacant(item) {
            this.$refs.bookVacant.show(item);
        },

        fetchProperties() {
            const API_URL = "/properties";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("properties response:", response.data);

                    this.properties = response.data;
                })
                .catch((error) => {
                    console.error("failed to load properties:", error);
                });
        },
        viewPosts() {
            const API_URL = "vacant";
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("vacants response:", response.data);
                    this.vacants = response.data;
                })
                .catch((error) => {
                    console.error("failed to load vacants:", error);
                });
        },

        fetchBookings() {
            axios
                .get("/bookings")
                .then((response) => {
                    // this.bookings = response.data;
                    this.bookings = Array.isArray(response.data)
                        ? response.data
                        : [];
                })
                .catch((error) => {
                    console.error("Failed to load bookings:", error);
                });
        },
    },
};
</script>

<style scoped>
.my-card {
    margin: 40px; /* Adjust the margin as needed */
}
</style>
