<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" max-width="700px">
            <v-card>
                <v-card-title>Assign Bills to Tenant</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-table dense>
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Bill</th>
                                    <th>Unit Cost</th>
                                    <th>Number of Units</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="bill in bills" :key="bill.id">
                                    <td>
                                        <v-checkbox
                                            v-model="bill.clicked"
                                        ></v-checkbox>
                                    </td>
                                    <td>{{ bill.bill }}</td>
                                    <td>
                                        <v-text-field
                                            v-model="bill.unit_cost"
                                            dense
                                            hide-details
                                            label="Unit Cost"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="bill.number_of_units"
                                            dense
                                            hide-details
                                            label="Units"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                            v-model="bill.amount"
                                            dense
                                            hide-details
                                            label="Total"
                                        ></v-text-field>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="close">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" @click="submitBillAssignment">
                        Assign
                    </v-btn>
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
            dialog: false,
            id: null,
            bills: [],
            billAssignment: {},
        };
    },
    methods: {
        watch(amount)
        {
            bill.amount = unit_cost * number_of_units;

        },
        show(item) {
            this.dialog = true;
            this.id = item.id;
            this.assignBills();
        },
        assignBills() {
            const API_URL = `bills/${this.id}`;
            axios
                .get(API_URL)
                .then((response) => {
                    this.bills = response.data;
                })
                .catch((error) => {
                    console.error("Failed to load bills:", error);
                });
        },
        close() {
            this.dialog = false;
            this.bills = this.bills.map((bill) => ({
                ...bill,
                clicked: false,
                amount: "",
            }));
        },
        submitBillAssignment() {
            const assignedBills = this.bills
                .filter((bill) => bill.clicked)
                .map((bill) => ({
                    billId: bill.id,
                    amount: bill.amount,
                }));

            if (assignedBills.length === 0) {
                alert("Please select at least one bill to assign.");
                return;
            }

            const data = {
                tenantId: this.billAssignment.tenantId,
                bills: assignedBills,
            };

            const API_URL = `submitBill/${this.id}`;
            axios
                .post(API_URL, data)
                .then((response) => {
                    console.log("Assignment response:", response.data);
                })
                .catch((error) => {
                    console.error("Failed to assign bills:", error);
                });

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
