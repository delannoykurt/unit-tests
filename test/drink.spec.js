const assert = require('assert');
const { expect } = require('chai');
const { drinkMachine } = require("../src/drink");

describe('Drink drinkMachine functions', () => {
    it('should greet the user', () => {
        let loggedMessage;
        const originalConsoleLog = console.log;
        console.log = (message) => { loggedMessage = message };
        drinkMachine.greet();
        console.log = originalConsoleLog;
        expect(loggedMessage).to.eq("Bonjour, bienvenue dans notre distributeur de boissons.");
    });

    it('should display drink options', () => {
        let loggedMessage;
        const originalConsoleLog = console.log;
        console.log = (message) => { loggedMessage = message };
        drinkMachine.selectDrink();
        //console.log = originalConsoleLog;
        expect(loggedMessage).to.contain("Veuillez sélectionner votre boisson :", `Expected message to contain "Veuillez sélectionner votre boisson :", but got "${loggedMessage}"`);
        expect(loggedMessage).to.contain("1. Coca-Cola", `Expected message to contain "1. Coca-Cola", but got "${loggedMessage}"`);
        expect(loggedMessage).to.contain("2. Fanta", `Expected message to contain "2. Fanta", but got "${loggedMessage}"`);
        expect(loggedMessage).to.contain("3. Sprite", `Expected message to contain "3. Sprite", but got "${loggedMessage}"`);
    });


    it('should ask for the amount inserted', () => {
        let loggedMessage;
        const originalConsoleLog = console.log;
        console.log = (message) => { loggedMessage = message };
        drinkMachine.insertMoney();
        console.log = originalConsoleLog;
        expect(loggedMessage).to.eq("Veuillez insérer votre montant :");
    });

    it('should distribute the selected drink', () => {
        let loggedMessage;
        const originalConsoleLog = console.log;
        console.log = (message) => { loggedMessage = message };
        drinkMachine.distributeDrink("Coca-Cola");
        console.log = originalConsoleLog;
        expect(loggedMessage).to.eq("Voici votre Coca-Cola !");
    });

    it('should display an error message if the selected drink is not available', () => {
        let loggedMessage;
        const originalConsoleLog = console.log;
        console.log = (message) => { loggedMessage = message };
        drinkMachine.distributeDrink("Pepsi");
        console.log = originalConsoleLog;
        expect(loggedMessage).to.eq('Désolé, la boisson Pepsi n\'est pas disponible.');
    });
});
