<template>
    <ul class="toy-list card-grid">
        <el-card v-for="toy in toys" :key="toy._id" class="box-card">
            <toy-preview :toy="toy" />
            <card-buttons v-if="$store.getters.isAdmin" :toy="toy" @remove="remove" />
        </el-card>
    </ul>
</template>

<script>
import cardButtons from "./cardButtons.vue";
import toyPreview from "./toyPreview.vue";

export default {
    props: {
        toys: {
            required: true,
        },
    },
    methods: {
        remove(toyId) {
            this.$emit("remove", toyId);
        },
    },
    components: {
        toyPreview,
        cardButtons,
    },
    created() {
        console.log(this.$store.getters.isAdmin)
    }
};
</script>

<style>
</style>