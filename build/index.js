"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Sorting numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
// const sorterNums = new Sorter(numbersCollection);
// sorterNums.sort();
numbersCollection.sort();
console.log(numbersCollection.data);
// Sorting characters
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
// const sorterChars = new Sorter(charactersCollection);
// sorterChars.sort();
charactersCollection.sort();
console.log(charactersCollection.data);
// Sorting Linked List
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorterList = new Sorter(linkedList);
// sorterList.sort();
// linkedList.print();
linkedList.sort();
linkedList.print();
