//Linked List Data Structure | JavaScript
//https://www.youtube.com/watch?v=ZBdE8DElQQU&ab_channel=TraversyMedia
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.headNode = null;
        this.size = 0;
    }

    // Insert first node
    insertToFirst(data){
        this.headNode = new Node(data, this.headNode);
        this.size++;
    }

    // Insert last node
    insertToLast(data){
        let lastNode = new Node(data);

        let current;

        if(!this.headNode){
            this.headNode = lastNode;
        } else{
            current = this.headNode;

            while(current.next){
                current = current.next;
            }

            current.next = lastNode;
        }
        this.size++;

    }

    // Insert at index
    insertAt(data, index){
        if(index === 0){
            this.size++;
            this.insertToFirst(data);
            return;
        }
        else if(index > 0 && index < this.size){
            let current = this.headNode;

            let counter = 0;
            while(current){
                counter++;
                if(counter === index){
                    let insertAtNode = new Node(data, current.next);
                    current.next = insertAtNode;
                    this.size++;
                    return;
                }else{
                    current = current.next;
                }
            }
        }
        else if(index === this.size){
            this.size++;
            this.insertToLast(data);
            return;
        }
        else{
            console.log("Error: Index out of range");
            return;
        }
        
    }

    // Get at index
    getAt(index){
        if(index >= 0 && index < this.size){
            let current = this.headNode;
            let counter = 0;
            while(current){
                if(counter === index){
                    return current.data;
                }else{
                    current = current.next;
                }
                counter++;
            }
        }
        else if (index < 0 || index >= this.size){
            console.log("Error: Index out of range");
            return;
        }
    }

    // Remove at index
    removeAt(index){
        if(index === 0){
            if (this.size >= 1){
                this.headNode = this.headNode.next;
                this.size--;
                return;
            }
            else{
                console.log("Error: List is empty");
                this.size = 0; //Au cas où la liste est négative
                return;
            }
        }
        else if(index > 0 && index < this.size){
            let current = this.headNode;
            let counter = 0;

            while(current){
                counter++;


                if(counter === index){
                    current.next = current.next.next;
                    this.size--;
                    return;
                }else{
                    current = current.next;
                }
            }
        } else{
            console.log("Error: Index out of range");
            return;
        }
    }
    
    // Clear list
    clearList(){
        this.headNode = null;
        this.size = 0;
    }

    // Print list data
    printListData(){
        let current = this.headNode;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertToFirst(100);
ll.insertToFirst(200);
ll.insertToFirst(300);
ll.insertToFirst(400);
ll.removeAt(0);

ll.printListData();
