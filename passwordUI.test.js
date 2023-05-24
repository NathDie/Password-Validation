/**
 * @vitest-environment jsdom
 */

import { describe, beforeEach, expect, it } from "vitest";
import passwordUI from "./passwordUI.js";

describe("Password UI", () => {
    beforeEach(() => {
        // 1. Je rends mon composant
        document.body.innerHTML = `
    <input type="text" id="password" />
    <button id="btn">OK</button>
    <h1 id="title"></h1>
    `;
        passwordUI();
    });

    it("transcript nb to title", () => {
        // 2. Simuler l'événement qui m'intéresse
        let nb = document.getElementById("password");
        nb.value = "azerty";
        let btn = document.getElementById("btn");
        btn.dispatchEvent(new Event("click"));

        // 3. Vérifie si c'est conforme à ce que j'attends
        let title = document.getElementById("title");
        expect(title.textContent).toBe("Le mot de passe doit comporter au moins 8 caractères");
    });
});