<template>
    <section>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form v-if="toy" @submit.prevent="handleSubmit(save)">
                <ValidationProvider
                    name="name"
                    rules="required"
                    v-slot="{ errors }"
                >
                    <input type="text" placeholder="Name" v-model="toy.name" />
                    <p>{{ errors[0] }}</p>
                </ValidationProvider>

                <ValidationProvider
                    name="price"
                    rules="required"
                    v-slot="{ errors }"
                >
                    <input
                        type="number"
                        placeholder="Price"
                        v-model="toy.price"
                    />
                    <p>{{ errors[0] }}</p>
                </ValidationProvider>

                <ValidationProvider
                    name="type"
                    rules="required"
                    v-slot="{ errors }"
                >
                    <input type="text" placeholder="Type" v-model="toy.type" />
                    <p>{{ errors[0] }}</p>
                </ValidationProvider>

                <label>
                    In Stock?
                    <input type="checkbox" v-model="toy.inStock" />
                </label>
                <button>Save</button>
            </form>
        </ValidationObserver>
    </section>
</template>


<script>
import { extend } from "vee-validate";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";

import { toyService } from "../services/toy.service.js";

extend("required", {
    ...required,
    message: "Required field",
});

export default {
    data() {
        return {
            toy: null,
        };
    },
    methods: {
        save() {
            //copy
            const toy = JSON.parse(JSON.stringify(this.toy));
            this.$store.dispatch({ type: "saveToy", toy }).then(() => {
                this.$router.push("/");
            });
        },
    },
    computed: {
        toyId() {
            //check if there is id in the query param
            return this.$route.params.toyId;
        },
    },
    created() {
        if (this.toyId) {
            //edit
            this.$store
                .dispatch({ type: "getById", id: this.toyId })
                .then((toy) => (this.toy = toy));
        } else {
            //add
            this.toy = toyService.getEmptyToy();
        }
    },
    components: {
        ValidationProvider,
        ValidationObserver,
    },
};
</script>