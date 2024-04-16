<template>
    <v-dialog v-model="dialog" max-width="500px">
        
        <v-card>
            <v-card-title class="headline">Book Vacant</v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        v-model="date"
                        type="date"
                        label="Select Date"
                        :rules="dateRules"
                        required
                        outlined
                    ></v-text-field>
                    <v-textarea
                        v-model="message"
                        label="Message"
                        hint="Optional"
                        :rules="messageRules"
                    ></v-textarea>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"
                    >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="bookVacant"
                    >Book Vacant</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            tenant_id: this.$page.props.auth.user.id, // Fetch the logged-in user's ID from shared data
            dialog: false,
            valid: true,
            date: null,
            message: "",
            id: null, // Added id here
            // current id of user logged in
            // tenant_id: $page.props.auth.user.id,

            dateRules: [(v) => !!v || "Date is required"],
            messageRules: [
                (v) =>
                    (v && v.length <= 200) ||
                    "Message must be less than 200 characters",
            ],
        };
    },
    computed: {
        // Computed property to always get the current tenant's ID reactively
        tenant_id() {
            return this.$page.props.auth.user ? this.$page.props.auth.user.id : null;
        }
    },
    methods: {
        show(item) {
            this.dialog = true;
            this.id = item.id;
            this.date = item.date;

            this.property_id = item.property_id;
        },
        bookVacant(item) {
            const API_URL = "book" + this.id;

            const data = {
                date: this.date,
                message: this.message,
                vacant_id: this.id,
                property_id: this.property_id,
                tenant_id: this.tenant_id,

                // tenantId: this.tenantId,
            };

            axios
                .post(API_URL, data)
                .then((response) => {

                    console.log(" created:", response.data);
                    this.bookVacant = response.data; // Store the response data
                    //             date: this.date,
                    // message: this.message,
                    // id: this.id,
                    // property_id: this.property_id,
                    // tenant_id: this.tenant_id // Make sure to send the tenant_id
                    // Handle success (e.g., show a success message or update UI)
                })
                .catch((error) => {
                    console.error("Error creating :", error);
                    // Handle error (e.g., show an error message)
                });
        },
   
        resetForm() {
            this.date = null;
            this.message = "";

            // Reset other fields as needed
        },
    },
};
</script>

<style>
/* Add any additional styling here */
</style>
