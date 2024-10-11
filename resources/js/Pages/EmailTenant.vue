<template>
    <v-dialog v-model="dialog"  width= "800">
    <v-container class="mt-5">
      <v-card>

        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>


<v-spacer></v-spacer>
        <v-card-title>
          <h4>Send Single Email</h4>
        </v-card-title>
        <v-card-subtitle>
          Use this to send an email to a single recipient.
        </v-card-subtitle>
        <v-card-text>
          <v-form>
            <!-- Recipient Email -->
            <v-text-field
              v-model="recipientEmail"
              label="Recipient Email"
              placeholder="e.g. user@gmail.com"
              outlined
              clearable
              type="email"
            ></v-text-field>
  
            <!-- Subject -->
            <v-text-field
              v-model="subject"
              label="Subject"
              placeholder="Enter email subject"
              outlined
              clearable
            ></v-text-field>
  
            <!-- Compose Email (Rich Text Editor) -->
            <v-textarea
              v-model="emailContent"
              label="Compose Email"
              placeholder="Write your email here..."
              outlined
              rows="8"
            ></v-textarea>
  
            <!-- Sender Email -->
            <v-select
              v-model="senderEmail"
              :items="senderEmails"
              label="Sender Email"
              placeholder="-- Select Sender Email --"
              outlined
              clearable
            ></v-select>
  
            <!-- Send Now or Later -->
            <v-radio-group v-model="timeToSend" label="Time to Send">
              <v-radio label="Send Now" value="now"></v-radio>
              <v-radio label="Send Later" value="later"></v-radio>
            </v-radio-group>
          </v-form>
        </v-card-text>
  
        <!-- Buttons for Sending Email and Saving Draft -->
        <v-card-actions>
          <v-btn color="primary" @click="sendEmail">
            Send Email
          </v-btn>
          <v-btn color="warning" @click="saveDraft">
            Save Draft
          </v-btn>
          <v-btn color="info" @click="close">
            Close
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
        recipientEmail: '',
        subject: '',
        emailContent: '',
        senderEmail: '',
        timeToSend: 'now',
        senderEmails: ['user1@example.com', 'user2@example.com', 'user3@example.com'], // Example sender emails
      };
    },
    methods: {
      sendEmail() {
        // Logic to send the email
        console.log("Email Sent:", {
          recipientEmail: this.recipientEmail,
          subject: this.subject,
          emailContent: this.emailContent,
          senderEmail: this.senderEmail,
          timeToSend: this.timeToSend,
        });
      },
      show(item) {
            console.log(item);
            this.dialog = true;
            this.id = item.id;
            // this.openExcel(item);
        },
        close() {
            this.dialog = false;
      
        },
      saveDraft() {
        // Logic to save draft
        console.log("Draft Saved:", {
          recipientEmail: this.recipientEmail,
          subject: this.subject,
          emailContent: this.emailContent,
          senderEmail: this.senderEmail,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .v-container {
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  

