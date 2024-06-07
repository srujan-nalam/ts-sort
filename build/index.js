"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharctersCollection_1 = require("./CharctersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charCollection = new CharctersCollection_1.CharctersColection('SruJaN');
charCollection.sort();
console.log(charCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(95);
linkedList.add(-2);
linkedList.add(9);
linkedList.add(-10);
linkedList.print();
linkedList.sort();
console.log("Sorted LinkedList");
linkedList.print();
