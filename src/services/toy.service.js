import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service';
import axios from 'axios';


const KEY = 'toyDB'
const TOY_URL = 'http://localhost:3030/api/toy/'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
    addReview
}

// _createToys()

function query(filterBy) {
    return httpService.get('toy', { params: filterBy })
}

function getById(id) {
    return httpService.get('toy/' + id)
}

function remove(id) {
    console.log('TOY SERVICE - REMOVING...')
    return httpService.delete('toy/' + id)
}

function save(toy) {
    if (toy._id) {
        //update
        return httpService.put('toy/' + toy._id, toy)
        // return axios.put(TOY_URL + toy._id, toy)
        //     .then(res => res.data)
    } else {
        //add
        return httpService.post('toy/', toy)
        // return axios.post(TOY_URL, toy).then(res => res.data)
    }
}

function addReview(review, toy){
    return httpService.post('toy/' + toy._id + '/review', {review, toy})
}

// function query(filterBy) {
//     // return storageService.query(KEY, filterBy)
//     return axios.get(TOY_URL, { params: filterBy })
//         .then(res => res.data)
// }

// function getById(id) {
//     // return storageService.get(KEY, id)
//     console.log("get by id fronted service", TOY_URL + id)
//     return axios.get(TOY_URL + id).then(res => res.data)
// }

// function remove(id) {
//     // return storageService.remove(KEY, id)
//     return axios.delete(TOY_URL + id)
//         .then(res => res.data)
// }

// function save(toy) {
//     // const savedProduct = (toy._id) ? storageService.put(KEY, toy) : storageService.post(KEY, toy)
//     // return savedProduct;
//     if (toy._id) {
//         //update
//         return axios.put(TOY_URL + toy._id, toy)
//             .then(res => res.data)
//     } else {
//         //add
//         return axios.post(TOY_URL, toy).then(res => res.data)
//     }
// }


function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: 0,
        type: '',
        createdAt: Date.now(),
        inStock: true
    }
}


// Create Test Data:
function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    if (!toys || !toys.length) {
        toys = [
            _createToy("Talking Doll", "Funny"),
            _createToy("Action Figure", "Super Hero"),
            _createToy("Lego", "Bulding Blocks"),
        ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
    return toys;
}

function _createToy(name, type) {
    const toy = {
        _id: utilService.makeId(),
        name,
        price: utilService.getRandomInt(1, 100),
        type,
        createdAt: Date.now(),
        inStock: true
    }
    return toy
}