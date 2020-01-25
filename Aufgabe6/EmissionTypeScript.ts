var emissionAsia2018: number = 16274.1;
var emissionAustralia2018: number = 2100.5;
var emissionNorthAmerica2018: number = 6035.6;
var emissionSouthAmerica2018: number = 1261.5;
var emissionAfrica2018: number = 1235.5;
var emissionEurope2018: number = 4209.3;

var emissionAsia2008: number = 12954.7;
var emissionAustralia2008: number = 1993;
var emissionNorthAmerica2008: number = 6600.4;
var emissionSouthAmerica2008: number = 1132.6;
var emissionAfrica2008: number = 1028;
var emissionEurope2008: number = 4965.7;

var totalEmission2018: number = emissionEurope2018 + emissionAfrica2018 + emissionSouthAmerica2018 + emissionNorthAmerica2018 + emissionAustralia2018 + emissionAsia2018;

var WertZweiEurope: number = emissionEurope2018 * 100 / totalEmission2018;
var WertDreiEurope: number = (emissionEurope2018 - emissionEurope2008) * 100 / emissionEurope2008;
var WertVierEurope: number = emissionEurope2018 - emissionEurope2008;

var WertZweiAsia: number = emissionAsia2018 * 100 / totalEmission2018;
var WertDreiAsia: number = (emissionAsia2018 - emissionAsia2008) * 100 / emissionAsia2008;
var WertVierAsia: number = emissionAsia2018 - emissionAsia2008;

var WertZweiSouthA: number = emissionSouthAmerica2018 * 100 / totalEmission2018;
var WertDreiSouthA: number = (emissionSouthAmerica2018 - emissionSouthAmerica2008) * 100 / emissionSouthAmerica2008;
var WertVierSouthA: number = emissionSouthAmerica2018 - emissionSouthAmerica2008;

var WertZweiNorthA: number = emissionNorthAmerica2018 * 100 / totalEmission2018;
var WertDreiNorthA: number = (emissionNorthAmerica2018 - emissionNorthAmerica2008) * 100 / emissionNorthAmerica2008;
var WertVierNorthA: number = emissionNorthAmerica2018 - emissionNorthAmerica2008;

var WertZweiAustra: number = emissionAustralia2018 * 100 / totalEmission2018;
var WertDreiAustra: number = (emissionAustralia2018 - emissionAustralia2008) * 100 / emissionAustralia2008;
var WertVierAustra: number = emissionAustralia2018 - emissionAustralia2008;

var WertZweiAfrica: number = emissionAfrica2018 * 100 / totalEmission2018;
var WertDreiAfrica: number = (emissionAfrica2018 - emissionAfrica2008) * 100 / emissionAfrica2008;
var WertVierAfrica: number = emissionAfrica2018 - emissionAfrica2008;

function functionEurope(): void  {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#WertEinsText").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#WertEins").innerHTML = "" + emissionEurope2018;
    document.querySelector("#WertZwei").innerHTML = "" + WertZweiEurope;
    document.querySelector("#WertDrei").innerHTML = "" + WertDreiEurope;
    document.querySelector("#WertVier").innerHTML = "" + WertVierEurope;
    document.querySelector(".chart").setAttribute('style', 'height:' + WertZweiEurope + '%');
}
window.addEventListener("load", function (): void {
    document.querySelector('#Europe').addEventListener('click', functionEurope);
});

function functionAsia() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Asia"
    document.querySelector("#WertEinsText").innerHTML = "Emission absolute of Asia in 2018"
    document.querySelector("#WertEins").innerHTML = "" + emissionAsia2018;
    document.querySelector("#WertZwei").innerHTML = "" + WertZweiAsia;
    document.querySelector("#WertDrei").innerHTML = "" + WertDreiAsia;
    document.querySelector("#WertVier").innerHTML = "" + WertVierAsia;
    document.querySelector(".chart").setAttribute('style', 'height:' + WertZweiAsia + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Asia').addEventListener('click', functionAsia);
});

function functionNorthA(): void {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in North America"
    document.querySelector("#WertEinsText").innerHTML = "Emission absolute of North America in 2018"
    document.querySelector("#WertEins").innerHTML = "" + emissionNorthAmerica2018;
    document.querySelector("#WertZwei").innerHTML = "" + WertZweiNorthA;
    document.querySelector("#WertDrei").innerHTML = "" + WertDreiNorthA;
    document.querySelector("#WertVier").innerHTML = "" + WertVierNorthA;
    document.querySelector(".chart").setAttribute('style', 'height:' + WertZweiNorthA + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#NorthA').addEventListener('click', functionNorthA);
});

function functionSouthA() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in South America"
    document.querySelector("#WertEinsText").innerHTML = "Emission absolute of South America in 2018"
    document.querySelector("#WertEins").innerHTML = "" + emissionSouthAmerica2018;
    document.querySelector("#WertZwei").innerHTML = "" + WertZweiSouthA;
    document.querySelector("#WertDrei").innerHTML = "" + WertDreiSouthA;
    document.querySelector("#WertVier").innerHTML = "" + WertVierSouthA;
    document.querySelector(".chart").setAttribute('style', 'height:' + WertZweiSouthA + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#SouthA').addEventListener('click', functionSouthA);
});

function functionAustralia() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Australia"
    document.querySelector("#WertEinsText").innerHTML = "Emission absolute of Australia in 2018"
    document.querySelector("#WertEins").innerHTML = "" + emissionAustralia2018;
    document.querySelector("#WertZwei").innerHTML = "" + WertZweiAustra;
    document.querySelector("#WertDrei").innerHTML = "" + WertDreiAustra;
    document.querySelector("#WertVier").innerHTML = "" + WertVierAustra;
    document.querySelector(".chart").setAttribute('style', 'height:' + WertZweiAustra + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Austra').addEventListener('click', functionAustralia);
});

function functionAfrica() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Africa"
    document.querySelector("#WertEinsText").innerHTML = "Emission absolute of Africa in 2018"
    document.querySelector("#WertEins").innerHTML = "" + emissionAfrica2018;
    document.querySelector("#WertZwei").innerHTML = "" + WertZweiAfrica;
    document.querySelector("#WertDrei").innerHTML = "" + WertDreiAfrica;
    document.querySelector("#WertVier").innerHTML = "" + WertVierAfrica;
    document.querySelector(".chart").setAttribute('style', 'height:' + WertZweiAfrica + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Africa').addEventListener('click', functionAfrica);
});
