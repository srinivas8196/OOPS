class stack extends Array
{
    insert (e)
    {
        super.push(e)
    }

    pop()
    {
        super.shift()
    }

    empty()
    {
        return this.length ===0;
    }
    peek()
    {

    }
}

let s1 = new stack ()
s1.push(34)
s1.push(45)
s1.push(23)
s1.push(60)
s1.push(10)
s1.push(43)
console.log(s1);
console.log(s1.pop());
console.log("after delete", s1);
console.log(s1.pop());
console.log(s1)
