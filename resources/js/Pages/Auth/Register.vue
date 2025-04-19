<script setup>
import { ref, watch } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import '../../../css/tailwind.css';

// Password visibility toggles
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Password strength tracking
const passwordStrength = ref(0);
const passwordFeedback = ref('');

// Step tracking (multi-step form)
const currentStep = ref(1);
const totalSteps = 2;

// Form data
const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    user_type: 'Tenant', // Default to 'Tenant' for real estate focus
    phone_number: '',
    company_name: '',
    terms: false,
});

// Available account types
const userTypes = [
    // { title: 'Landlord', icon: 'mdi-home-city' },
    // { title: 'Property Manager', icon: 'mdi-clipboard-account' },
    // { title: 'Agent', icon: 'mdi-account-tie' },
    // { title: 'Company', icon: 'mdi-domain' }


    { title: 'Landlord', icon: 'mdi-home-city' },
    { title: 'Tenant', icon: 'mdi-clipboard-account' },
    { title: 'User', icon: 'mdi-account-tie' },
    { title: 'Company', icon: 'mdi-domain' }
];

// Password strength calculator
const calculatePasswordStrength = (password) => {
    if (!password) {
        passwordStrength.value = 0;
        passwordFeedback.value = '';
        return;
    }
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Character variety check
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    // Set the strength value (0-5)
    passwordStrength.value = Math.min(5, strength);
    
    // Set feedback based on strength
    if (strength < 2) {
        passwordFeedback.value = 'Weak password';
    } else if (strength < 4) {
        passwordFeedback.value = 'Moderate password';
    } else {
        passwordFeedback.value = 'Strong password';
    }
};

// Watch for password changes to calculate strength
watch(() => form.password, (newPassword) => {
    calculatePasswordStrength(newPassword);
});

// Form submission
const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

// Move to next step
const nextStep = () => {
    if (currentStep.value < totalSteps) {
        currentStep.value++;
    }
};

// Move to previous step
const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};

// Check if first step is valid
const isFirstStepValid = () => {
    return form.name && form.email && form.user_type;
};
</script>

