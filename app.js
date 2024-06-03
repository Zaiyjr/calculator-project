// - ສ້າງໂຕແປ ຊື່ showDisplay
// - ໂດຍການໃຊ້ DOM ເຂົ້າໄປດຶງໄອດີຂອງ input ກະຄື 'showDisplay'
const showDisplay = document.getElementById('showDisplay');

// ສ້າງ function showToDisplay ໂດຍມີການຮັບ input
// ເອີ້ນໃຊ້ໂຕແປ showDisplay ເພື່ອບອກວ່າຖ້າມີການກົດໂຕເລກຕ່າງໃຫ້ສະແດງ value ນັ້ນ
// ໄປໃນ input ທີ່ມີ id ຄື showDisplay
function showToDisplay(input){
   showDisplay.value += input;
}

// ສ້າງ function clearDisplay
// ໂດຍການເອີ້ນໃຊ້ໂຕແປ showDisplay 
// ເພື່ອບອກວ່າຖ້າຫາກມີການກົດຟັງຊັ້ນນີ້ ໃຫ້ເປັນຄ່າວ່າງທັງຫມົດ
function clearDisplay(){
   showDisplay.value = "";
}
// ສ້າງ function calculate ເພື່ອການຄຳນວນ
function calculate(){
   // ກວດສອບ error ໂດຍການໃຊ້ Error handling 
   // try,catch
   // ເປັນຄຳສັ່ງດັກຈັບຂໍ້ຜິດພາດ
  try{
    showDisplay.value = eval(showDisplay.value);
  }
  catch(error){
    showDisplay.value = "Error";
  }
}


