'use strict'


// Linked List (связанный список) - это линейная структура данных , в которой каждый элемент содержит свои собдственные данные и ссылку на следующий элемент ( узел ) в списке

// Cсылка - это указаатель на другой объект узла или на null , если следующего узла нет 

// Singly Linked List (односявязный список) - это когда у каждого узла есть только один указатель на другой узел (next) 

// Doubly Linked List (двусвязный список) - когда у каждого узла есть две ссылки (previous, next) 

// Head - ссылка на самый первый элемент в нашем списке
// Tail - ссылка на самый последний элемент  в нашем списке 

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString () {
        return `${this.value}`;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if(!this.head  || !this.tail ) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }


    delete(value) {
        if(!this.head) {
            return null;
        }

        let deleteNode = null;


        while(this.head && this.head.value === value) {
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;
        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.tail?.value === value) {
              this.tail = currentNode;
        }

        return deleteNode;
    }

insertAfter (value, prevNode) {
    if(prevNode === null) {
        return this;
    }
   const newNode = new LinkedListNode(value);

   newNode.next = prevNode.next;
   prevNode.next = newNode;

   if(newNode === null) {
    this.tail = newNode;
   }

   return this;

}

toArray () {
    const nodes = [];
    let currentNode = this.head;
    
    while(currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
    }
    return nodes;
}


toString(){
    return this.toArray().map(node => node.toString()).toString();
}

};

const list = new LinkedList();

// list.prepend('a').prepend('b').prepend('c');
// list.find('b');
// console.log(list.toString());
list.append('a').append('b').append('c').append('d');
console.log(list.toString());

let  prev = list.find('b');
console.log(prev);
list.insertAfter('x', prev);
console.log(list.toString());



// console.log(list.delete('b'));
// console.log(list.toString());




