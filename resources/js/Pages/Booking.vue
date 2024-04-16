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

                <v-data-table
                    :headers="bookingHeaders"
                    :items="bookings"
                    class="elevation-1"
                >
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
            ad: {
                title: "",
                address: "",
                description: "",
                number_of_unitsRules: "",
                propertyType: null,
                images: [],

                // Add other property ad details here
            },
            titleRules: [
                (v) => !!v || "Title is required",
                (v) =>
                    (v && v.length <= 255) ||
                    "Title must be less than 255 characters",
            ],
            addressRules: [(v) => !!v || "Address is required"],
            descriptionRules: [(v) => !!v || "Description is required"],
            number_of_unitsRules: [
                (v) => !!v || "number of units    is required",
            ],
            rentRules: [(v) => !!v || "rent   is required"],

            propertyTypes: [
                "Apartment",
                "House",
                "Studio",
                "Condo",
                "Townhouse",
                "Other",
            ],
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
        submitAd() {
            if (this.$refs.form.validate()) {
                // Initialize FormData object
                let formData = new FormData();

                // Append regular fields to formData
                formData.append("property_id", this.property_id); // Assuming property_id is stored in this.property_id
                formData.append("description", this.ad.description);
                formData.append("number_of_units", this.ad.number_of_units);
                formData.append("rent", this.ad.rent);
                // Append other fields as necessary

                // Append image files to formData
                if (this.ad.images && this.ad.images.length > 0) {
                    this.ad.images.forEach((file, index) => {
                        formData.append(`images[${index}]`, file);
                    });
                }

                // Use axios to send a POST request
                axios
                    .post("/vacantAd", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((response) => {
                        // Handle success
                        console.log("Ad submitted successfully", response.data);
                        // You can redirect the user or show a success message
                    })
                    .catch((error) => {
                        // Handle error
                        console.error(
                            "Failed to submit ad",
                            error.response.data
                        );
                        // Show error message to user
                    });
            } else {
                console.log("Form is invalid");
            }
        },

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
                    this.bookings = Array.isArray(response.data) ? response.data : [];
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
