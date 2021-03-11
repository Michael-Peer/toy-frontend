<template>
    <div v-if="toys" class="home">
        <h1>Toy App</h1>

        <!-- <popUp class="popup">
            <template #header>
                <h1>Header</h1>
            </template>
            <template #default>
                <p v-for="msg in msgs" :key="msg._id">{{ msg.txt }}</p>
            </template>
            <template #footer>
                <input type="text" placeholder="Message..." v-model="msg" />
                <button @click="sendMsg">Send</button>
            </template>
        </popUp> -->

        <toy-filter @filtered="setFilter" />
        <router-link to="/toy/edit">Add Toy</router-link>
        <toy-list :toys="toys" @remove="remove" />
    </div>
</template>

<script>
import toyList from "../cmps/toyList.vue";
import toyFilter from "../cmps/toyFilter.vue";
import popUp from "../cmps/popUp.vue";

import { utilService } from "../services/util.service.js";

export default {
    name: "home",
    data() {
        return {
            msg: "",
            msgs: [
                {
                    _id: utilService.makeId(),
                    txt: "How you doin'?",
                },
            ],
        };
    },
    computed: {
        toys() {
            return this.$store.getters.toys;
        },
    },
    methods: {
        sendMsg() {
            this.msgs.push(
                {
                    _id: utilService.makeId(),
                    txt: this.msg,
                },
                {
                    _id: utilService.makeId(),
                    txt: "How you doin'?",
                }
            );
        },
        setFilter(filterBy) {
            console.log("setting filter..");
            const de_func = _.debounce(() => {
                this.$store.dispatch({ type: "loadToys", filterBy });
            }, 1000);
            de_func();
            // (_.debounce(() => {
            //     this.$store.commit({ type: 'setFilter', filterBy })
            // }, 1000))()
        },
        remove(toyId) {
            this.$store.dispatch({ type: "removeToy", toyId });
        },
    },
    components: {
        toyList,
        toyFilter,
        popUp,
    },
};
</script>
