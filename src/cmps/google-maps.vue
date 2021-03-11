<template>
    <section class="map-container">
        <GmapMap
            :center="center"
            :zoom="14"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
        >
            <GmapMarker
                :key="index"
                v-for="(branch, index) in branches"
                :position="branch.position"
                :clickable="true"
                :draggable="true"
                @click="center = branch.position"
            />
        </GmapMap>
        <div class="map-buttons">
        <el-button
            v-for="branch in branches"
            :key="branch.position.lat"
            type="primary"
            icon="el-icon-location"
            @click="goToLocation(branch)" >
            {{ branch.city }}
        </el-button>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {
            center: { lat: 52.378688, lng: 4.900504 },
            branches: [
                {
                    city: "Amsterdam",
                    position: {
                        lat: 52.378688,
                        lng: 4.900504,
                    },
                },
                {
                    city: "Utrecht",
                    position: {
                        lat: 52.092876,
                        lng: 5.10448,
                    },
                },
                {
                    city: "Tel Aviv",
                    position: {
                        lat: 32.109333,
                        lng: 34.855499,
                    },
                },
            ],
        };
    },
    methods: {
        goToLocation(branch) {
            this.center = branch.position;
        },
    },
};
</script>

<style>

</style>