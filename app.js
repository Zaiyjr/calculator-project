const showDisplay = document.getElementById('showDisplay');

function showToDisplay(input){
   showDisplay.value += input;
}

function clearDisplay(){
   showDisplay.value = "";
}

function calculate(){
  try{
    showDisplay.value = eval(showDisplay.value);
  }
  catch(error){
    showDisplay.value = "Error";
  }
}


