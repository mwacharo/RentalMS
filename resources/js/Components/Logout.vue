<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" location="top">
      <template v-slot:activator="{ props }">
        <v-btn color="indigo" v-bind="props">
          <v-icon left>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card min-width="300">
        <v-divider></v-divider>

        <v-list>
          <div>
          <div class="font-medium text-base text-gray-800">
          {{ $page.props.auth.user.name }}
            </div>
          <div class="font-medium text-sm text-gray-500">
             {{ $page.props.auth.user.email }}
                  </div>
              </div>

              
    
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn variant="text" @click="menu = false">Close</v-btn>

          <!-- Authentication -->
          <form method="POST" @submit.prevent="logout">
            <v-btn color="primary" variant="text" type="submit">
              <v-icon left>mdi-exit-to-app</v-icon>
              Sign out
            </v-btn>
          </form>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script >
import { Inertia } from "@inertiajs/inertia";

const logout = () => {
  Inertia.post(route('logout'));
};

export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  methods: {
    logout,
  },
};
</script>


