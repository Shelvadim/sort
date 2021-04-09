"use strict";
//import {NumbersCollection} from './NumbersCollection';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
/*interface Sortable{
    length:number;
    compare(leftIndex:number, rightIndex:number):boolean;
    swap(leftIndex:number, rightIndex:number): void;
}*/
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    /* collection: number[];
 
     constructor(collection:number[]){
         this.collection=collection;
     }*/
    //constructor(public collection: Sortable){}
    Sorter.prototype.sort = function () {
        //const length = this.collection.length;
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
