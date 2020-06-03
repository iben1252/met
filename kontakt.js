document.addEventListener("DOMContentLoaded", start);

function start() {
	burgerStart();
	getContact();
	getFooter();
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



//*-------------------------------Kontakt sektion -------------------------------------*//

async function getContact() {
	console.log("Kontakt info ");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/kontakt/114";
	let jsonData = await fetch(pagesURL);
	let section = await jsonData.json();
	insertContact(section);
}

function insertContact(section) {
	let destContact = document.querySelector("#contact-section");

	let template =


		`
     <div class="grid2" id="contact">

                <div class="infomation">
                    <h3>${section.adresse_overskrift}</h3>
                    <p>${section.adresse_kontakt}</p>

                    <h3>${section.telefon_overskrift}</h3>
                    <p>${section.telefon_kontakt}</p>

                    <h3>${section.mail_overskrift}</h3>
                    <p>${section.mail_kontakt}</p>
                </div>

    <div class="map">
                <div class="mapouter">
                    <div class="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Ryesgade%2025%2C%20copenhagen&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
                </div>
            </div>
    </div>

    </div>



    <div class="contact-heading">
        <h2>${section.overskrift}</h2>
    </div>

    <div class="grid2" id="contact_row">

                <div class="besked">
                    <p>${section.kontaktbrdtekst_kontakt}</p>
                    <p>${section.tak_tekst}</p>
                </div>


                <div class="form_container">
                        ${section.content.rendered}
                </div>

</div>
					`;
	destContact.insertAdjacentHTML("beforeend", template);

}




//*-----------------------------Kontakt sektion SLUT-----------------------------------*//









//*-----------------------------Footer sektion-----------------------------------*//

/* aabningstider og dage */

async function getFooter() {
	console.log("get Footer");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/footer/125";
	let jsonData = await fetch(pagesURL);
	let section = await jsonData.json();

	insertFooter1(section);
	insertFooter2(section);
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

//async function getFooter2() {
//    console.log("get right");
//    let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/footer/125";
//    let jsonData = await fetch(pagesURL);
//    let section = await jsonData.json();
//    insertFooter2(section);
//}

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
