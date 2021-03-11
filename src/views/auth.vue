<template>
    <section>
        <h1>Login</h1>
        <form class="login-form" @submit.prevent="login">
            <el-input
                type="text"
                placeholder="Username"
                v-model="loginUser.username"
            ></el-input>
            <el-input
                type="password"
                v-model="loginUser.password"
                placeholder="Password"
            ></el-input>
                        <button>Login</button>
        </form>

        <h1>Signup</h1>
        <form @submit.prevent="signup">
            <el-input
                type="text"
                placeholder="Fullname"
                v-model="signUpUser.fullname"
            ></el-input>
            <el-input
                type="text"
                placeholder="Username"
                v-model="signUpUser.username"
            ></el-input>
            <el-input
                type="password"
                v-model="signUpUser.password"
                placeholder="Password"
            ></el-input>
            <button>Signup</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            loginUser: {
                username: "",
                password: "",
            },
            signUpUser: {
                username: "",
                password: "",
                fullname: "",
                isAdmin: false,
            },
        };
    },
    methods: {
        login() {
            this.$store.dispatch({ type: "loginUser", user:  this.loginUser });
        },
        signup() {
            this.$store.dispatch({ type: "signupUser", user: this.signUpUser });
        },
    },
};
</script>

<style>
.login-form {
    margin-bottom: 2rem;
}
</style>

