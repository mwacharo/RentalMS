<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="700"
      >
       
        <v-card>
          <v-card-title>
            <span class="text-h5">Tenant Biils</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Rent*"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="water Bill"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Internet Bill"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Waste Collection"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Deposit"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Service Charge "
                    required
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
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>


<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
    methods:{
        show(item){
            console.log(item)
            this.dialog=true
        }
    }
  }
</script>