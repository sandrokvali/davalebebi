setInterval(function() {
	// Create new script element and load a script into it
	js = document.createElement("script");
	js.src = "./script.js";
	js.id = "sandboxScript";
	document.body.appendChild(js);

	// Check for existing script element and delete it if it exists
	var js = document.getElementById("sandboxScript");
	if (js !== null) {
		document.body.removeChild(js);
		console.info("<---------- Script refreshed ---------->");
	}
}, 10000)

// document.getElementById("andazTXT").innerHTML = rand

// var caruBTN = document.getElementById("carouselBTN")
// caruBTN.addEventListener("click", opencarousel);

// function opencarousel() {
// 	document.getElementById("Carousel1").classList.toggle("hide")
// }

document.getElementById("gakoffBTN").addEventListener("click", gakoffTable);
document.getElementById("gakonBTN").addEventListener("click", gakonTable);

function gakonTable() {
	document.getElementById("everything").classList.add("hide")
	document.getElementById("gakCXR").classList.remove("hide")
}

function gakoffTable() {
	document.getElementById("everything").classList.remove("hide")
	document.getElementById("gakCXR").classList.add("hide")
}

document.getElementById("jurnaloffBTN").addEventListener("click", jurnaloff);
document.getElementById("jurnalonBTN").addEventListener("click", jurnalon);


let status = false;

// document.addEventListener('DOMContentLoaded', function(){
var iframe = document.getElementById("jurFrame");
// iframe.onload = function(){  
//     try {iframe.contentWindow.location.href;} 
//     catch(err){ status = false }
// 		status = true
// }
// });

if (iframe) {
	iframe.onload = function() {
		status = true;
		console.log(status)
	}
}

function jurnalon() {
	if (status == false) {
		console.log(status)
		location.replace('https://onlineschool.emis.ge/')
		// function delayedFunction() {
		// 	document.getElementsByName('username')[0].type = "username";
		// 	document.getElementsByName('password')[0].type = "password";
		// }
	
		// setTimeout(delayedFunction, 100);
		iframe.onload = function(){  
			document.getElementsByName('username')[0].type = "username";
			document.getElementsByName('password')[0].type = "password";
			}
	} 
	else {
		document.getElementById("everything").classList.add("hide")
		document.getElementById("jurnal").classList.remove("hide")
	}
}

function jurnaloff() {
	document.getElementById("everything").classList.remove("hide")
	document.getElementById("jurnal").classList.add("hide")
}

// document.getElementById("geotabon").addEventListener("click", ongeoTable);
// // document.getElementById("geotaboff").addEventListener("click", offgeoTable);

// function ongeoTable() {
// 	// document.getElementById("everything").classList.add("hide")
// 	document.getElementById("geoTable").classList.toggle("hide")
// }

// function offgeoTable() {
// 	// document.getElementById("everything").classList.remove("hide")
// 	document.getElementById("geoTable").classList.toggle("hide")
// }

// document.getElementById("artTabon").addEventListener("click", onartTable);
// // document.getElementById("geotaboff").addEventListener("click", offgeoTable);

// function onartTable() {
// 	// document.getElementById("everything").classList.add("hide")
// 	document.getElementById("artTable").classList.toggle("hide")
// }

// function offartTable() {
// 	// document.getElementById("everything").classList.remove("hide")
// 	document.getElementById("artTable").classList.toggle("hide")
// }

// document.getElementById("musicTabon").addEventListener("click", onmusicTable);
// // document.getElementById("geotaboff").addEventListener("click", offgeoTable);

// function onmusicTable() {
// 	// document.getElementById("everything").classList.add("hide")
// 	document.getElementById("musicTable").classList.toggle("hide")
// }

// function offmusicTable() {
// 	// document.getElementById("everything").classList.remove("hide")
// 	document.getElementById("musicTable").classList.toggle("hide")
// }


// window.addEventListener('load', (event) => {
// 		var js = document.getElementById("andazebi");
// 	setTimeout(() => {
// }, "1000")
//   				js = document.createElement("script");
// 	js.src = "https://davalebebi.kvali.dev/andazebi.js";
// 	js.id = "andazebi";
// 	document.body.appendChild(js);

// 	// Check for existing script element and delete it if it exists
// 	if (js !== null) {
// 		document.body.removeChild(js);
// 		console.info("<---------- Andazebi Loaded ---------->");
// 			};