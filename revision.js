const numbers="0123456789";

for(let i=0;i<numbers.lengthl;i++){
  let otp="";
  let range=Math.floor(Math.random()*numbers.length+1);
  
}
console.log(range);



//2nd 
const arr=[1,2,3,4,5,6,7];

const arr1=arr.map((arr)=>{
  return arr*2;
})

const arr2=arr.filter((arr)=>{
  return arr%2==0;
})

const arr3=arr.reduce((prev,curr)=>{
  return prev+curr;
})

console.log(arr1);
console.log(arr2);
console.log(arr3);


//3rd

const generate=async()=>{
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let items= await response.json();
  let data={
    id:items.userId,
    title:items.title,
    complete:items.completed,
  };
  console.log(data.id,data.title,data.complete);
}

generate();
