

function checkPhone(event) {
  const phone = document.getElementById('phone').value.trim();
  const error = document.getElementById('msgErr');

  // change element property to flip visibility
  error.style.display = phone === '' ? 'flex' : 'none';

  if (phone === '') {
    event.preventDefault();
  }
}



// could change this to a more generic function so it could be re-used
// form display modal 
function openForm() {
  document.getElementById("form-popup").style.display = "block";
}

function closeForm() {
  document.getElementById("form-popup").style.display = "none";
}



function openForm2() {
  document.getElementById("form-popup2").style.display = "block";
  const cornerButton = document.getElementById("corner-contact-button");
  // hide corner button
  cornerButton.hidden = true;
// set focus to found
  document.querySelector("#form-popup2 .close-button").focus();
}

function closeForm2() {
  document.getElementById("form-popup2").style.display = "none";
  const cornerButton = document.getElementById("corner-contact-button");
  // show corner button
  cornerButton.hidden = false;

  cornerButton.focus();
}


// form.addEventListener('submit', function(event) {

// const phone = document.getElementById('phone');
//     if (document.getElementById('phone') !== '') {
//         event.preventDefault();
//     }else{
//         document.getElementById('msgErr').style.display = 'flex';
//     }
// });
