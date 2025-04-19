document.querySelector('.book-now').addEventListener('click', function () {
    window.location.href = 'book.html';
});


const userButton = document.getElementById('user');
userButton.addEventListener('click', function () {
    const mainSection = document.getElementById('main-section');
    mainSection.style.display = "none";
    const loginSection = document.getElementById('login-section');
    loginSection.style.display = "flex";
});


const create = document.getElementById('create');
const signUp = document.getElementById('sign-up');
create.addEventListener('click', function () {
    const loginSection = document.getElementById('login-section');
    loginSection.style.display = "none";
    signUp.style.display = "flex";

});


