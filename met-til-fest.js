document.addEventListener("DOMContentLoaded", start);

function start() {
	burgerStart();
	getParty();
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



//*---------------------------------MET TIL FEST sektion -----------------------------------*//





async function getParty() {
	console.log("MET til fest side loadede");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/met_til_fest/113";
	let jsonData = await fetch(pagesURL);
	let section = await jsonData.json();
	insertParty(section);
}

function insertParty(section) {
	let destParty = document.querySelector("#party-section");

	let template =


		`
    <section id="description">

                <div class="party_info">
					<div class="red_box1">
					</div>

					<div class="party_left">
                    	<h1 class="arrangement">${section.arrangement}</h1>
                    	<img src="${section.metfest_billede.guid}" alt="Billede af et fællespisningsbord";>
					</div>

					<div class="red_box2">
					</div>

					<div class="party_right">
						<h1 class="arrangement_2">${section.arrangement}</h1>
						<p>${section.underbeskrivelse_1}</p>
						<p>${section.underbeskrivelse_2}</p>
                    	<p>${section.underbeskrivelse_slut}</p>
					</div>
                </div>



                <div class="heading">
                    <h1>${section.maanedensmenu_overskrift}</h1>
                    <h2>${section.tildel_maaned}</h2>
                </div>

        </section>


        <section id="month_menu">

                <div class="top_menu">

					<div class="top_menu1">
                    	<img src="${section.billedvenstre_1.guid}" alt="Billede af et fællespisningsbord";>

						<div class="snacks_text">
							<h2 class="snacks_overskirft">${section.snacks_overskrift}</h2>
							<p>${section.snacks_1}</p>
							<p>${section.snacks_2}</p>
							<p>${section.snacks_3}</p>
							<p>${section.snacks_4}</p>
							<p>${section.snacks_5}</p>
							<p>${section.snacks_6}</p>
							<p>${section.snacks_7}</p>
						</div>
					</div>

					<div class="top_menu2">

						<div class="salat_text">
							<h2 class="signatursalater">${section.signatursalater}</h2>
							<p>${section.salater_1}</p>
							<p>${section.salater_2}</p>
							<p>${section.salater_3}</p>
						</div>

						<img src="${section.billedhojre_1.guid}" alt="Billede af et fællespisningsbord";>
					</div>
                </div>



                <div class="bottom_menu">
					<div class="bottom_menu1">
						<img src="${section.billedvenstre_2.guid}" alt="Billede af et fællespisningsbord";>

						<div class="dessert_text">
							<h2 class="desserter_overskrift">${section.desserter_overskrift}</h2>
							<p>${section.dessert_1}</p>
							<p>${section.dessert_2}</p>
							<p>${section.dessert_3}</p>
						</div>
					</div>

					<div class="bottom_menu2">
						<div class="sandwich_text">
							<h2 class="sandwich_overskrift">${section.sandwich_overskrift}</h2>
							<p>${section.sand_1}</p>
							<p>${section.sand_2}</p>
							<p>${section.sand_3}</p>
						</div>

						<img src="${section.billedhojre_2.guid}" alt="Billede af et fællespisningsbord";>
					</div>
                </div>

            </section>




                <section id="grey">
                    <div class="brunch">
                        <h2>${section.brunch_overskrift}</h2>
                        <p>${section.morgenmad_1}</p>
                        <p>${section.morgenmad_2}</p>
                        <p>${section.morgenmad_3}</p>
                        <p>${section.morgenmad_4}</p>
                        <p>${section.morgenmad_5}</p>
                        <p>${section.morgenmad_6}</p>
                        <p>${section.morgenmad_7}</p>
                    </div>
                    <div class="koldemet">
                        <h2>${section.koldemet}</h2>
                        <p>${section.drikke_1}</p>
                        <p>${section.drikke_2}</p>
                        <p>${section.drikke_3}</p>
                    </div>

                </section>


            <h1 class="price_heading">${section.priser}</h1>


                <section id="price_suggestion">
                    <div class="price_1">
                        <h2>${section.prisforslag_1}</h2>
                        <h2 class="menu_1">${section.menu_1}</h2>
                        <p>${section.pris_1}</p>
                        <p>${section.pris_2}</p>
                        <p>${section.pris_3}</p>
                        <p>${section.pris_4}</p>
                        <p>${section.pris_5}</p>
                        <p>${section.pris_6}</p>
                        <p>${section.pris_slut}</p>
                    </div>
                    <div class="price_2">
                        <h2>${section.prisforslag_2}</h2>
                        <h2 class="menu_2">${section.menu_2}</h2>
                        <p>${section.prisfor_tekst}</p>
                        <p>${section.prisfor_per}</p>
                        <p>${section.prisfor_1}</p>
                        <p>${section.prisfor_2}</p>
                        <p>${section.prisfor_3}</p>
                        <p>${section.prisfor_4}</p>
                        <p>${section.prisfor_5}</p>
                        <p>${section.prisfor_6}</p>
                        <p>${section.prisfor_7}</p>
                        <p>${section.prisfor_8}</p>
                    </div>

                </section>











					`;
	destParty.insertAdjacentHTML("beforeend", template);

}






//*-----------------------------MET TIL FEST sektion SLUT-----------------------------------*//






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
