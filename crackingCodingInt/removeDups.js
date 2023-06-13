class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  appendToTail(data) {
    let currentNode = this;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new LinkedListNode(data);
  }

  printValuesAsArray() {
    let currentNode = this;
    const values = [this.data];
    while (currentNode.next !== null) {
      values.push(currentNode.next.data);
      currentNode = currentNode.next;
    }
    console.log(values);
  }
}

function removeDuplicates(head) {
  // O(n) BCR

  // create a hashtable to record values

  // if a value already exists in the list, delete it and update next
  // remember to do this work from "prev" so updates are easy

  const foundValues = new Set();
  foundValues.add(head.data);
  let currentNode = head;
  while (currentNode.next !== null) {
    if (foundValues.has(currentNode.next.data)) {
      currentNode.next = currentNode.next.next || null;
    } else {
      foundValues.add(currentNode.next.data);
      currentNode = currentNode.next;
    }
  }
}

const head = new LinkedListNode(0);
head.appendToTail(1);
head.appendToTail(2);
head.appendToTail(3);
head.appendToTail(4);
head.appendToTail(1);
head.appendToTail(2);
head.appendToTail(2);
head.printValuesAsArray();

removeDuplicates(head);
head.printValuesAsArray();
