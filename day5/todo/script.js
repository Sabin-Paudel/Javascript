const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const outputTodo = document.querySelector('.output');

btn.addEventListener('click', () => {
  let inpval = input.value;
  let p;
  if (inpval !== '') {
    p = document.createElement('p');
    p.innerHTML = inpval;
    outputTodo.appendChild(p);
    outputTodo.style.marginTop = '20px'; 
  } else {
    alert('Enter task first');
  }

  p.addEventListener('click', () => {
    p.style.textDecoration = "line-through";
  });

  p.addEventListener('dblclick', () => {
    p.innerHTML = '';
    if (outputTodo.childNodes.length === 0) {
      outputTodo.style.marginTop = '0'; 
    }
  });
});
