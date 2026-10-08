const form = document.getElementById('form-generic-edit');
const field1 = document.getElementById('field1');
const field2 = document.getElementById('field2');
const field3 = document.getElementById('field3');
const stdout = document.getElementById('formOut');


form.addEventListener('submit', function (event) {

    event.preventDefault(); // stop the form from reload

    const field1_origin = field1.dataset.originalValue;
    const field2_origin = field2.dataset.originalValue;
    const field3_origin = field3.dataset.originalValue;

    
    stdout.innerHTML = `Original Value: ${field1_origin}  New Value: ${field1.value}<br />`;
    stdout.innerHTML += `Original Value: ${field2_origin}  New Value: ${field2.value}<br /> `;
    stdout.innerHTML += `Original Value: ${field3_origin}  New Value: ${field3.value}<br />`;

  
});

