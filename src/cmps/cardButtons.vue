<template>
    <div class="toy-card-button">
        <el-button>
            <router-link :to="'/toy/' + toy._id">Details</router-link>
        </el-button>
        <el-button>
            <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
        </el-button>
        <el-button @click="remove(toy._id)">Delete</el-button>
    </div>
</template>

<script>
export default {
    props: {
        toy: {
            required: true,
        },
    },
    methods: {
        remove(toyId) {
            this.$emit("remove", toyId);
        },
    },
    created() {
        console.log('created')
    }
};
</script>
