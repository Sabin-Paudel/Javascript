const paragraph=document.getElementById("para");

paragraph.addEventListener("mouseover",()=>{
  const word=paragraph.innerText.split(" ");

  for(let i=0;i<word.length;i++){
    if(word[i] === word[i].toUpperCase()){
      word[i]=`<span class="highlight">${word[i]}</span>`;
    }
  }
  paragraph.innerHTML= word.join(" ");
});

paragraph.addEventListener("mouseout",()=>{

  paragraph.innerHTML=paragraph.innerText;

});






