<script setup>
import { Head, Link } from "@inertiajs/vue3";

import {
                        FwbNavbar,
                        FwbNavbarCollapse,
                        FwbNavbarLink,
                        FwbNavbarLogo,
                    } from "flowbite-vue";
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <v-app>
        <Head title="Welcome" />

        <div class="landing-page">
            <header class="header">
                <!-- links for ,home, about us ,services contact us, -->
                <img src="/path/to/your/logo.png" alt="Logo" class="logo" />
                <h1 class="title">Rental Management System</h1>

                <nav class="navbar">
                    <ul>
                        <Link :href="home" class="nav-link">Home</Link>
                        <Link :href="about" class="nav-link">About Us</Link>
                        <Link :href="services" class="nav-link">Services</Link>
                        <Link :href="pricing" class="nav-link">Pricing</Link>
                        <Link :href="contact" class="nav-link">Contact Us</Link>
                    </ul>
                </nav>

            

             
            </header>

            <div v-if="canLogin" class="cta-buttons">
                <Link
                    v-if="$page.props.auth.user"
                    :href="route('dashboard')"
                    class="dashboard-btn"
                    >Go to Dashboard</Link
                >
                <template v-else>
                    <Link :href="route('login')" class="login-btn">Log in</Link>
                    <Link
                        v-if="canRegister"
                        :href="route('register')"
                        class="register-btn"
                        >Register</Link
                    >
                </template>
            </div>
        </div>

        <v-card>
            <v-row>
                <v-col>
                    <div class="feature">
                        <h2 class="feature-title">
                            Revolutionizing Property Management
                        </h2>
                        <p class="feature-description">
                            Welcome to Rental Management System , solution for
                            efficient property management,. Whether you're a
                            landlord, property manager, or real estate
                            investoror looking fOR our software streamlines
                            every aspect of managing your properties, saving you
                            time, money, and hassle. With Rental Management
                            software, you can effortlessly handle tasks like
                            tenant communication, rent collection, maintenance
                            requests, and financial tracking, all from one
                            intuitive platform. Addionally we connect tenants
                            with best properties to rent.
                        </p>
                    </div></v-col
                >

                <v-col>
                    <div class="feature">
                        <h2 class="feature-title">Request Demo</h2>
                    </div>
                </v-col>
            </v-row>
        </v-card>

        <v-card>
            <section class="features-section">
                <div class="feature">
                    <img
                        src="/path/to/feature1-icon.png"
                        alt="Feature 1"
                        class="feature-icon"
                    />
                    <h2 class="feature-title">Find Your Ideal Property</h2>
                    <p class="feature-description">
                        Discover a variety of rental options tailored to your
                        needs.
                    </p>
                </div>
            </section>
        </v-card>

        <v-card>
            <section class="features-section">
                <div class="feature">
                    <img
                        src="/path/to/feature2-icon.png"
                        alt="Feature 2"
                        class="feature-icon"
                    />
                    <h2 class="feature-title">
                        Effortless Property Management
                    </h2>
                    <p class="feature-description">
                        Streamline your property management tasks with our
                        user-friendly tools.
                    </p>
                </div>
            </section>
        </v-card>

        <v-card>
            <section class="features-section">
                <div class="feature">
                    <img
                        src="/path/to/feature3-icon.png"
                        alt="Feature 3"
                        class="feature-icon"
                    />
                    <h2 class="feature-title">Connect with Reliable Tenants</h2>
                    <p class="feature-description">
                        Build a trustworthy relationship with tenants looking
                        for their next home.
                    </p>
                </div>
            </section>
        </v-card>

        <section>
            <footer class="footer">
                <p>
                    &copy; 2024 Solssa Rental Management System. All rights
                    reserved.
                </p>
            </footer>
        </section>
    </v-app>
</template>

<style scoped>
.navbar ul {
    list-style-type: none;
    display: flex; /* Aligns items in a row */
    justify-content: flex-start; /* Align items to the start of the container */
    align-items: center; /* Vertically aligns items in their containers */
    padding: 0; /* Removes default padding */
    margin: 0; /* Removes default margin */
}

.nav-button {
    display: inline-block;
    padding: 10px 20px;
    margin-right: 30px; /* Adds space to the right of each button */
    background-color: #4caf50; /* Example green background */
    color: white; /* White text */
    text-decoration: none;
    border: none;
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.3s; /* Smooth background transition */
    font-size: 1rem;
}

/* Target all .nav-button elements except the last one */
.nav-button:not(:last-child) {
    margin-right: 30px; /* Adjust this value to control the spacing */
}

.nav-button:hover {
    background-color: #45a049; /* Darker shade on hover */
}

.landing-page {
    /* #OA84FF */
    background-color: green;
    color: white;
    padding: 20px;
}

.header {
    text-align: left;
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
.features-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.cta-section {
    text-align: center;
    margin: 20px 0;
}

.cta-buttons {
    display: flex;
    justify-content: right;
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
    margin: 100px 0;
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
    margin-bottom: 20px;

    font-size: 1rem;
}
</style>
