let btn = document.querySelector('.button');
let heightInput = document.querySelector('.height');
let weightInput = document.querySelector('.weight');
let output = document.querySelector('.output');
let heightError = document.querySelector('.error_height');
let weightError = document.querySelector('.error_weight');


btn.addEventListener('click', () => {

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);
  let heightStatus = false;
  let weightStatus = false;

  if (isNaN(height) || height <= 0) {
    heightError.innerHTML = 'Enter valid Height';
  } else {
    heightError.innerHTML = '';
    heightStatus = true;
  }160


  if (isNaN(weight) || weight <= 0) {
    weightError.innerHTML = 'Enter Valid Height';
  } else {
    weightError.innerHTML = '';
    weightStatus = true;
  }

  if (heightStatus && weightStatus) {
    const bmi = (weight / (height * height) * 10000).toFixed(2);

    if (bmi < 18.6) {
      output.innerHTML = `Under Weight : ${bmi}`;
      output.style.color='yellow';
    } else if (bmi >= 18.6 && bmi <= 24.9) { 
      output.innerHTML = `Normal : ${bmi}`;
      output.style.color='green';
    } else {
      output.innerHTML = `Over Weight : ${bmi}`;
      output.style.color='red';
    }
  } else {
    output.innerHTML = '';
  }

});
