
//calcuulator 
let resultField = document.getElementById('result');

function updateResult(value) {
  if (value === 'X') {
    result.value += '*';
  } else if (value === 'M-') {
    result.value = result.value.slice(0, -1);
  } else {
    result.value += value;
  }
}


function clearResult() {
  result.value = '';
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

let buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    let buttonValue = this.value;

    switch (buttonValue) {
      case 'AC':
        clearResult();
        break;
      case '=':
        calculateResult();
        break;
      default:
        updateResult(buttonValue);
        break;
    }
  });
});
