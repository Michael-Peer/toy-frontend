<template>
    <el-select v-model="value" placeholder="Select" @change="selectChanged">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
    </el-select>
</template>

<script>
export default {
    props: {
        optionsProp: {
            required: true,
        }
    },
    data() {
        return {
            options: [],
            value: "",
        };
    },
    created() {
        this.options = this.optionsProp;
    },
    methods: {
        selectChanged() {
            this.$emit("select-changed", this.value);
        },
    },
};
</script>