"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([1000, 5, -1, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var characterCollection = new CharacterCollection_1.CharacterCollection('Xabf');
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(5);
linkedList.add(-6);
linkedList.add(-1);
linkedList.sort();
linkedList.print();
//tsc index.ts
//tsc --init
//tsc -w
//npm init -y
//npm install nodemon concurrently
//npm start
//"scripts": {
//    "start:build": "tsc -w",
//    "start:run": "nodemon build/index.js",
//    "start":"concurrently npm:start:*"
// },
// npm start
