var $password = document.getElementById("password");
var $message = document.getElementById("message");

$password.addEventListener('input', () => {
    if ($password.value.length > 0) {
        $message.style.display = "block";
    } else {
        $message.style.display = "none";
    }
    if ($password.value.length < 4) {
        $message.innerHTML = "Password is weak";
        $password.style.borderColor = "red";
        $message.style.color = "red";
    } else if ($password.value.length >= 4 && $password.value.length < 8) {
        $message.innerHTML = "Password is medium";
        $password.style.borderColor = "yellow";
        $message.style.color = "yellow";
    } else if ($password.value.length >= 8) {
        $message.innerHTML = "Password is strong";
        $password.style.borderColor = "green";
        $message.style.color = "green";
    }
})