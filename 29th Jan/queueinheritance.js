class queue extends Array{
    enqueue(e){
        super.push(e)
    }
    dequeue(e){
       return  super.shift(e)
    }
    empty(){
        return this.length===0;
    }
    peek(){
   return !this.empty()?this[0]:undefined
    }
}
let q1= new queue()
console.log(q1.peek())
q1.enqueue(34)
q1.enqueue(100)
q1.enqueue(14)
q1.enqueue(1900)
console.log(q1.dequeue())
console.log(q1)
console.log(q1.pop())
console.log(q1.peek())