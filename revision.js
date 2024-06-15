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
