
let num=[10,30,20,54];

let mini=num.reduce((mini,el) => {
    if (mini < el){
        return mini;
    } else{
        return el;
    }
});
