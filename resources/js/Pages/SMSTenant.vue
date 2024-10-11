<template>
    <v-dialog v-model ="dialog" width= "800">
    <v-container class="mt-5">
      <v-card>
     
                    <v-btn icon="mdi-close" @click="dialog = false"></v-btn>


                    <v-spacer></v-spacer>
      
        <v-card-title>
          <h4>Send Bulk SMS</h4>
        </v-card-title>
        <v-card-subtitle>
        </v-card-subtitle>
        <v-card-text>
          <v-form>
            <!-- Phone Number -->
            <v-text-field
              v-model="phoneNumber"
              label="Phone Numbers"
              placeholder="e.g 0719133270"
              outlined
              clearable
            ></v-text-field>
  
            <!-- Message Templates Dropdown -->
            <!-- <v-select
              v-model="selectedTemplate"
              :items="templates"
              label="Message Templates"
              placeholder="Select template"
              outlined
              clearable
            ></v-select> -->
  
            <!-- Compose Message -->
            <v-textarea
              v-model="message"
              label="Compose Message"
              placeholder="Type your message"
              hint="15 characters are automatically added for opt-out"
              persistent-hint
              outlined
              rows="5"
              maxlength="145"
              counter
            ></v-textarea>
  
            <!-- Sender ID -->
            <v-select
              v-model="senderId"
              :items="senderIds"
              label="Sender ID"
              outlined
              clearable
            ></v-select>
  
            <!-- Send Now or Schedule -->
            <v-radio-group v-model="timeToSend" label="Time to Send">
              <v-radio label="Send Now" value="now"></v-radio>
              <v-radio label="Send Later" value="later"></v-radio>
            </v-radio-group>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="sendSMS">
            Send SMS
          </v-btn>
          <v-btn color="primary" @click="sendSMS">
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
</v-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog:false,
        phoneNumber: '',
        selectedTemplate: '',
        message: '',
        senderId: '',
        timeToSend: 'now',
        templates: ['Template 1', 'Template 2', 'Template 3'],
        senderIds: ['JuaMobile', 'AnotherSenderID'],
      };
    },
    methods: {

        show(item) {
            console.log(item);
            this.dialog = true;
            this.id = item.id;
            // this.openExcel(item);
        },
        close() {
            this.dialog = false;
        
        },
      sendSMS() {
        // Logic for sending SMS
        console.log("SMS Sent:", {
          phoneNumber: this.phoneNumber,
          selectedTemplate: this.selectedTemplate,
          message: this.message,
          senderId: this.senderId,
          timeToSend: this.timeToSend,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .v-container {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  