<template>
    <Head title="PropertyPulse | Create Account" />
    
    <v-layout class="fill-height bg-grey-lighten-4">
        <v-row no-gutters class="fill-height">
            <!-- Left side with branding and value proposition -->
            <v-col cols="12" md="6" class="position-relative d-none d-md-block">
                <v-sheet color="primary" class="fill-height d-flex flex-column pa-10">
                    <!-- Logo and branding -->
                    <div class="mb-8">
                        <div class="d-flex align-center">
                            <v-icon color="secondary" icon="mdi-home-city" size="x-large" class="mr-3"></v-icon>
                            <span class="text-h4 font-weight-bold text-white">PropertyPulse</span>
                        </div>
                        <div class="text-subtitle-1 text-medium-emphasis mt-2">
                            Professional Rental Management System
                        </div>
                    </div>
                    
                    <!-- Main content area -->
                    <div class="d-flex flex-column justify-center flex-grow-1">
                        <h2 class="text-h3 text-white font-weight-bold mb-6">Manage Your Properties With Confidence</h2>
                        
                        <div class="mb-10">
                            <p class="text-h6 text-white-darken-2 mb-8">
                                Join thousands of property owners and managers who use PropertyPulse to streamline their rental business.
                            </p>
                            
                            <!-- Testimonial card -->
                            <v-card color="primary-darken-1" class="mb-6 pa-4 rounded-lg border border-white-opacity-25">
                                <v-card-text class="text-white pa-2">
                                    <div class="d-flex mb-4">
                                        <v-rating
                                            model-value="5"
                                            color="amber"
                                            density="compact"
                                            size="small"
                                            readonly
                                        ></v-rating>
                                    </div>
                                    <p class="text-body-1 font-italic mb-4">
                                        "PropertyPulse transformed how I manage my rental properties. The automated payments and maintenance tracking save me hours every week."
                                    </p>
                                    <div class="d-flex align-center">
                                        <v-avatar color="secondary" size="36" class="mr-3">
                                            <v-icon icon="mdi-account"></v-icon>
                                        </v-avatar>
                                        <div>
                                            <p class="text-body-2 font-weight-bold mb-0">David Reynolds</p>
                                            <p class="text-caption text-white-darken-1">Property Owner, 12 Units</p>
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                            
                            <!-- Feature list -->
                            <div class="mt-8">
                                <div class="d-flex align-center mb-4">
                                    <v-icon color="secondary" icon="mdi-check-circle" class="mr-3"></v-icon>
                                    <span class="text-white text-body-1">Streamlined rent collection & tracking</span>
                                </div>
                                <div class="d-flex align-center mb-4">
                                    <v-icon color="secondary" icon="mdi-check-circle" class="mr-3"></v-icon>
                                    <span class="text-white text-body-1">Digital lease management</span>
                                </div>
                                <div class="d-flex align-center mb-4">
                                    <v-icon color="secondary" icon="mdi-check-circle" class="mr-3"></v-icon>
                                    <span class="text-white text-body-1">Maintenance request system</span>
                                </div>
                                <div class="d-flex align-center">
                                    <v-icon color="secondary" icon="mdi-check-circle" class="mr-3"></v-icon>
                                    <span class="text-white text-body-1">Financial reporting & analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-sheet>
            </v-col>
            
            <!-- Right side with registration form -->
            <v-col cols="12" md="6">
                <v-container class="fill-height">
                    <v-row justify="center" align="center">
                        <v-col cols="12" sm="10" md="11" lg="9">
                            <!-- Mobile logo (shows only on small screens) -->
                            <div class="d-flex d-md-none justify-center mb-6 mt-4">
                                <div class="d-flex align-center">
                                    <v-icon color="primary" icon="mdi-home-city" size="large" class="mr-2"></v-icon>
                                    <span class="text-h5 font-weight-bold text-primary">PropertyPulse</span>
                                </div>
                            </div>
                            
                            <v-card class="mx-auto px-6 py-8 elevation-4 rounded-lg">
                                <!-- Form header -->
                                <div class="text-center mb-6">
                                    <h1 class="text-h4 text-primary font-weight-bold">Create Your Account</h1>
                                    <p class="text-body-1 text-medium-emphasis mt-1">
                                        Start managing your properties today
                                    </p>
                                </div>
                                
                                <!-- Progress indicator -->
                                <div class="mb-6">
                                    <v-progress-linear
                                        :model-value="(currentStep / totalSteps) * 100"
                                        color="primary"
                                        height="8"
                                        rounded
                                    ></v-progress-linear>
                                    <div class="d-flex justify-space-between mt-1">
                                        <span class="text-caption">Step {{ currentStep }} of {{ totalSteps }}</span>
                                        <span class="text-caption text-primary">{{ currentStep === 1 ? 'Basic Information' : 'Security & Confirmation' }}</span>
                                    </div>
                                </div>
                                
                                <form @submit.prevent="submit">
                                    <!-- Step 1: Basic Information -->
                                    <v-window v-model="currentStep">
                                        <v-window-item :value="1">
                                            <!-- Account Type Selection -->
                                            <div class="mb-4">
                                                <label class="text-subtitle-2 text-medium-emphasis mb-2 d-block">I am a...</label>
                                                <v-radio-group
                                                    v-model="form.user_type"
                                                    :inline="false"
                                                    hide-details
                                                >
                                                    <v-row>
                                                        <v-col v-for="type in userTypes" :key="type.title" cols="6">
                                                            <v-card
                                                                :color="form.user_type === type.title ? 'primary-lighten-5' : ''"
                                                                :variant="form.user_type === type.title ? 'outlined' : 'flat'"
                                                                class="pa-4 cursor-pointer"
                                                                @click="form.user_type = type.title"
                                                                hover
                                                            >
                                                                <div class="d-flex align-center">
                                                                    <v-icon :icon="type.icon" :color="form.user_type === type.title ? 'primary' : ''" size="large" class="mr-2"></v-icon>
                                                                    <v-radio
                                                                        :label="type.title"
                                                                        :value="type.title"
                                                                        color="primary"
                                                                        density="compact"
                                                                        hide-details
                                                                    ></v-radio>
                                                                </div>
                                                            </v-card>
                                                        </v-col>
                                                    </v-row>
                                                </v-radio-group>
                                                <InputError class="mt-1" :message="form.errors.user_type" />
                                            </div>
                                            
                                            <!-- Full Name Field -->
                                            <v-text-field
                                                id="name"
                                                v-model="form.name"
                                                label="Full Name"
                                                type="text"
                                                variant="outlined"
                                                prepend-inner-icon="mdi-account"
                                                :error-messages="form.errors.name"
                                                required
                                                autofocus
                                                autocomplete="name"
                                                density="comfortable"
                                                class="mb-4"
                                            ></v-text-field>
                                            
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
                                                autocomplete="username"
                                                density="comfortable"
                                                class="mb-4"
                                            ></v-text-field>
                                            
                                            <!-- Phone Number Field -->
                                            <v-text-field
                                                id="phone_number"
                                                v-model="form.phone_number"
                                                label="Phone Number"
                                                type="tel"
                                                variant="outlined"
                                                prepend-inner-icon="mdi-phone-outline"
                                                :error-messages="form.errors.phone_number"
                                                density="comfortable"
                                                class="mb-4"
                                            ></v-text-field>
                                            
                                            <!-- Company Name Field - Only show for Company type -->
                                            <v-text-field
                                                v-if="form.user_type === 'Company'"
                                                id="company_name"
                                                v-model="form.company_name"
                                                label="Company Name"
                                                type="text"
                                                variant="outlined"
                                                prepend-inner-icon="mdi-domain"
                                                :error-messages="form.errors.company_name"
                                                density="comfortable"
                                                class="mb-4"
                                            ></v-text-field>
                                            
                                            <!-- Next Button -->
                                            <v-btn
                                                block
                                                color="primary"
                                                size="large"
                                                class="mt-4"
                                                :disabled="!isFirstStepValid()"
                                                @click="nextStep"
                                            >
                                                Continue
                                                <v-icon end icon="mdi-arrow-right" class="ml-1"></v-icon>
                                            </v-btn>
                                        </v-window-item>
                                        
                                        <!-- Step 2: Password and Confirmation -->
                                        <v-window-item :value="2">
                                            <!-- Password Field -->
                                            <v-text-field
                                                id="password"
                                                v-model="form.password"
                                                label="Create Password"
                                                :type="showPassword ? 'text' : 'password'"
                                                variant="outlined"
                                                prepend-inner-icon="mdi-lock-outline"
                                                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                                @click:append-inner="showPassword = !showPassword"
                                                :error-messages="form.errors.password"
                                                required
                                                autocomplete="new-password"
                                                density="comfortable"
                                                class="mb-2"
                                            ></v-text-field>
                                            
                                            <!-- Password Strength Indicator -->
                                            <div class="mb-4">
                                                <v-progress-linear
                                                    :model-value="passwordStrength * 20"
                                                    :color="passwordStrength < 2 ? 'error' : passwordStrength < 4 ? 'warning' : 'success'"
                                                    height="8"
                                                    rounded
                                                ></v-progress-linear>
                                                <div class="d-flex justify-space-between mt-1">
                                                    <small class="text-caption text-medium-emphasis">Password strength</small>
                                                    <small 
                                                        :class="{
                                                            'text-error': passwordStrength < 2,
                                                            'text-warning': passwordStrength >= 2 && passwordStrength < 4,
                                                            'text-success': passwordStrength >= 4
                                                        }"
                                                    >{{ passwordFeedback }}</small>
                                                </div>
                                            </div>
                                            
                                            <!-- Password Requirements Hint -->
                                            <v-alert
                                                v-if="form.password"
                                                density="comfortable"
                                                type="info"
                                                variant="tonal"
                                                class="mb-4"
                                            >
                                                <div class="text-caption">
                                                    <div class="font-weight-bold mb-1">Strong password should include:</div>
                                                    <div class="d-flex align-center mb-1">
                                                        <v-icon size="x-small" :color="form.password.length >= 8 ? 'success' : ''" class="mr-2">
                                                            {{ form.password.length >= 8 ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                                                        </v-icon>
                                                        At least 8 characters
                                                    </div>
                                                    <div class="d-flex align-center mb-1">
                                                        <v-icon size="x-small" :color="/[A-Z]/.test(form.password) ? 'success' : ''" class="mr-2">
                                                            {{ /[A-Z]/.test(form.password) ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                                                        </v-icon>
                                                        Uppercase letters
                                                    </div>
                                                    <div class="d-flex align-center mb-1">
                                                        <v-icon size="x-small" :color="/[0-9]/.test(form.password) ? 'success' : ''" class="mr-2">
                                                            {{ /[0-9]/.test(form.password) ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                                                        </v-icon>
                                                        Numbers
                                                    </div>
                                                    <div class="d-flex align-center">
                                                        <v-icon size="x-small" :color="/[^A-Za-z0-9]/.test(form.password) ? 'success' : ''" class="mr-2">
                                                            {{ /[^A-Za-z0-9]/.test(form.password) ? 'mdi-check-circle' : 'mdi-circle-outline' }}
                                                        </v-icon>
                                                        Special characters
                                                    </div>
                                                </div>
                                            </v-alert>
                                            
                                            <!-- Confirm Password Field -->
                                            <v-text-field
                                                id="password_confirmation"
                                                v-model="form.password_confirmation"
                                                label="Confirm Password"
                                                :type="showConfirmPassword ? 'text' : 'password'"
                                                variant="outlined"
                                                prepend-inner-icon="mdi-lock-check"
                                                :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                                @click:append-inner="showConfirmPassword = !showConfirmPassword"
                                                :error-messages="form.errors.password_confirmation"
                                                required
                                                autocomplete="new-password"
                                                density="comfortable"
                                                class="mb-4"
                                            ></v-text-field>
                                            
                                            <!-- Terms and Conditions -->
                                            <v-checkbox
                                                v-model="form.terms"
                                                color="primary"
                                                :error-messages="form.errors.terms"
                                                class="mb-4"
                                                hide-details
                                            >
                                                <template v-slot:label>
                                                    <div>
                                                        I agree to the 
                                                        <a href="#" class="text-decoration-none text-primary">Terms of Service</a> and 
                                                        <a href="#" class="text-decoration-none text-primary">Privacy Policy</a>
                                                    </div>
                                                </template>
                                            </v-checkbox>
                                            
                                            <!-- Action Buttons -->
                                            <div class="d-flex gap-4 mt-6">
                                                <v-btn
                                                    variant="outlined"
                                                    size="large"
                                                    width="120"
                                                    @click="prevStep"
                                                >
                                                    <v-icon start icon="mdi-arrow-left" class="mr-1"></v-icon>
                                                    Back
                                                </v-btn>
                                                
                                                <v-btn
                                                    block
                                                    color="primary"
                                                    size="large"
                                                    :loading="form.processing"
                                                    :disabled="form.processing || !form.password || !form.password_confirmation || !form.terms"
                                                    type="submit"
                                                >
                                                    Create Account
                                                    <v-icon end icon="mdi-check" class="ml-1"></v-icon>
                                                </v-btn>
                                            </div>
                                        </v-window-item>
                                    </v-window>
                                </form>
                                
                                <!-- Login Link -->
                                <div class="text-center mt-6">
                                    <span class="text-medium-emphasis">Already have an account?</span>
                                    <Link
                                        :href="route('login')"
                                        class="text-decoration-none font-weight-bold text-primary ml-2"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            </v-card>
                            
                            <!-- Trust indicators -->
                            <div class="d-flex flex-column align-center justify-center mt-6">
                                <div class="d-flex align-center justify-center mb-2">
                                    <v-icon icon="mdi-shield-check" color="primary" size="small" class="mr-2"></v-icon>
                                    <span class="text-caption text-medium-emphasis">Secure & Encrypted</span>
                                    <v-divider vertical class="mx-3" style="height: 12px;"></v-divider>
                                    <v-icon icon="mdi-check-decagram" color="primary" size="small" class="mr-2"></v-icon>
                                    <span class="text-caption text-medium-emphasis">GDPR Compliant</span>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-layout>
</template>