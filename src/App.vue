<template>
    <div class="main-layout">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/dashboard">Dashboard</router-link> |
            <router-link to="/auth">Auth</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch({ type: "loadToys" });
    },
};
</script>


