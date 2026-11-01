

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



// form.addEventListener('submit', function(event) {

// const phone = document.getElementById('phone');
//     if (document.getElementById('phone') !== '') {
//         event.preventDefault();
//     }else{
//         document.getElementById('msgErr').style.display = 'flex';
//     }
// });