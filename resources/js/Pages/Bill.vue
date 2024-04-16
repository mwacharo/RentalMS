<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>Assign Bills to Tenant</v-card-title>
                <v-card-text>
                    <v-container>
                        <div v-for="bill in bills" :key="bill.id">
                            <v-checkbox
                                v-model="bill.clicked"
                                :label="bill.bill"
                            ></v-checkbox>

                            <v-text-field v-model="bill.amount"></v-text-field>
                        </div>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="close">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" @click="submitBillAssignment"
                        >Assign</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            dialogm1: "",
            dialog: false,
            id: null,
            bills: {},
            billAssignment: {},
        };
    },
    methods: {
        show(item) {
            console.log(item);
            this.dialog = true;
            this.id = item.id;
            this.assignBills();
        },
        assignBills() {
            const API_URL = "bills/"+this.id;
            axios
                .get(API_URL)
                .then((response) => {
                    console.log("bills response:", response.data);
                    this.bills = response.data;
                    // TODO: Open the bill assignment dialog/modal here
                })
                .catch((error) => {
                    console.error("failed to load bills:", error);
                });
        },

        close() {
            this.dialog = false;
            // Reset bills to default state if needed
            this.bills = this.bills.map((bill) => ({
                ...bill,
                clicked: false,
                amount: "",
            }));
        },
        submitBillAssignment() {
            // Prepare the data to be sent
            const assignedBills = this.bills
                .filter((bill) => bill.clicked) // Filter out the bills that are selected
                .map((bill) => {
                    return {
                        billId: bill.id,
                        amount: bill.amount,
                        // Add any other bill details necessary for your backend
                    };
                });

            // Ensure there is at least one bill to submit
            if (assignedBills.length === 0) {
                alert("Please select at least one bill to assign.");
                return;
            }

            // Include tenantId in the data if necessary
            const data = {
                tenantId: this.billAssignment.tenantId,
                bills: assignedBills,
            };

            // API call to submit the data
            const API_URL = "submitBill/"+this.id;
            axios
                .post(API_URL, data)
                .then((response) => {
                    console.log("Assignment response:", response.data);
                    // Handle the successful response here
                })
                .catch((error) => {
                    console.error("Failed to assign bills:", error);
                    // Handle the error here
                });

            // Close the dialog and reset the bills
            this.dialog = false;
            this.bills = this.bills.map((bill) => ({
                ...bill,
                clicked: false,
                amount: "",
            }));
        },
    },
};
</script>
