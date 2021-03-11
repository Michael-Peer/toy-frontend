import { toyService } from '../services/toy.service.js';

export const toyStore = {
    state: {
        toys: [],
        filterBy: { txt: '', inStockState: 'all' }
    },
    getters: {
        toys(state) { return state.toys }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        updateToy(state, { toy }) {
            const idx = state.toys.findIndex(t => t._id === toy._id)
            state.toys.splice(idx, 1, toy)
        },
        addToy(state, { toy }) {
            state.toys.push(toy)
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(t => t._id === toyId)
            if (idx === -1) return
            state.toys.splice(idx, 1)
        },
    },
    actions: {
        loadToys({ commit }, { filterBy = { txt: '', inStockState: 'all' } }) {
            toyService.query(filterBy)
                .then(toys => {
                    commit({ type: 'setToys', toys })
                    console.log(toys, "Store Toys")
                })
                .catch(err => {
                    console.log('Store: Cannot load toys', err);
                    throw new Error('Cannot load toys');
                })
        },
        saveToy({ commit }, { toy }) {
            const type = toy._id ? 'updateToy' : 'addToy'
            return toyService.save(toy)
                .then(savedToy => {
                    console.log('Store: Toy saved');
                    commit({ type, toy: savedToy })
                })
                .catch(err => {
                    console.log('Store: Cannot save Toy', err);
                    throw new Error('Cannot save Toy');
                })
        },
        removeToy({ commit }, payload) {
            return toyService.remove(payload.toyId)
                .then(() => commit(payload))
        },
        getById(context, { id }) {
            return toyService.getById(id)
                .then(toy => toy)
        },
        addReview(context, {review, toy}) {
            toyService.addReview(review, toy)
        }
    }
}