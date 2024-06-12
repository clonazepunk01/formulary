function validar() {
    var retorno_comuna = validar_comuna ();
    var retorno_username = validar_username ();
    var retorno_telefono = validar_telefono ();
    var retorno_password = validar_password ();
    var retorno_website = validar_website();
    var retorno_hobbies = validar_hobbies();
    var retorno_address = validar_address();
    
    return retorno_comuna && retorno_username && retorno_telefono && retorno_password && retorno_website && retorno_hobbies && retorno_address;
}

//// Validación de la comuna

function validar_comuna () {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    console.log(comuna);
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Este campo es obligatorio";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}


//// Validación del nombre de usuario

function validar_username() {
    var input_username = document.getElementById("usernameInput");
    var div_error_username = document.getElementById("error-username");
    var username = input_username.value;
    div_error_username.innerHTML = "";
    if (username.length < 5 || username.length > 10) {
        div_error_username.innerHTML = "El nombre de usuario debe tener entre 5 y 10 caracteres.";
        div_error_username.className = "text-danger small mt-1";
        return false;
    }

    // Verifica que el username comience con una letra

    var firstChar = username.charAt(0);
    if (!(firstChar >= 'A' && firstChar <= 'Z') && !(firstChar >= 'a' && firstChar <= 'z')) {
        div_error_username.innerHTML = "El nombre de usuario debe comenzar con una letra.";
        div_error_username.className = "text-danger small mt-1";
        return false;
    }

    // Verifica que el username no tenga caracteres especiales

    for (var i = 0; i < username.length; i++) {
        var char = username.charAt(i);
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))) {
            div_error_username.innerHTML = "El nombre de usuario no puede tener caracteres especiales.";
            div_error_username.className = "text-danger small mt-1";
            return false;
        }
    }

    // Verifica que no hayan digitos al principio del username

    var hasNumber = false;
    for (var i = 1; i < username.length; i++) {
        var char = username.charAt(i);
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (hasNumber) {
            div_error_username.innerHTML = "Los dígitos solo pueden estar al final del nombre de usuario.";
            div_error_username.className = "text-danger small mt-1";
            return false;
        }
    }
    return true;
}

//// Validación número de teléfono

function validar_telefono() {
    var telefono = document.getElementById('phoneInput').value;
    var div_error_telefono = document.getElementById('error-telefono');
    div_error_telefono.innerHTML = "";
    if (telefono.trim() === '') {
        div_error_telefono.innerText = 'El numero de teléfono es obligatorio.';
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    }

    // Verificar que tenga 9 digitos

    if (telefono.length !== 9) {
        div_error_telefono.innerText = 'El numero de teléfono debe tener 9 digitos.';
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    }

    // Verificar que solo tenga números

    for (var i = 0; i < telefono.length; i++) {
        var char = telefono.charAt(i);
        if (!(char >= '0' && char <= '9')) {
            div_error_telefono.innerText = 'El numero de teléfono solo puede contener numeros.';
            div_error_telefono.className = "text-danger small mt-1";
            return false;
        }
    }
    return true;
}


//// Validar contraseña

function validar_password() {
    var input_username = document.getElementById("usernameInput").value;
    var password = document.getElementById('inputPasswd').value;
    var confirmPassword = document.getElementById('inputPasswd2').value;
    var div_error_password = document.getElementById('error-password');
    var div_error_confirm_password = document.getElementById('error-confirm-password');
    
    div_error_password.innerHTML = "";
    div_error_confirm_password.innerHTML = "";

    if (password !== confirmPassword) {
        div_error_confirm_password.innerText = 'Las contraseñas no coinciden.';
        div_error_confirm_password.className = "text-danger small mt-1";
        return false;
    }

    if (password.length < 3 || password.length > 6) {
        div_error_password.innerText = 'La contraseña debe tener entre 3 y 6 caracteres.';
        div_error_password.className = "text-danger small mt-1";
        return false;
    }

    if (password.includes(input_username)) {
        div_error_password.innerText = 'La contraseña no puede contener el nombre de usuario.';
        div_error_password.className = "text-danger small mt-1";
        return false;
    }

    return true;
}


//// Validación de la dirección

function validar_address() {
    var address = document.getElementById("inputAddress").value;
    var div_error_address = document.getElementById("error-address");
    div_error_address.innerHTML = "";

    if (address === "") {
        div_error_address.innerHTML = "Debe ingresar una dirección";
        div_error_address.className = "text-danger small mt-1"
        return false
    }
    return true
}

//// Validación sitio web

function validar_website() {
    var website = document.getElementById("website").value;
    var div_error_website = document.getElementById("error-website");
    div_error_website.innerHTML = "";

    if (website === "") {
        div_error_website.innerHTML = "Debe ingresar un sitio web."
        div_error_website.className = "text-danger small mt-1"
        return false;
    }

    // Verifica la URL

    if (!website.startsWith("http://") && !website.startsWith("https://") && !website.startsWith("www")) {
        div_error_website.innerHTML = "La URL debe comenzar con http:// o https:// o www.";
        div_error_website.className = "text-danger small mt-1";
        return false;
    }

    // Verifica la URL
    if (website.indexOf(".") === -1) {
        div_error_website.innerHTML = "La URL debe contener un punto (.)";
        div_error_website.className = "text-danger small mt-1";
        return false;
    }

    return true;
}


// Validar aficiones

var hobbyList = []; // Var global

// Agregar una afición a la lista

function agregar_hobby() {
    var hobby = document.getElementById("hobby").value;
    var hobbiesList = document.getElementById("hobbiesList");
    var div_error_hobbies = document.getElementById("error-hobbies");
    div_error_hobbies.innerHTML = "";
    
    if (hobby === "") {
        div_error_hobbies.className = "text-danger small mt-1";
        div_error_hobbies.innerHTML = "El hobby no puede estar vacío";
        return false;
    } else {
        hobbyList.push(hobby);
        var li = document.createElement("li");
        li.textContent = hobby;
        hobbiesList.appendChild(li);
        return true;
    }
}



function validar_hobbies() {
    var div_error_hobbies = document.getElementById("error-hobbies");
    if (hobbyList.length < 2) {
        div_error_hobbies.innerHTML = "Debe ingresar al menos dos aficiones.";
        div_error_hobbies.className = "text-danger small mt-1";
        console.log("ERROR VERIFY HOBBY");
        return false;
    }
    return true;
}
