<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
            <div class="invoice">
                <h1>Invoice</h1>
                <div>
                    <label for="invoice-number">Invoice Number:</label>
                    <input
                        v-model="invoice.number"
                        type="text"
                        id="invoice-number"
                    />
                </div>
                <div>
                    <label for="invoice-date">Date:</label>
                    <input
                        v-model="invoice.date"
                        type="date"
                        id="invoice-date"
                    />
                </div>
                <h2>Items</h2>
                <div v-for="(item, index) in invoice.items" :key="index">
                    <input
                        v-model="item.description"
                        type="text"
                        placeholder="Description"
                    />
                    <input
                        v-model="item.quantity"
                        type="number"
                        placeholder="Quantity"
                    />
                    <input
                        v-model="item.price"
                        type="number"
                        placeholder="Price"
                    />
                    <button @click="removeItem(index)">Remove</button>
                </div>
                <button @click="addItem">Add Item</button>
                <h3>Total: {{ total }}</h3>
            </div>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,

            invoice: {
                number: "",
                date: "",
                items: [],
            },
        };
    },
    computed: {
        total() {
            return this.invoice.items.reduce((total, item) => {
                return total + item.quantity * item.price;
            }, 0);
        },
    },
    methods: {
        show(item) {
            console.log(item);
            this.dialog = true;
            this.id = item.id;
        },
        addItem() {
            this.invoice.items.push({ description: "", quantity: 1, price: 0 });
        },
        removeItem(index) {
            this.invoice.items.splice(index, 1);
        },
    },
};
</script>

<style>
/* Add your CSS styling here */
</style>
