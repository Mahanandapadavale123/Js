// let  dice = Math.floor(Math.random()*6)+1;
// console.log(dice);


// const calculator={
//     a:5,
//      b:2,
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// };

const student={
    name:"Mah",
    age:22,
    phy:88,
    eng:90,
    bio:77,
    avgMark (){
        let avg=(this.phy+ this.eng + this.bio)/3;
        console.log(this.avg);
        console.log(this.name);

    }
    
}