/**
 * @vitest-environment jsdom
 */

import { describe, beforeEach, expect, it } from "vitest";
import passwordUI from "./passwordUI.js";

describe("Password UI", () => {
    beforeEach(() => {
        document.body.innerHTML = `
    <input type="text" id="password" />
    <button id="btn">OK</button>
    <h1 id="title"></h1>
    `;
        passwordUI();
    });

    it("transcript nb to title", () => {
        let password = document.getElementById("password");
        password.value = "azerty";
        let btn = document.getElementById("btn");
        btn.dispatchEvent(new Event("click"));

        let title = document.getElementById("title");
        expect(title.textContent).toBe("Le mot de passe doit comporter au moins 8 caractères");
    });
});