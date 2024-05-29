let day = "2";

switch (day) {
  case "1":
    console.log("Monday");
    break;

  case "2":
    console.log("Tuesday");
    break;

    
  case "3":
    console.log("WenDay");
    break;

  case "4":
    console.log("Thursday");
    break;

  case "5":
    console.log("Friday");
    break;

  case "6":
    console.log("Saturday");
    break;

  case "7":
    console.log("sunday");
    break;

  default:
    console.log("Not holiday in this week");
}

// switch Assignment Question


let quarter=1;

switch(quarter){
case 1:
  console.log("January, feb, march");
  break;

  case 2:
    console.log("April, may, jun");
    break;

    case 3:
      console.log("Jully,Aug,sept");
      break;

      case 4:
        console.log("October,Nov,Dec");
        break;
        default:
          console.log("Invalid month");
}

let num1=32;
let num2=47852;
if((num1%10)==(num2%10)){
  console.log("numbers have the same last digit which is",num1%10);
}else{console.log("numbers don't have the same last digit");}