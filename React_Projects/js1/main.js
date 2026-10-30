

function checkPhone(event) {
    const phone = document.getElementById('phone').value.trim();
    const error = document.getElementById('msgErr');

    error.style.display = phone === '' ? 'flex' : 'none';

    if (phone === '') {
        event.preventDefault();
    }
}




// form.addEventListener('submit', function(event) {

// const phone = document.getElementById('phone');
//     if (document.getElementById('phone') !== '') {
//         event.preventDefault();
//     }else{
//         document.getElementById('msgErr').style.display = 'flex';
//     }
// });