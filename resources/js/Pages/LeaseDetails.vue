<template>
    <div>
      <v-btn color="primary" @click="dialog = true">View Lease Details</v-btn>
      <v-dialog v-model="dialog" max-width="800px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Lease Details and Terms and Conditions</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <h6>Lease Information</h6>
                  <p><strong>Landlord:</strong> {{ lease.landlord }}</p>
                  <p><strong>Tenant:</strong> {{ lease.tenant }}</p>
                  <p><strong>Property:</strong> {{ lease.property }}</p>
                  <p><strong>Unit:</strong> {{ lease.unit }}</p>
                  <p><strong>Start Date:</strong> {{ lease.start_date }}</p>
                  <p><strong>End Date:</strong> {{ lease.end_date }}</p>
                  <p><strong>Monthly Rent:</strong> {{ lease.rent }}</p>
                </v-col>
                <v-col cols="12" sm="6">
                  <h6>Terms and Conditions</h6>
                  <p><strong>1. Parties</strong></p>
                  <p>The Landlord and Tenant as specified above.</p>
                  <p><strong>2. Term</strong></p>
                  <p>The lease starts on {{ lease.start_date }} and ends on {{ lease.end_date }}.</p>
                  <p><strong>3. Rent</strong></p>
                  <p>The monthly rent is KES {{ lease.rent }}, payable on or before the due date each month.</p>
                  <p><strong>4. Security Deposit</strong></p>
                  <p>The security deposit is KES {{ lease.security_deposit }}.</p>
                  <p><strong>5. Utilities</strong></p>
                  <p>The Tenant is responsible for all utilities.</p>
                  <p><strong>6. Maintenance and Repairs</strong></p>
                  <p>The Tenant shall maintain the Premises in good condition and notify the Landlord of necessary repairs.</p>
                  <p><strong>7. Use of Premises</strong></p>
                  <p>The Premises are for residential purposes only.</p>
                  <p><strong>8. Alterations</strong></p>
                  <p>No alterations without written consent from the Landlord.</p>
                  <p><strong>9. Subletting and Assignment</strong></p>
                  <p>No subletting or assignment without written consent from the Landlord.</p>
                  <p><strong>10. Termination</strong></p>
                  <p>Either party may terminate with [Number of Days] days notice.</p>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="agreeToTerms">Agree</v-btn>
            <v-btn text @click="dialog = false">Close</v-btn>
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
        lease: {
          landlord: 'John Doe',
          tenant: 'Jane Smith',
          property: '123 Main St, Nairobi',
          unit: 'Apt 4B',
          start_date: '2024-01-01',
          end_date: '2024-12-31',
          rent: 50000,
          security_deposit: 100000,
        },
      };
    },
    methods: {
      agreeToTerms() {
        // Handle the user agreeing to the terms
        console.log('Terms agreed');
        this.dialog = false;
        // Proceed with further actions such as saving the agreement
      },
    },
  };
  </script>
  
  <style scoped>
  .text-h5 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  </style>
  