const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

function btnLogIn_Click() {
    location.href = "LogIn.html";
}

function btnSignIn_Click() {
    location.href = "SignIn.html";
}

function btnIndex_Click() {
    location.href = "Index.html";
}