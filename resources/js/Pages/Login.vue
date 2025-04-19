<script setup>
import { ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import InputError from '@/Components/InputError.vue';

defineProps({
  canResetPassword: Boolean,
  status: String,
});

const showPassword = ref(false);
const form = useForm({
  email: '',
  password: '',
  user_type: 'Landlord',
  remember: false,
});

const userTypes = ['Landlord', 'Property Manager', 'Agent', 'Admin'];

const submit = () => {
  form.transform((data) => ({
    ...data,
    remember: form.remember ? 'on' : '',
  })).post(route('login'), {
    onFinish: () => form.reset('password'),
  });
};
</script>

<template>
  <Head title="PropertyPulse | Login" />
  
  <v-layout class="fill-height">
    <v-row no-gutters class="fill-height">
      <!-- Left side with image and branding -->
      <v-col cols="12" md="6" class="position-relative d-none d-md-block">
        <v-sheet color="primary" class="fill-height d-flex flex-column justify-start pa-8">
          <!-- Logo and branding -->
          <div class="mb-12">
            <div class="d-flex align-center">
              <v-icon color="secondary" icon="mdi-home-city" size="x-large" class="mr-3"></v-icon>
              <span class="text-h4 font-weight-bold text-white">PropertyPulse</span>
            </div>
            <div class="text-subtitle-1 text-medium-emphasis mt-2">
              Professional Rental Management System
            </div>
          </div>
          
          <!-- Image container -->
          <div class="flex-grow-1 d-flex align-center justify-center">
            <v-img
              src="/api/placeholder/600/400"
              alt="Real Estate Management"
              cover
              class="rounded-lg elevation-10"
              max-height="500"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height" align="center" justify="center">
                  <v-progress-circular indeterminate color="secondary"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
          
          <!-- Feature badges -->
          <div class="mt-12 d-flex justify-space-between">
            <v-chip color="secondary" class="mr-2">Easy Rent Collection</v-chip>
            <v-chip color="secondary" class="mr-2">Maintenance Tracking</v-chip>
            <v-chip color="secondary">Financial Reports</v-chip>
          </div>
        </v-sheet>
      </v-col>
      
      <!-- Right side with login form -->
      <v-col cols="12" md="6">
        <v-container class="fill-height">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="10" lg="8">
              <v-card class="mx-auto px-6 py-8 elevation-10 rounded-lg">
                <!-- Mobile logo (shows only on small screens) -->
                <div class="d-flex d-md-none justify-center mb-6">
                  <div class="d-flex align-center">
                    <v-icon color="primary" icon="mdi-home-city" size="large" class="mr-2"></v-icon>
                    <span class="text-h5 font-weight-bold text-primary">PropertyPulse</span>
                  </div>
                </div>
                
                <!-- Login form title -->
                <div class="text-center mb-6">
                  <h1 class="text-h4 text-primary font-weight-bold">Welcome Back</h1>
                  <p class="text-body-1 text-medium-emphasis">Sign in to your account to continue</p>
                </div>
                
                <div v-if="status" class="mb-4 text-success text-center">
                  {{ status }}
                </div>
                
                <form @submit.prevent="submit">
                  <!-- User Type Selection -->
                  <v-select
                    v-model="form.user_type"
                    :items="userTypes"
                    label="I am a..."
                    variant="outlined"
                    prepend-inner-icon="mdi-account-group"
                    class="mb-4"
                    density="comfortable"
                  ></v-select>
                  
                  <!-- Email Field -->
                  <v-text-field
                    id="email"
                    v-model="form.email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    prepend-inner-icon="mdi-email-outline"
                    :error-messages="form.errors.email"
                    required
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                  
                  <!-- Password Field -->
                  <v-text-field
                    id="password"
                    v-model="form.password"
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    variant="outlined"
                    prepend-inner-icon="mdi-lock-outline"
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword"
                    :error-messages="form.errors.password"
                    required
                    density="comfortable"
                    class="mb-2"
                  ></v-text-field>
                  
                  <!-- Remember Me & Forgot Password -->
                  <div class="d-flex align-center justify-space-between mb-6">
                    <v-checkbox
                      v-model="form.remember"
                      label="Remember me"
                      color="primary"
                      hide-details
                      density="compact"
                    ></v-checkbox>
                    
                    <Link
                      v-if="canResetPassword"
                      :href="route('password.request')"
                      class="text-decoration-none text-primary"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  
                  <!-- Login Button -->
                  <v-btn
                    block
                    color="primary"
                    size="large"
                    :loading="form.processing"
                    :disabled="form.processing"
                    type="submit"
                    class="mb-4"
                  >
                    Sign In
                    <v-icon end icon="mdi-login" class="ml-1"></v-icon>
                  </v-btn>
                  
                  <!-- Sign Up Link -->
                  <div class="text-center">
                    <span class="text-medium-emphasis">Don't have an account?</span>
                    <Link
                      :href="route('register')"
                      class="text-decoration-none font-weight-bold text-primary ml-2"
                    >
                      Sign up now
                    </Link>
                  </div>
                </form>
              </v-card>
              
              <!-- Additional information -->
              <v-card class="mt-4 bg-grey-lighten-4" variant="flat" border>
                <v-card-text class="text-center">
                  <p class="text-caption text-medium-emphasis mb-0">
                    By logging in, you agree to our 
                    <a href="#" class="text-decoration-none text-primary">Terms of Service</a> and 
                    <a href="#" class="text-decoration-none text-primary">Privacy Policy</a>
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-layout>
</template>
<!-- <style scoped>
.my-card {
    margin: 200px; /* Adjust the margin as needed */
}
</style> -->
