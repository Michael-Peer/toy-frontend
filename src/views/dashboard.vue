<template>
    <section v-if="toys" class="chart-container">
        <div class="average-container">
            <h1>Average</h1>
            <type-chart :toys="toys" />
        </div>

        <div class="inventory-container">
            <h1>Inventory</h1>
            <inventory-chart :toys="toys" />
        </div>
    </section>
</template>

<script>
import typeChart from "../cmps/typeChart";
import inventoryChart from "../cmps/inventoryChart";
export default {
    data() {
        return {
            toys: null,
        };
    },
    created() {
        this.toys = JSON.parse(JSON.stringify(this.toysFromStore));
        console.log(this.toys, "dashboard toys");
    },
    computed: {
        toysFromStore() {
            return this.$store.getters.toys;
        },
    },
    components: {
        typeChart,
        inventoryChart,
    },
};
</script>

<style >

</style>

