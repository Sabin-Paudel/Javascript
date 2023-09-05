//Day 2


function square(num){
  if (!isNaN(num)) {
    let result= num*num;
    alert(`The square of the number is ${result}`);
  }
  else { 
    alert("Wrong input sir ");
  }
}

let num = +prompt("Enter number");


for(let k=0;k<5;k++){
  
  square(num);
}


