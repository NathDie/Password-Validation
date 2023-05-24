export default function check_password(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push("Le mot de passe doit comporter au moins 8 caractères");
    } else if ((password.match(/\d/g) || []).length < 2) {
        errors.push("Le mot de passe doit contenir au moins 2 chiffres");
    } else if (!/[A-Z]/.test(password)) {
        errors.push("Le mot de passe doit contenir au moins une lettre majuscule");
    } else if (!/[\W_]/.test(password)) {
        errors.push("Le mot de passe doit contenir au moins un caractère spécial");
    } else {
        errors.push("All checks are good");
    }

    return errors;
}