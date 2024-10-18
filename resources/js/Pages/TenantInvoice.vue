<template>
    <v-dialog v-model="dialog" max-width="800px">
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
                            <v-text-field v-model="tenantInfo.tenant_name" label="Tenant Name" outlined
                                required></v-text-field>
                            <v-text-field v-model="tenantInfo.unit_number" label="Unit Number" outlined></v-text-field>
                            <v-text-field v-model="tenantInfo.phone" label="Phone" outlined></v-text-field>
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
                                <template v-slot:item.item="{ item }">
                                    <span>{{ item.item }}</span>
                                </template>
                                <template v-slot:item.description="{ item }">
                                    <span>{{ item.unit_cost }}</span>
                                </template>
                                <template v-slot:item.quantity="{ item }">
                                    <span>{{ item.number_of_units }}</span>
                                </template>

                                <template v-slot:item.amount="{ item }">
                                    <span>{{ formatCurrency(item.amount) }}</span>
                                </template>
                            </v-data-table>
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
    props: {
        bills: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            dialog: false,
            valid: true,
            tableHeaders: [
                { title: 'Item', value: 'item' },
                { title: 'Unit Cost', value: 'unit_cost' },
                { title: 'Number of Units', value: 'number_of_units' },
                { title: 'Amount', value: 'amount' }
            ],
            paymentStatuses: ['Paid', 'Pending', 'Overdue'],
            tenantInfo: {
                tenant_name: '',
                unit_number: '',
                phone: ''
            },
            invoice: {
                number: '000001',
                date: new Date().toISOString().substr(0, 10),
                dueDate: '',
                items: [], // Items filled from the bills prop
                notes: '',
                payment_status: 'Pending',
            },
        };
    },
    computed: {
        total() {
            return this.invoice.items.reduce((total, item) => total + parseFloat(item.amount), 0);
        }
    },
    watch: {
        bills: {
            immediate: true,
            handler(newBills) {
                if (newBills && newBills.length) {
                    const rent = newBills[0].tenant.unit.rent;
                    const deposit = newBills[0].tenant.unit.deposit;

                    this.tenantInfo = {
                        tenant_name: newBills[0].tenant.tenant_name,
                        unit_number: newBills[0].tenant.unit.unit_number,
                        phone: newBills[0].tenant.phone
                    };

                    // Adding rent, deposit, and bills to invoice items
                    const rentItem = {
                        item: 'Rent',
                        unit_cost: rent,
                        number_of_units: 1,
                        amount: rent
                    };
                    const depositItem = {
                        item: 'Deposit',
                        unit_cost: deposit,
                        number_of_units: 1,
                        amount: deposit
                    };

                    const billItems = newBills.map(bill => ({
                        item: bill.bill.bill,
                        unit_cost: bill.bill.unit_cost,
                        number_of_units: bill.bill.number_of_units,
                        amount: bill.amount
                    }));

                    this.invoice.items = [rentItem, depositItem, ...billItems];
                }
            }
        }
    },
    methods: {

        show(item) {
            console.log(item);
            this.dialog = true;
            this.id = item.id;
        },
        formatCurrency(value) {
            return `$${parseFloat(value).toFixed(2)}`;
        },
        close() {
            this.dialog = false;
        }
    }
};
</script>

<style scoped>
.invoice-table {
    margin-top: 20px;
}
</style>
