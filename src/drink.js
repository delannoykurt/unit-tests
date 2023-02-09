const drinkMachine = {};

drinkMachine.greet = () => {
    console.log("Bonjour, bienvenue dans notre distributeur de boissons.");
};

drinkMachine.selectDrink = () => {
    console.log("Veuillez sélectionner votre boisson :");
    console.log("1. Coca-Cola");
    console.log("2. Fanta");
    console.log("3. Sprite");
};

drinkMachine.insertMoney = () => {
    console.log("Veuillez insérer votre montant :");
};

drinkMachine.distributeDrink = (selectedDrink) => {
    const drinks = ["Coca-Cola", "Fanta", "Sprite"];

    if (drinks.includes(selectedDrink)) {
        console.log(`Voici votre ${selectedDrink} !`);
    } else {
        console.log(`Désolé, la boisson ${selectedDrink} n'est pas disponible.`);
    }
};

module.exports = { drinkMachine };
