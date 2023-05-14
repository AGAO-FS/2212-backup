class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // will be a node later when we add stuff onto the list
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // will be a node later when we add stuff into the list
    this.tail = null;
  }

  addToTail(value) {
    const node = new Node(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.previous = this.tail;

    this.tail = node;
  }

  addToHead(value) {
    const node = new Node(value);

    if (!this.head) {
      return (this.head = this.tail = node);
    }

    node.next = this.head;
    this.head.previous = node;

    this.head = node;
  }

  // there are a few edge cases for removing head
  removeHead() {
    // if there is no linked list at all, return null
    if (!this.head) {
      return null;
    }

    // if there is only one node in the list,
    // set head and tail both to null
    const head = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return head.value;
    }

    // if there are more than 1 node in the list
    const next = this.head.next;
    next.previous = null;
    this.head.next = null;

    this.head = next;

    return head.value;
  }

  removeTail() {
    // if there is no linked list at all, return null
    if (!this.head) {
      return null;
    }

    // if there is only one node in the list,
    // set head and tail both to null
    const tail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return tail.value;
    }

    // if there are more than 1 node in the list
    const previous = this.tail.previous;
    previous.next = null;
    this.tail.previous = null;

    this.tail = previous;

    return tail.value;
  }

  search(functionOrValue) {
    // create a temp variable to help you traverse the list
    // you have to use a temp variable because you cannot just traverse the list using this.head (because you'd be modifying the head)
    let current = this.head;

    while (current) {
      // we can search by using a function OR by just a regular value
      if (typeof functionOrValue === "function") {
        // if the function returns true, that means we successfully found the search term
        if (functionOrValue(current.value)) {
          return current.value;
        }
      } else {
        // if the search term is not a function, we can just check the value of the node
        if (current.value === functionOrValue) {
          return current.value;
        }
      }

      current = current.next;
    }

    return null;
  }
}
