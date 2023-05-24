export default function check_password(password) {
    let error;
    if (password.length < 8) {
        error = "Le mot de passe doit comporter au moins 8 caractères";
    } else if ((password.match(/\d/g) || []).length < 2) {
        error = "Le mot de passe doit contenir au moins 2 chiffres";
    } else if (!/[A-Z]/.test(password)) {
        error = "Le mot de passe doit contenir au moins une lettre majuscule";
    } else if (!/[\W_]/.test(password)) {
        error = "Le mot de passe doit contenir au moins un caractère spécial";
    } else {
        error = "All checks are good";
    }

    return error;
}