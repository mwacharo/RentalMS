<template>
    <div>
        <v-dialog v-model="dialog" max-width="800px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Units</span>
                </v-card-title>
                <v-data-table show-select :headers="headers" :loading="loading" :items="units"
                    :sort-by="[{ key: 'unit_number', order: 'asc' }]">
                </v-data-table>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {


    data() {
        return {
            dialog: false,
            units: [],
            headers: [
                { title: 'Unit Number', value: 'unit_number' },
                { title: 'Deposit', value: 'deposit' },
                { title: 'Rent', value: 'rent' },
                { title: 'Status', value: 'unit_status' },
            ],
        };
    },
    methods: {

        show(item) {
            console.log(item);
            this.dialog = true;
            this.units = item.units;
            this.id = item.id;
        },

    }
};
</script>