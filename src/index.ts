import { CharctersColection } from "./CharctersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";


const numbersCollection = new NumbersCollection([-10, 3, -5, 0]);
numbersCollection.sort()
console.log(numbersCollection.data);

const charCollection = new CharctersColection('SruJaN');
charCollection.sort()
console.log(charCollection.data);


const linkedList = new LinkedList()
linkedList.add(2)
linkedList.add(95)
linkedList.add(-2)
linkedList.add(9)
linkedList.add(-10)
linkedList.print()

linkedList.sort()
console.log("Sorted LinkedList");

linkedList.print()


