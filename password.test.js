import { it, expect } from "vitest";
import check_password from "./password.js";

it("only 6 characters", () => {
    expect(check_password('azerty')).toBe("Le mot de passe doit comporter au moins 8 caractères");
});

it("not number", () => {
    expect(check_password('azertyuiop')).toBe("Le mot de passe doit contenir au moins 2 chiffres");
});

it("no majuscule", () => {
    expect(check_password('azertyuiop25')).toBe("Le mot de passe doit contenir au moins une lettre majuscule");
});

it("no special character", () => {
    expect(check_password('Azertyuiop25')).toBe("Le mot de passe doit contenir au moins un caractère spécial\"");
});

it("All checks are good", () => {
    expect(check_password('Azertyuiop25!')).toBe("All checks are good");
});