export default function check_password(password) {
    if (password.length < 8) {
        return "Le mot de passe doit comporter au moins 8 caractères";
    } else if ((password.match(/\d/g) || []).length < 2) {
        return "Le mot de passe doit contenir au moins 2 chiffres";
    } else if (!/[A-Z]/.test(password)) {
        return "Le mot de passe doit contenir au moins une lettre majuscule";
    } else if (!/[\W_]/.test(password)) {
        return "Le mot de passe doit contenir au moins un caractère spécial\"";
    } else {
        return "All checks are good";
    }
}