<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome"/>

    <div class="landing-page">
        <div class="header">
            <img src="/path/to/your/logo.png" alt="Logo" class="logo" />
            <h1 class="title">Welcome to Your Rental Management System</h1>
            <p class="tagline">Efficient. Seamless. Hassle-free.</p>
        </div>

        <div class="cta-section">
            <div v-if="canLogin" class="cta-buttons">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="dashboard-btn">Go to Dashboard</Link>
                <template v-else>
                    <Link :href="route('login')" class="login-btn">Log in</Link>
                    <Link v-if="canRegister" :href="route('register')" class="register-btn">Register</Link>
                </template>
            </div>
        </div>

        <div class="features-section">
            <div class="feature">
                <img src="/path/to/feature1-icon.png" alt="Feature 1" class="feature-icon" />
                <h2 class="feature-title">Find Your Ideal Property</h2>
                <p class="feature-description">Discover a variety of rental options tailored to your needs.</p>
            </div>

            <div class="feature">
                <img src="/path/to/feature2-icon.png" alt="Feature 2" class="feature-icon" />
                <h2 class="feature-title">Effortless Property Management</h2>
                <p class="feature-description">Streamline your property management tasks with our user-friendly tools.</p>
            </div>

            <div class="feature">
                <img src="/path/to/feature3-icon.png" alt="Feature 3" class="feature-icon" />
                <h2 class="feature-title">Connect with Reliable Tenants</h2>
                <p class="feature-description">Build a trustworthy relationship with tenants looking for their next home.</p>
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2024 Your Rental Management System. All rights reserved.</p>
        </div>
    </div>
</template>

<style scoped>
.landing-page {
    background-color: black;
    color: white;
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



