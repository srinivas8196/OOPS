class quee extends Array
{
    enuee (e)
    {
        super.push(e)
    }

    dequee()
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

let q1 = new quee ()
q1.enuee(34)
q1.enuee(100)
q1.enuee(23)
q1.enuee(54)
q1.enuee(10)
q1.enuee(43)
console.log(q1);
console.log(q1.dequee());
console.log("after dequee", q1);
console.log(q1.pop());
console.log(q1)
