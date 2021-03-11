<template>
    <section v-if="toy">
        <h1>{{ toy.name }}</h1>
        <h2>createdAt: {{ toy.createdAt }}</h2>

        <form @submit.prevent="addReview">
            <el-input
                type="text"
                placeholder="Add your review...."
                v-model="review.txt"
            ></el-input>
            <el-button>Add</el-button>
        </form>

        <ul v-if="toy.reviews">
            <li  v-for="review in toy.reviews" :key="review.id">
                {{review.username}} --- {{review.txt}}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            toy: null,
            review: {},
        };
    },
    methods: {
        loadToy() {
            const id = this.$route.params.toyId;
            this.$store.dispatch({ type: "getById", id }).then((toy) => {
                console.log("here", toy);
                this.toy = toy;
                console.log(toy);
            });
        },
        addReview() {
            console.log("here add review");
            this.review.username = this.$store.getters.username;
            this.$store.dispatch({
                type: "addReview",
                review: this.review,
                toy: this.toy,
            });
        },
    },
    watch: {
        "$route.params.toyId"(id) {
            this.loadToy();
        },
    },
    created() {
        this.loadToy();
    },
};
</script>