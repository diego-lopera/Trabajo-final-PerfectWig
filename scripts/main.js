// Modals
function openModal(idModal) {
    let modal = document.getElementById(idModal);
    modal.style.display = "block";
}

function closeModal(idModal) {
    let modal = document.getElementById(idModal);
    modal.style.display = "none";
}

// Registro
function register() {

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let email = document.getElementById('emailRegister').value;
        let password = document.getElementById('passwordRegister').value;
        let adress = document.getElementById('adressRegister').value;
        let name = document.getElementById('nameRegister').value;

        localStorage.setItem('user', JSON.stringify({ email, password, adress, name}));

        closeModal('registerModal');
    });
}

// Inicio de sesión
function login() {

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let email = document.getElementById('emailLogin').value;
        let password = document.getElementById('passwordLogin').value;

        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email === email && user.password === password) {
            closeModal('loginModal');
        } else {
            alert("Correo y/o contraseña incorrectos");
        }
    });
}

// Información del usuario
function userInformation() {
    let user = JSON.parse(localStorage.getItem('user'));
    let labelUser = document.getElementById('labelUser');

    if (user) {
        labelUser.innerHTML = user.name;
        labelUser.onclick = function() {
            alert("Nombre: " + user.name + "\nCorreo: " + user.email + "\nDirección: " + user.adress);
        }
    } else {
        labelUser.innerHTML = "Bienvenid@";
    }
}

// Llamamos a las funciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    register();
    login();
    userInformation();
});
