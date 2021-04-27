

export const rndCarte = () => {
    
    const cardArray = [
        "KS", "QS", "JS", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "0S",
        "KD", "QD", "JD", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "0D",
        "KH", "QH", "JH", "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "0H",
        "KC", "QC", "JC", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "0C"];
    

    let rndNumTemp = Math.floor(Math.random() * 53);

    if (rndNumTemp > 52) { rndNumTemp = rndNumTemp - 10 }
    else if (rndNumTemp < 1) { rndNumTemp = rndNumTemp + 10 }

    let rndCarteTemp = cardArray[rndNumTemp - 1];

    return rndCarteTemp
    
};


export const transformCardIntoInt = (cardValue) => {
    if (cardValue === "K" || cardValue === "Q" || cardValue === "J" || cardValue === "A" || cardValue === "0") {
        cardValue = "10"
    }

    return parseInt(cardValue)
}

