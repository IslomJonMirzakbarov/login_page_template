document.querySelector('.btn-black').addEventListener('click', showMessage);

function showMessage(e) {
  let input1 = document.querySelector('.text-center1');
  let input2 = document.querySelector('.text-center2');
  let re = /^[a-zA-Z]{3,12}$/;
  let re2 = /^([a-zA-Z0-9]{2,10})+\.?$/;
  if(input1.value !== '' && input2.value !== '' && re.test(input1.value) && re2.test(input2.value)) {
    alert('You have successfully logged in');
    input1.value = '';
    input2.value = '';  
  } else {
    document.getElementById('invisible').style.display = 'block';
  }
  setTimeout(() => {
    document.getElementById('invisible').style.display = 'none';
    input1.value = '';
    input2.value = '';    
  }, 2000);
  
  e.preventDefault();
}