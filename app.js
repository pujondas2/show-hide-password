const passInput = document.querySelector('#password');

const toggleIcon = document.querySelector('#toggle');

toggleIcon.addEventListener('click', () => {
    if(passInput.type === 'password') {
        passInput.type = 'text';
        toggleIcon.classList.add('fa-eye-slash');
        toggleIcon.classList.remove('fa-eye');
    } else {
        passInput.type = 'password';
        toggleIcon.classList.add('fa-eye');

    }
})

