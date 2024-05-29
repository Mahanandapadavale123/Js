const student = {
    name:"mah",
    marks:89,
    prop:this,

    getName:()=>{

        console.log(this);
         return this.marks;
    }
}