const toggleForm = document.querySelector('.toggle-contact');
const formContainer = document.querySelector('.fixed-contact');

toggleForm.addEventListener('click', () => {
    formContainer.classList.toggle('showContact')
    toggleForm.classList.toggle('moveToggler')
});

// Validation 

const username = document.querySelector('#username');
const tel = document.querySelector('#phone');
const email = document.querySelector('#email');
const form = document.querySelector('.fixed-contact'); 
const errorMessage = document.querySelector('#error-message');
form.addEventListener('submit', (e) => {

    let messages = [];

    // Check if fields are empty  
    if(username.value == '' || username.value == null || tel.value == '' || tel.value == null || email.value == '' || email.value == null) {
        messages.push('One or more fields have an error. Please check and try again.')
    }



    if(messages.length > 0) {
        e.preventDefault();
        errorMessage.textContent = messages.join(' ,');

    } 
})