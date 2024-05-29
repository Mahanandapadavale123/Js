//Practice Question

function poem(){
    console.log("Hare rama Hare Krishna");
    console.log("Radha Radha Krishna Krishna");
}poem();



function rollDice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();
rollDice();


function avgTotal(a,b,c){
    let avg=(a+b+c)/3;
    return avg;
    //console.log(avg); 
}
avgTotal(2,4,6);


function calTable(n){
    for(let i=n; i<=n*10;i++){
        console.log(i);

    }
}
calTable(5);