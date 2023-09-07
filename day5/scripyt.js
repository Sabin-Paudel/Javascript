const outputDiv = document.getElementById('output');

const generatejoke=async()=>{
  try{
    const setHeader={
      headers:{
        Accept:'application/json'
      }
    }

    const jokes=await fetch('https://icanhazdadjoke.com/',setHeader);
    const data=await jokes.json();
    outputDiv.innerHTML=data.joke;
  }
  catch(err){
    outputDiv.innerHTML=`Error is ${err}`;
  }
}

generatejoke();