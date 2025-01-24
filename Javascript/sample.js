/**
 * Koostada funktsioonid vastavalt ette antud ülesande plokkidele
 * Ette oleme andnud muutujad ja nende väärtused ning funktsioonid mida tuleb kasutada
 * All pool on ka testid, et testida võimalikku lõpptulemust
 * Lubatud on luua enda nägemise järgi abi funktsioone
*/

// Muutujad
let loanAmount = 100000;
let guaranteeAmount = 80000;
let productCategory = "LG";
let guaranteeRate = 0;

/**
 * Arvuta välja käenduse määr.
 * Käenduse määr on osakaal, kui suur osa laenusummast on kaetud käendusega.
 *
 * @returns {number} - Käenduse määr protsentides.
 */

function calculateGuaranteeRate() {
    
    return guaranteeRate;
}

/**
 * Kontrolli ja arvuta käenduse määr vastavalt finantsteenuse liigile. Siin on oluline,
 * et vastavalt teenusele on teada maksimaalne käendusesumma. Näiteks:
 * Ettevõtte laenukäendus LG puhul on maksimaalne käendusesumma 80% laenusummast
 * Erakorraline proportsionaalne käendus olemasolevatele laenudele COP puhul on maksimaalne käendusesumma 50% laenusummast
 * Tagastame veateate, kui käenduse määr on suurem kui maksimaalne käendusesumma. Negatiivse garantii korral tagastame veateate.
 * Veateade võib olla lihtsalt console.log("Validation error")
 * @returns {number} - Käenduse määr protsentides või veateate korral 0.
 */

function calculateGuaranteeRateByProductCategory() {
    return guaranteeRate;
}

// Testime funktsioone
console.log("Calculated Guarantee Rate:", calculateGuaranteeRate(), "%");
console.log("Validated Guarantee Rate by Product Category:", calculateGuaranteeRateByProductCategory(), "%");
