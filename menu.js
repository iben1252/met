document.addEventListener("DOMContentLoaded", start);

function start() {
	burgerStart();
	getFooter1();
	getFooter2();
	menuKort()
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







//------------------------------------Menu sektion ----------------------------------------

async function menuKort() {
	console.log("menukort");

	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/menu/42";
	let jsonData = await fetch(pagesURL);
	let section = await jsonData.json();
	insertmenuKort(section);
}

function insertmenuKort(section) {
	let destmenuKort = document.querySelector("#menukort");

	let template =
		`
<section id="menuCard">

     	<div id="coffee_section">
		<div class="menu-left">
			<div class="coffee-text">
				<h1>${section.kaffe_overskrift}</h1>
				<p>${section.kaffe_beskrivelse}</p>
			</div>


			<div class="coffee-list">
				<ul class="coffee_price_list">
					<li>
						<p>${section.kaffe1}</p>
					</li>

					<li>
						<p>${section.kaffe2}</p>
					</li>

					<li>
						<p>${section.kaffe3}</p>
					</li>

					<li>
						<p>${section.kaffe4}</p>
					</li>

					<li>
						<p>${section.kaffe5}</p>
					</li>

					<li>
						<p>${section.kaffe6}</p>
					</li>

					<li>
						<p>${section.kaffe7}</p>
					</li>

					<li>
						<p>${section.kaffe8}</p>
					</li>

					<li>
						<p>${section.kaffe9}</p>
					</li>

					<li>
						<p>${section.kaffe10}</p>
					</li>
				</ul>


				<ul>
					<li>
						<p>${section.kaffe1_pris}</p>
					</li>

					<li>
						<p>${section.kaffe2_pris}</p>
					</li>

					<li>
						<p>${section.kaffe3_pris}</p>
					</li>

					<li>
						<p>${section.kaffe4_pris}</p>
					</li>

					<li>
						<p>${section.kaffe5_pris}</p>
					</li>

					<li>
						<p>${section.kaffe6_pris}</p>
					</li>

					<li>
						<p>${section.kaffe7_pris}</p>
					</li>

					<li>
						<p>${section.kaffe8_pris}</p>
					</li>

					<li>
						<p>${section.kaffe9_pris}</p>
					</li>

					<li>
						<p>${section.kaffe10_pris}</p>
					</li>

				</ul>
			</div>
		</div>



			<div class="menu-right">
                <div class="white-border1"></div>
				<div>
                    <img src="${section.kaffebillede.guid}" alt="Billede fra et bord i caffeen, blomster på bordet" ;>
                </div>
			</div>
		</div>






	<div id="morgenmad-section">

            <div class="menu-left">
				<img src="${section.morgenmadbillede.guid}" alt="Billede af kage creme på et bord" ;>
                <div class="white-border2"></div>
			</div>

		<div class="menu-right">
			<div class="morgenmad-text">
				<h1>${section.morgenmad_overskrift}</h1>
				<p>${section.morgenmad_beskrivelse}</p>
			</div>

			<div class="morgenmad-list">
				<ul class="morgenmad_price_list">
					<li>
						<p>${section.morgenmad1}</p>
					</li>

					<li>
						<p class="med">${section.morgenmad2}</p>
					</li>

					<li>
						<p>${section.morgenmad3}</p>
					</li>

					<li>
						<p>${section.morgenmad4}</p>
					</li>

					<li>
						<p>${section.morgenmad5}</p>
					</li>

					<li>
						<p>${section.morgenmad6}</p>
					</li>

					<li>
						<p>${section.morgenmad7}</p>
					</li>

					<li>
						<p>${section.morgenmad8}</p>
					</li>

					<li>
						<p>${section.morgenmad9}</p>
					</li>

					<li>
						<p>${section.morgenmad10}</p>
					</li>

				</ul>


				<ul>

					<li>
						<p>${section.morgenmad1_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad2_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad3_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad4_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad5_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad6_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad7_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad8_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad9_pris}</p>
					</li>

					<li>
						<p>${section.morgenmad10_pris}</p>
					</li>



				</ul>
			</div>

		</div>

		</div>







	<div id="koldedrikke-section">

		<div class="menu-left">
			<div class="drikke-text">
				<h1>${section.kolde_drikke}</h1>
				<p>${section.kolde_beskrivelse}</p>
				<div class="white-border3"></div>
			</div>

			<div class="drikke-list">
				<ul class="drikke_price_list">
					<li>
						<p>${section.koldedrikke1}</p>
					</li>

					<li>
						<p>${section.koldedrikke2}</p>
					</li>

					<li>
						<p>${section.koldedrikke3}</p>
					</li>

					<li>
						<p>${section.koldedrikke4}</p>
					</li>

				</ul>


				<ul>

					<li>
						<p>${section.koldedrikke1_pris}</p>
					</li>

					<li>
						<p>${section.koldedrikke2_pris}</p>
					</li>

					<li>
						<p>${section.koldedrikke3_pris}</p>
					</li>

					<li>
						<p>${section.koldedrikke4_pris}</p>
					</li>

				</ul>
			</div>

		</div>
			<div class="menu-right">
				<img src="${section.koldebillede.guid}" alt="Billede af blomster og juice flasker" ;>
			</div>
		</div>
</div>
					`;

	destmenuKort.insertAdjacentHTML("beforeend", template);
}

//---------------------------------Menu sektion SLUT ----------------------------







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
