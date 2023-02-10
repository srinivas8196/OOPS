class Person{
    constructor(name, age, collegeName){
        this.name = name;
        this.age  = age;
        this.collegeName = collegeName;
    }
    
    displayName(){
        return `${this.name}`;
    }
    
    displayAge(){
        return `${this.age}`;
    }
    
    displayCollageName(){
        return `${this.collegeName}`;
    }
    
    
}

class student extends Person{
    constructor(name,age,collegeName,id,branch){
        super(name,age,collegeName);
        this.branch=branch;
        this.id=id;
    }
    displaybranch(){
        console.log(`${this.branch}`)
    }
}

class faculty extends Person
{
    constructor (name, age, collegeName,exp,subjects){
        super(name,age,collegeName);
        this.exp = exp;
        this.subjects=subjects;
    }

    displayexp()
    {
        console.log("No of Exp:", `${this.exp}`)
    }

    displaysub()
    {
        console.log("Subjects teach:",`${this.subjects}`)
    }
}
let s1=new student("shakul",40,"du",101,"it")
let p1= new Person("shakul",40,"du")
let t1 = new faculty("Srinivas",27,"VVCE",4,"CSE")
console.log(s1.displayName())
console.log(s1.displaybranch())
console.log(t1.displayexp())
console.log(t1.displaysub())

