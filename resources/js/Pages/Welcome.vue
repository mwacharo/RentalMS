<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />
    <div class="landing-page">
        <v-container>
            <v-row>
                <v-col>
                    <!-- Header section -->
                    <div class="header">
                        <!-- Logo and social media icons -->
                        <img
                            src="/path/to/your/logo.png"
                            alt="Logo"
                            class="logo"
                        />
                        <div class="social-icons">
                            <a href="#" class="social-icon">
                                <i class="mdi mdi-facebook"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="mdi mdi-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="mdi mdi-instagram"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="mdi mdi-whatsapp"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="mdi mdi-telegram"></i>
                            </a>
                        </div>

                        <!-- Navigation links -->
                        <nav class="navigation">
                            <router-link to="/" class="nav-link"
                                >Home</router-link
                            >
                            <router-link to="/about" class="nav-link"
                                >About Us</router-link
                            >
                            <router-link to="/products" class="nav-link"
                                >Products</router-link
                            >
                            <router-link to="/services" class="nav-link"
                                >Services</router-link
                            >
                            <router-link to="/contact" class="nav-link"
                                >Contact Us</router-link
                            >
                        </nav>
                        <!-- Call to action section -->
                        <div v-if="canLogin" class="cta-buttons">
                            <Link
                                v-if="$page.props.auth.user"
                                :href="route('dashboard')"
                                class="dashboard-btn"
                                >Go to Dashboard</Link
                            >
                            <template v-else>
                                <div class="justify-end"></div>
                                <Link :href="route('login')" class="login-btn"
                                    >Log in</Link
                                >
                                <Link
                                    v-if="canRegister"
                                    :href="route('register')"
                                    class="register-btn"
                                    >Register</Link
                                >
                            </template>
                        </div>

                        <!-- Title of the landing page -->
                        <h1 class="title">
                            Welcome to Rental Management System
                        </h1>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <!-- end of heder  -->

        <div class="features-section">
            <div class="feature">
                <img
                    src="/path/to/feature1-icon.png"
                    alt="Feature 1"
                    class="feature-icon"
                />
                <h2 class="feature-title">Find Your Ideal Property</h2>
                <p class="feature-description">
                    Discover a variety of rental options tailored to your needs.
                </p>
            </div>

            <div class="feature">
                <img
                    src="/path/to/feature2-icon.png"
                    alt="Feature 2"
                    class="feature-icon"
                />
                <h2 class="feature-title">Effortless Property Management</h2>
                <p class="feature-description">
                    Streamline your property management tasks with our
                    user-friendly tools.
                </p>
            </div>

            <div class="feature">
                <img
                    src="/path/to/feature3-icon.png"
                    alt="Feature 3"
                    class="feature-icon"
                />
                <h2 class="feature-title">Connect with Reliable Tenants</h2>
                <p class="feature-description">
                    Build a trustworthy relationship with tenants looking for
                    their next home.
                </p>
            </div>
        </div>

        <div class="footer">
            <p>
                &copy; 2024 Your Rental Management System. All rights reserved.
            </p>
        </div>
    </div>
</template>

<style scoped>
.landing-page {
    background-color: #008000;
    color: black;
    padding: 20px;
}

.header {
    text-align: center;
}

.logo {
    max-width: 150px;
}

.title {
    font-size: 2rem;
}

.tagline {
    font-size: 1.2rem;
}

.cta-section {
    text-align: center;
    margin: 20px 0;
}

.cta-buttons {
    display: flex;
    justify-content: center;
}

.login-btn,
.register-btn,
.dashboard-btn {
    padding: 10px 20px;
    margin: 0 10px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
}

.login-btn {
    background-color: white;
}

.register-btn {
    background-color: white;
    color: black;
}

.dashboard-btn {
    background-color: black;
    border: 2px solid white;
}

.features-section {
    display: flex;
    justify-content: space-around;
    margin: 40px 0;
}

.feature {
    text-align: center;
}

.feature-icon {
    max-width: 80px;
    margin-bottom: 10px;
}

.feature-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.feature-description {
    font-size: 1.2rem;
}

.footer {
    text-align: center;
    margin-top: 20px;
    font-size: 1rem;
}
</style>



 