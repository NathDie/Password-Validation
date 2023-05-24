import password_verif from "./password";


export default function passwordUI() {
    let btn = document.getElementById("btn");
    let title = document.getElementById("title");
    let password = document.getElementById("password");

    function handleClick() {
        title.textContent = password_verif(password.value);
    }

    btn.addEventListener("click", handleClick);
}