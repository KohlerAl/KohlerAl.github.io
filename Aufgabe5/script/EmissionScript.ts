var emissionAsia2018:number = 16274.1;
var emissionAustralia2018:number = 2100.5;
var emissionNorthAmerica2018:number = 6035.6;
var emissionSouthAmerica2018:number = 1261.5;
var emissionAfrica2018:number = 1235.5;
var emissionEurope2018:number = 4209.3;

var emissionAsia2008:number = 12954.7;
var emissionAustralia2008:number = 1993;
var emissionNorthAmerica2008:number = 6600.4;
var emissionSouthAmerica2008:number = 1132.6;
var emissionAfrica2008:number = 1028;
var emissionEurope2008:number = 4965.7;

var totalEmission2018:number= emissionEurope2018 + emissionAfrica2018+ emissionSouthAmerica2018 + emissionNorthAmerica2018 + emissionAustralia2018+ emissionAsia2018;


console.log("Die Emission von Europa 2018 ist: " +emissionEurope2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " +emissionEurope2018*100/totalEmission2018 + "%")
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionEurope2018-emissionEurope2008)*100/emissionEurope2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionEurope2018-emissionEurope2008) +"kg CO2")

console.log("Die Emission von Asien 2018 ist: " +emissionAsia2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " +emissionAsia2018*100/totalEmission2018 + "%")
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionAsia2018-emissionAsia2008)*100/emissionAsia2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionAsia2018-emissionAsia2008) +"kg CO2")

console.log("Die Emission von Australien 2018 ist: " +emissionAustralia2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " +emissionAustralia2018*100/totalEmission2018 + "%")
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionAustralia2018-emissionAustralia2008)*100/emissionAustralia2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionAustralia2018-emissionAustralia2008) +"kg CO2")

console.log("Die Emission von Südamerika 2018 ist: " +emissionSouthAmerica2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " +emissionSouthAmerica2018*100/totalEmission2018 + "%")
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionSouthAmerica2018-emissionSouthAmerica2008)*100/emissionSouthAmerica2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionSouthAmerica2018-emissionSouthAmerica2008) +"kg CO2")

console.log("Die Emission von Nordamerika 2018 ist: " +emissionNorthAmerica2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " +emissionNorthAmerica2018*100/totalEmission2018 + "%")
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionNorthAmerica2018-emissionNorthAmerica2008)*100/emissionNorthAmerica2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionNorthAmerica2018-emissionNorthAmerica2008) +"kg CO2")

console.log("Die Emission von Afrika 2018 ist: " +emissionAfrica2018 +" kg CO2")
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " +emissionAfrica2018*100/totalEmission2018 + "%")
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + (emissionAfrica2018-emissionAfrica2008)*100/emissionAfrica2008 +" % verändert")
console.log("2018 im Vergleich zu 2008 sind das " +(emissionAfrica2018-emissionAfrica2008) +"kg CO2")