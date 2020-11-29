"use strict";
var A23;
(function (A23) {
    let spitze1 = { name: "spitze1", img: "Bilder/Spitze1.png" };
    let spitze2 = { name: "spitze2", img: "Bilder/Spitze2.png" };
    let spitze3 = { name: "spitze3", img: "Bilder/Spitze3.png" };
    let mitte1 = { name: "mitte1", img: "Bilder/Mitte1.png" };
    let mitte2 = { name: "mitte2", img: "Bilder/Mitte2.png" };
    let mitte3 = { name: "mitte3", img: "Bilder/Mitte3.png" };
    let booster1 = { name: "booster1", img: "Bilder/Booster1.png" };
    let booster2 = { name: "booster2", img: "Bilder/Booster2.png" };
    let booster3 = { name: "booster3", img: "Bilder/Booster3.png" };
    let spitzeArray = [spitze1, spitze2, spitze3];
    let mitteArray = [mitte1, mitte2, mitte3];
    let boosterArray = [booster1, booster2, booster3];
    let mySpitze = spitzeArray;
    A23.myJason1 = JSON.stringify(mySpitze);
    console.log(A23.myJason1);
    let myMitte = mitteArray;
    A23.myJason2 = JSON.stringify(myMitte);
    console.log(A23.myJason2);
    let myBooster = boosterArray;
    A23.myJason3 = JSON.stringify(myBooster);
    console.log(A23.myJason3);
    A23.ganzeRakete = { spitzeArray, mitteArray, boosterArray };
})(A23 || (A23 = {}));
//# sourceMappingURL=data.js.map