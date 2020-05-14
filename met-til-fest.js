document.addEventListener("DOMContentLoaded", start);

function start() {
	burgerStart();
	getFooter1();
	getFooter2();
}



//    console.log('is touch', is_touch_device());
//
//    //'is touch' - en funktion som kan genkende den enhed man er på; mobil eller desktop. Den bruges netop i forbindelse med forsidens galleri billede som kan flippe frem og tilbage mellem tekst om caféens åbningstider og et billede af caféen.
//
//    document.querySelector('html').classList.remove('is_touch_device', 'is_not_touch_device');
//    //Vi sikrer os at der ikke er nogen klasser på forhånd.
//
//    document.querySelector('html').classList.add(
//        is_touch_device() ? 'is_touch_device' : 'is_not_touch_device');
//    //Funktionen kigger på om det er true eller false ift. hvilken enhed det er.
//
//
//
//}


//*-----------------------------Burgermenu sektion-----------------------------------*//

function burgerStart() {
	document.querySelector(".menu-button").addEventListener("click", openBurger());
	document.querySelector(".menu-button").textContent = "☰";
	document.querySelector(".burgernav").style.display = "none";
}

function openBurger() {
	console.log("open burger");
	document.querySelector(".burgernav").style.display = "block";
	document.querySelector(".burgernav").style.display = "grid";
	document.querySelector(".menu-burger").style.display = "contents";
	document.querySelector(".fest-burger").style.display = "contents";
	document.querySelector(".kontakt-burger").style.display = "contents";

	document.querySelector(".menu-button").addEventListener("click", closeBurger);
	document.querySelector(".menu-button").removeEventListener("click", openBurger);
	document.querySelector(".menu-button").textContent = "⤫";
}

function closeBurger() {
	console.log("close burger");
	document.querySelector(".burgernav").style.display = "none";
	document.querySelector(".menu-burger").style.display = "none";
	document.querySelector(".fest-burger").style.display = "none";
	document.querySelector(".kontakt-burger").style.display = "none";

	document.querySelector(".menu-button").removeEventListener("click", closeBurger);
	document.querySelector(".menu-button").addEventListener("click", openBurger);
	document.querySelector(".menu-button").textContent = "☰";
}

//*-----------------------------Burgermenu sektion SLUT-----------------------------------*//






//*-----------------------------Footer sektion-----------------------------------*//

/* aabningstider og dage */

async function getFooter1() {
	console.log("get left");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/footer/125";
	let jsonData = await fetch(pagesURL);
	let section = await jsonData.json();
	insertFooter1(section);
}

function insertFooter1(section) {
	let destFooter1 = document.querySelector(".footer-left");

	let template =
		`
				<p>${section.aabningsdage}</p>
                <p>${section.aabningsdage_2}</p>
					`;
	destFooter1.insertAdjacentHTML("beforeend", template);

}

/* adresse og information */

async function getFooter2() {
	console.log("get right");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/footer/125";
	let jsonData = await fetch(pagesURL);
	let section = await jsonData.json();
	insertFooter2(section);
}

function insertFooter2(section) {
	let destFooter2 = document.querySelector(".footer-right");

	let template =
		`
               <p>${section.adresse_footer}</p>
               <p>${section.telefonnummer}</p>
               <p>${section.mail_footer}</p>

					`;
	destFooter2.insertAdjacentHTML("beforeend", template);

}

//-----------------------------Footer sektion SLUT-----------------------------------//
