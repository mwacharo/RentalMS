<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,

});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in" />
    
    
    <AuthenticationCard>
      <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
      </div>
      <form @submit.prevent="submit">

    <!-- <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      > -->

        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
        id="email"
        v-model="form.email"
        type="email"
        required        
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
        <InputError class="mt-2" :message="form.errors.email" />

  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
        
          required

           
            <Link v-if="canResetPassword" :href="route('password.request')" class="text-caption text-decoration-none text-blue hover:underline">
                 Forgot login password?
         </Link>
            
        </div>
  
        <v-text-field
        id="password"
        v-model="form.password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <InputError class="mt-2" :message="form.errors.password" />



        <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card>
  
        <v-btn
          block
         class="mb-8"
         color="blue"
         size="large"
         variant="tonal"
         :disabled="form.processing"
         :class="{ 'opacity-25': form.processing }"
         @click="submit"

         
          >
                Log In
        </v-btn>   

        
  
        <v-card-text class="text-center">
<!--        
          <Link :href="route('register')" class="text-caption text-decoration-none text-blue hover:underline">
           Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
           </Link> -->

        </v-card-text>
   
      <!-- </v-card> -->
    </form>
    </AuthenticationCard> 

 
</template>


