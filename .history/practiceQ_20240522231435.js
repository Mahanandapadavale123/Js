
let num=[10,30,20,54];

let mini=num.reduce((mini,el) => {
    if (mini < el){
        return mini;
        console.log(mini);
    } else{
        return el;
    }
});

console.log(mini);
