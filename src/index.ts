import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection';
import {CharacterCollection} from './CharacterCollection';
import {LinkedList} from './LinkedList';

const numbersCollection = new NumbersCollection([1000,5,-1,0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection('Xabf');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
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