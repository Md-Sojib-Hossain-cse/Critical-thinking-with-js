class Stack {
    constructor(){
        this.items = []
    }

    push(item){
        this.items.push(item)
    }
    pop(){
        if(!this.items.length){
            return undefined
        }
        return this.items.pop()
    }
    peek(){}

    isEmpty(){
        return this.items.length === 0
    }
}