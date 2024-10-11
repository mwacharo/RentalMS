<template>
    <v-dialog v-model="dialog" max-width="900px">
        <v-card>
            <v-card-title class="blue white--text">
                <span class="text-h6">Invoice Details</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <!-- Tenant and Unit Information -->
                    <v-row class="pa-4">
                        <v-col cols="6">
                            <h5 class="font-weight-bold">Bill To:</h5>
                            <!-- tenant Name  -->
                            <v-text-field v-model="invoice.company" label="Company Name" outlined
                                required></v-text-field>
                            <v-text-field v-model="invoice.address" label="Address" outlined></v-text-field>
                            <v-text-field v-model="invoice.city" label="City" outlined></v-text-field>
                            <!-- <v-text-field v-model="invoice.postalCode" label="Postal Code" outlined></v-text-field>  -->
                        </v-col>
                        <v-col cols="6" class="text-right">
                            <v-text-field v-model="invoice.number" label="Invoice #" outlined readonly></v-text-field>
                            <v-text-field v-model="invoice.date" label="Date" outlined type="date"></v-text-field>
                            <v-text-field v-model="invoice.dueDate" label="Invoice Due Date" outlined
                                type="date"></v-text-field>
                        </v-col>
                    </v-row>

                    <!-- Invoice Items Table -->
                    <v-row class="pa-4">
                        <v-col>
                            <v-data-table :headers="tableHeaders" :items="invoice.items" class="elevation-1"
                                hide-default-footer disable-pagination>
                                <template v-slot:item.quantity="{ item }">
                                    <v-text-field v-model="item.quantity" type="number" min="1" outlined
                                        dense></v-text-field>
                                </template>
                                <template v-slot:item.price="{ item }">
                                    <v-text-field v-model="item.price" type="number" min="0" outlined
                                        dense></v-text-field>
                                </template>
                                <template v-slot:item.tax="{ item }">
                                    <v-select v-model="item.tax" :items="taxOptions" outlined dense></v-select>
                                </template>
                                <template v-slot:item.amount="{ item }">
                                    <span>{{ formatCurrency(item.quantity * item.price) }}</span>
                                </template>
                            </v-data-table>

                            <v-btn color="primary" class="mt-3" @click="addItem">Add Item</v-btn>
                        </v-col>
                    </v-row>

                    <!-- Notes and Payment Status -->
                    <v-row class="pa-4">
                        <v-col cols="6">
                            <v-textarea v-model="invoice.notes" label="Notes" outlined></v-textarea>
                        </v-col>
                        <v-col cols="6" class="text-right">
                            <v-select v-model="invoice.payment_status" :items="paymentStatuses" label="Payment Status"
                                outlined></v-select>
                            <h4 class="mt-4">Total: {{ formatCurrency(total) }}</h4>
                        </v-col>
                    </v-row>

                    <!-- Submit Button -->
                    <v-row>
                        <v-col class="text-right">
                            <v-btn color="primary" @click="submitInvoice" :disabled="!valid">Submit</v-btn>
                            <v-btn color="secondary" @click="close" variant="text">Close</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            valid: true,
            tableHeaders: [
                { title: 'Items', value: 'item' },
                { title: 'Description', value: 'description' },
                { title: 'Quantity', value: 'quantity' },
                { title: 'Price', value: 'price' },
                { title: 'Tax', value: 'tax' },
                { title: 'Amount', value: 'amount' }
            ],
            taxOptions: ['0%', '5%', '10%', '15%', '16%', '20%',],
            paymentStatuses: ['Paid', 'Pending', 'Overdue'],
            invoice: {
                number: '000001',
                date: new Date().toISOString().substr(0, 10),
                dueDate: '',
                company: '',
                address: '',
                city: '',
                postalCode: '',
                items: [
                    { item: 'Item 1', description: 'Description', quantity: 1, price: 0, tax: '0%', amount: 0 }
                ],
                notes: '',
                payment_status: 'Pending',
            }
        };
    },
    computed: {
        total() {
            return this.invoice.items.reduce((total, item) => {
                return total + item.quantity * item.price;
            }, 0);
        }
    },
    methods: {
        show(item) {
            console.log(item);
            this.dialog = true;
            this.id = item.id;
        },
        formatCurrency(value) {
            return `$${value.toFixed(2)}`;
        },
        addItem() {
            this.invoice.items.push({ item: '', description: '', quantity: 1, price: 0, tax: '0%', amount: 0 });
        },
        close() {
            this.dialog = false;
        },
        submitInvoice() {
            // Submit logic here
            alert('Invoice Submitted!');
        }
    }
};
</script>

<style scoped>
.invoice-table {
    margin-top: 20px;
}
</style>