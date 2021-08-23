import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Sorting numbers

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorterNums = new Sorter(numbersCollection);
// sorterNums.sort();
numbersCollection.sort();
console.log(numbersCollection.data);


// Sorting characters

const charactersCollection = new CharactersCollection('Xaayb');
// const sorterChars = new Sorter(charactersCollection);
// sorterChars.sort();
charactersCollection.sort();
console.log(charactersCollection.data);

// Sorting Linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorterList = new Sorter(linkedList);
// sorterList.sort();
// linkedList.print();

linkedList.sort();
linkedList.print();