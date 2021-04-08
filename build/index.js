"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([1000, 5, -1, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
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
