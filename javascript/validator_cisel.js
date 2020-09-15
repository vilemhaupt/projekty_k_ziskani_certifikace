<!--

Tento projekt byl použit k získání certifikace

JavaScript Algorithms and Data Structures Certification 

na freecodecamp.org

-->

// zkouska je vyznačení neplatných znaků v telefonním čísle, pokud se najde některý z těchto symbolů, bude return false;
var zkouska = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {  // kontroluje
  return zkouska.test(str);  // používá funkci return
}

telephoneCheck("555-555-5555"); // číslo ke kontrole
