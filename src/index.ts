import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection';

const numbersCollection = new NumbersCollection([1000,5,-1,0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);

//tsc index.ts
//tsc --init
//tsc -w
//npm init -y
//npm install nodemon concurrently


//"scripts": {
//    "start:build": "tsc -w",
//    "start:run": "nodemon build/index.js",
//    "start":"concurrently npm:start:*"
// },

// npm start