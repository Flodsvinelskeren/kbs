/*
Victor
Vi fulgte denne guide for at lave en automatisk dag genkender. 
Så i headeren opdaterer dagen med åbningstider automatisk ift. hvilken dag det er
https://www.w3schools.com/jsref/jsref_getday.asp
*/

const weekday = ["Søndag - Lukket","Mandag Kl 9-13 & 14-16","Tirsdag kl 9-13","Onsdag kl 9-13","Torsdag kl 9-13","Fredag kl 9-13","Lørdag - Lukket"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("dage").innerHTML = day;