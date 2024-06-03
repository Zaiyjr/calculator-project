/*function num_00(){
    let num00 = document.getElementById('num00').value
    document.getElementById('showData').value += num00 + num00
}
function num_0(){
    let num0 = document.getElementById('num0').value
    document.getElementById('showData').value += num0
   
}
function num_1(){
    let num1 = document.getElementById('num1').value
    document.getElementById('showData').value += num1
   
}
function num_2(){
    let num2 = document.getElementById('num2').value
    document.getElementById('showData').value += num2
   
}
function num_3(){
    let num3 = document.getElementById('num3').value
    document.getElementById('showData').value += num3
   
}
function num_4(){
    let num4 = document.getElementById('num4').value
    document.getElementById('showData').value += num4
   
}
function num_5(){
    let num5 = document.getElementById('num5').value
    document.getElementById('showData').value += num5
   
}
function num_6(){
    let num6 = document.getElementById('num6').value
    document.getElementById('showData').value += num6
   
}
function num_7(){
    let num7 = document.getElementById('num7').value
    document.getElementById('showData').value += num7
   
}
function num_8(){
    let num8 = document.getElementById('num8').value
    document.getElementById('showData').value += num8
   
}
function num_9(){
    let num9 = document.getElementById('num9').value
    document.getElementById('showData').value += num9 
   
}
function num_8(){
    const num8 = document.getElementById('num8').value
    document.getElementById('showData').value += num8
    
}
function plus(){
    const plus = document.querySelector('#plus').value
    document.getElementById('showData').value += plus
    
}
function minus(){
    const minus = document.querySelector('#minus').value
    document.getElementById('showData').value += minus
    
}
function multiply(){
    const multiply = document.querySelector('#multiply').value
    document.getElementById('showData').value += multiply
    
}
function divided(){
    const divided = document.querySelector('#devided').value
    document.getElementById('showData').value += divided
    
}
function equal(){
    const equal = document.querySelector('#equal').value
    document.getElementById('showData').value += equal
    
}
function clearAll(){
    document.getElementById('showData').value = ""
    
}
*/
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


