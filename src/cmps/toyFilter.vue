<template>
    <section class="toy-filter">
        <!-- <input
            type="text"
            @input="setFilter"
            placeholder="Search...."
            v-model="filterBy.txt"
        /> -->
        <el-input
        class="search-input"
            type="text"
            @input="setFilter"
            placeholder="Search...."
            v-model="filterBy.txt"
        ></el-input>
        <my-select @select-changed="setFilter" :optionsProp="selectOptions" />
        <!-- <select @change="setFilter" v-model="filterBy.inStockState">
            <option value="all">All</option>
            <option value="inStock">In stock</option>
            <option value="notInStock">Not in stock</option>
        </select> -->
    </section>
</template>


<script>
import mySelect from "./select";

export default {
    data() {
        return {
            filterBy: {
                txt: "",
                inStockState: "all",
            },
            selectOptions: [
                {
                    value: "all",
                    lavel: "All",
                },
                {
                    value: "inStock",
                    lavel: "In stock",
                },
                {
                    value: "notInStock",
                    lavel: "Not in stock",
                },
            ],
        };
    },
    methods: {
        setFilter(selectVal) {
            this.filterBy.inStockState = selectVal;
            this.$emit("filtered", this.filterBy);
        },
    },
    components: { mySelect },
};
</script>