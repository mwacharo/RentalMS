ls <template>
  <AppLayout>
      <VCard class="my-card">
          <v-container>
              <v-text-field
                  v-model="searchQuery"
                  label="Search"
                  @keyup.enter="performSearch"
                  variant="outlined"
              ></v-text-field>
          </v-container>
      </vcard>
      
      <VCard class="my-card" outlined>
          <v-data-table
              :headers="headers"
              :loading="loading"
              :items="properties"
              :sort-by="[{ key: 'property_name', order: 'asc' }]"
          >
              <template v-slot:top>
                  <v-toolbar flat>
                      <v-toolbar-title>Transactions</v-toolbar-title>

                      <v-divider class="mx-4" inset vertical></v-divider>
                      <v-spacer></v-spacer>
                      <v-dialog v-model="dialog" max-width="500px">
                        

                          <v-card>
                              <v-card-title>
                                  <span class="text-h5">{{ formTitle }}</span>
                              </v-card-title>

                              <v-card-text>
                                  <v-container>
                                      <v-row>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field
                                                  v-model="
                                                      editedItem.property_name
                                                  "
                                                  label="Property Name"
                                              ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field
                                                  v-model="editedItem.email"
                                                  label="Email"
                                              ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field
                                                  v-model="editedItem.phone"
                                                  label="phone"
                                              ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field
                                                  v-model="editedItem.address"
                                                  label="Address"
                                              ></v-text-field>
                                          </v-col>
                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field
                                                  v-model="
                                                      editedItem.description
                                                  "
                                                  label="Description"
                                              ></v-text-field>
                                          </v-col>

                                          <v-col cols="12" sm="6" md="4">
                                              <v-text-field
                                                  v-model="
                                                      editedItem.number_of_units
                                                  "
                                                  label="Units"
                                              ></v-text-field>
                                          </v-col>

                                          <v-col cols="12" sm="6" md="4">
                                              <v-select
                                                  v-model="
                                                      editedItem.landlord_id
                                                  "
                                                  :items="landlords"
                                                  item-title="landlord_name"
                                                  label="Landlord Name"
                                                  item-value="id"
                                              ></v-select>
                                          </v-col>
                                      </v-row>
                                  </v-container>
                              </v-card-text>

                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                      color="blue-darken-1"
                                      variant="text"
                                      @click="close"
                                  >
                                      Cancel
                                  </v-btn>
                                  <v-btn
                                      color="blue-darken-1"
                                      variant="text"
                                      @click="save"
                                  >
                                      Save
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                      <v-dialog v-model="dialogDelete" max-width="500px">
                          <v-card>
                              <v-card-title class="text-h5"
                                  >Are you sure you want to delete this
                                  item?</v-card-title
                              >
                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                      color="blue-darken-1"
                                      variant="text"
                                      @click="closeDelete"
                                      >Cancel</v-btn
                                  >
                                  <v-btn
                                      color="blue-darken-1"
                                      variant="text"
                                      @click="deleteItemConfirm"
                                      >OK</v-btn
                                  >
                                  <v-spacer></v-spacer>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                  </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                  <v-icon size="small" class="me-2" @click="editItem(item)">
                      mdi-pencil
                  </v-icon>
                  <v-icon size="small" @click="deleteItem(item)">
                      mdi-delete
                  </v-icon>
              </template>
              <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize"> Reset </v-btn>
              </template>
          </v-data-table>
      </VCard>
  </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from "axios";

export default {
  components: {
      AppLayout,
  },
  data: () => ({
      dialog: false,
      loading: false,
      dialogDelete: false,
      headers: [
          {
              title: "Property Name",
              align: "start",
              sortable: false,
              key: "property_name",
          },
          { title: "Address", key: "address" },
          { title: "Email", key: "email" },
          { title: "Phone Number", key: "phone" },

          // { title: "Website", key: "website" },
          { title: "Description", key: "description" },
          { title: "Landlord", key: "landlord.landlord_name" },
          { title: "Units", key: "number_of_units" },
          { title: "Actions", key: "actions", sortable: false },
      ],
      properties: [],
      landlords: [],
      editedIndex: -1,
      searchQuery: "",

      editedItem: {
          property_name: "",
          email: "",
          phone: "",
          description: "",
          number_of_units: "",
          address: "",
      },
      defaultItem: {
          property_name: "",
          email: "",
          phone: "",
          landlord_id: "",
          number_of_units: "",
          description: "",
      },
  }),
  computed: {
      formTitle() {
          return this.editedIndex === -1 ? "New Property" : "Edit Property";
      },
  },
  watch: {
      dialog(val) {
          val || this.close();
      },
      dialogDelete(val) {
          val || this.closeDelete();
      },
  },

  created() {
      this.initialize();
      this.fetchlandlord();
  },
  methods: {
      initialize() {
          const API_URL = "/property";
          axios
              .get(API_URL)
              .then((response) => {
                  console.log("API Response:", response.data);
                  this.properties = response.data;
              })
              .catch((error) => {
                  console.error("API Error:", error);
              });
      },
      editItem(item) {
          this.editedIndex = this.properties.indexOf(item);
          this.editedItem = Object.assign({}, item);
          this.dialog = true;
      },

      deleteItem(item) {
          this.editedIndex = this.properties.indexOf(item);
          this.editedItem = Object.assign({}, item);
          this.dialogDelete = true;
      },
      deleteItemConfirm() {
          axios
              .delete(`/property/${this.editedItem.id}`)
              .then(() => {
                  this.properties.splice(this.editedIndex, 1);
                  this.closeDelete();
              })
              .catch((error) => console.error("Deletion error:", error));
      },
      close() {
          this.dialog = false;
          this.resetForm();
      },

      closeDelete() {
          this.dialogDelete = false;
          this.resetForm();
      },
      resetForm() {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
      },
      save() {
          let request;
          if (this.editedIndex > -1) {
              request = axios.put(
                  `/property/${this.editedItem.id}`,
                  this.editedItem
              );
          } else {
              request = axios.post(`/property`, this.editedItem);
          }
          request
              .then((response) => {
                  if (this.editedIndex > -1) {
                      Object.assign(
                          this.properties[this.editedIndex],
                          response.data.data
                      );
                  } else {
                      this.properties.push(response.data.data);
                  }
                  this.close();
              })
              .catch((error) => console.error("Saving error:", error));

      },
      performSearch() {
          this.loading = true;
          const API_URL = "/property/search?query=" + this.searchQuery;
          axios
              .get(API_URL)
              .then((response) => {
                  console.log("Search response:", response.data);
                  this.properties = response.data;
                  this.loading = false;
              })
              .catch((error) => {
                  console.error("Search error:", error);
                  this.loading = false;
              });
      },
      fetchlandlord() {
          const API_URL = "/landlords";
          axios
              .get(API_URL)
              .then((response) => {
                  console.log("Landlords response:", response.data);
                  this.landlords = response.data; // Update landlords list with the search result
              })
              .catch((error) => {
                  console.error("failed to load landlords:", error);
              });
      },
  },
};
</script>

<style scoped>
.my-card {
  margin: 40px; /* Adjust the margin as needed */
}
</style>
