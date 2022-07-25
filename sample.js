let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

function sendRequest(){
  var age = document.getElementById("age");

  console.log(age.value); // 2
}