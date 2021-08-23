import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor (public data: number[]) {
    super();
  };

  /* 
  Notice that the below is equal to line 2:
  data: number[];

  constructor (data: number[]) {
    this.data = data;
  }
  */

  get length(): number {
    return this.data.length;
  }

  // this compare function returns true if the left number is more than the right number
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // this swap function doesn't return anything
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}