document.addEventListener("DOMContentLoaded", start);

function start() {
	console.log("Hello world!");
	destGallery = document.querySelector("#gallery-section", getGallery());
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

document.querySelector(".menu-button").addEventListener("click", openBurger);
document.querySelector(".menu-button").textContent = "☰";

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



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
//function myFunction() {
//    var x = document.getElementById("myLinks");
//    if (x.style.display === "block") {
//        x.style.display = "none";
//    } else {
//        x.style.display = "block";
//    }
//}

//BURGER menu//
//function toggleMenu() {
//    console.log("Toggle menu");
//    document.querySelector("#menu").classList.toggle("hide");
//
//
//
//    let erSkjult = document.querySelector("#menu").classList.contains("hide");
//
//    if (erSkjult == true) {
//        //menu er nu skjult - ændre nenuknap til lll
//        document.querySelector("#menuknap").textContent = "☰";
//    } else {
//        //menu er nu vist - ændre menuknap til X
//        document.querySelector("#menuknap").textContent = "⤫";
//    }
//
//}
//
//







//---------------------------------Forside Galleri ---------------------------------------


async function getGallery() {
	console.log("gallery!");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside/13";
	// Husk at sætte WP post URL ind.
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();

	insertGallery();
	//Med InsertGallery, "aktiverer" vi funktionen til at virke.
}

function insertGallery() {
	console.log("get content");
	let template =
		`
						<section>
							<div class="content">
								<div class="billede_venstre">

									<img src="${section.billede_venstre.guid}" alt="Billede til: ${section.title.rendered}";">

									<p>${section.billede_venstre_tekst}</p>
								</div>

							<div class="gallery_content" id="${section.slug}">
								<div class="top">

									<img src="${section.billede_1.guid}" alt="Billede til: ${section.title.rendered}";>

									<img src="${section.billede_2.guid}" alt="Billede til: ${section.title.rendered}";">

								</div>
								<div class="bottom">

									<img src="${section.billede_3.guid}" alt="Billede til: ${section.title.rendered}";">

									<img src="${section.billede_4.guid}" alt="Billede til: ${section.title.rendered}";">
								</div>
						</div>
						</section>
					`;
	//Section er strukturen på forsidens billedgalleri - Derfor har klassen, gallery_content, fået fire img srcs, da det er herinde vi skal indsætte billeder fra caféen eller deres mad.
	destGallery.insertAdjacentHTML("beforeend", template);
	destQuote = document.querySelector("#quote-box", getQuote());
}

//----------------------- Forside Galleri SLUT ---------------------------------








//----------------------- Forside Citat ----------------------------------------

//------------------ Til Slideshowet fra W3Schools ----------------------------
// Slideshowet er taget fra W3Schools, da vi ville arbejde med et citat slideshow men havde problemer med at sætte op.

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

//------------------ Til Slideshowet fra W3Schools SLUT ----------------------


//----------------------- Citat 1 --------------------------------------------
destQuote1 = document.querySelector("#quote_1", getQuote1());

async function getQuote1() {
	console.log("get quote1");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside/13";
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertQuote1();
}

function insertQuote1() {
	let template =
		`
						<section>
							<q>${section.citat}</q>
							<p>${section.citat_forfatter}</p>
						</section>
					`;

	destQuote1.insertAdjacentHTML("beforeend", template);

}

//-------------------------- Citat 2 -------------------------------------------

destQuote2 = document.querySelector("#quote_2", getQuote2());

async function getQuote2() {
	console.log("get quote2");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside/13";
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertQuote2();
}

function insertQuote2() {
	let template =
		`
						<section>
							<q>${section.citat_2}</q>
							<p>${section.citat_forfatter_2}</p>
						</section>
					`;
	destQuote2.insertAdjacentHTML("beforeend", template);

}

//----------------------------- Citat 3 ------------------------------------------

destQuote3 = document.querySelector("#quote_3", getQuote3());

async function getQuote3() {
	console.log("get quote3");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside/13";
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertQuote3();
}

function insertQuote3() {

	let template =
		`
						<section>
							<q>${section.citat_3}</q>
							<p>${section.citat_forfatter_3}</p>
						</section>
					`;
	destQuote3.insertAdjacentHTML("beforeend", template);

}


//-------------------------- Forside Citat SLUT---------------------------------









//------------------------------Om os sektion-----------------------------------

destAboutUs = document.querySelector("#about-us", getAboutUs());

async function getAboutUs() {
	console.log("Om os");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside/13";
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertAboutUs();
}

function insertAboutUs() {
	let template =
		`
				<section id="aboutUs">
				    <div class="content">
                        <h2>${section.overskrift}</h2>
                            <div class="grid-colum-2">

                            <div class="mette">

								<img src="${section.billede_om_os_1.guid}" alt="Billede til: ${section.title.rendered}";">

                                <p>${section.tekst_om_os_1}</p>
                            </div>

                            <div class="thomas">
								<img src="${section.billede_om_os_2.guid}" alt="Billede til: ${section.title.rendered}";">

                                <p>${section.tekst_om_os_2}</p>
                            </div>
                            </div>





						  </div>
				    </section>
					`;
	destAboutUs.insertAdjacentHTML("beforeend", template);

}

//------------------------------Om os sektion SlUT -----------------------------









//*-----------------------------Footer sektion-----------------------------------*//

/* aabningstider og dage */
destFooter1 = document.querySelector(".footer-left", getFooter1());

async function getFooter1() {
	console.log("get left");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/footer/125";
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertFooter1();
}

function insertFooter1() {

	let template =
		`
				<p>${section.aabningsdage}</p>
                <p>${section.aabningsdage_2}</p>
					`;
	destFooter1.insertAdjacentHTML("beforeend", template);

}

/* adresse og information */
destFooter2 = document.querySelector(".footer-right", getFooter2());

async function getFooter2() {
	console.log("get right");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/footer/125";
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertFooter2();
}

function insertFooter2() {

	let template =
		`
               <p>${section.adresse_footer}</p>
               <p>${section.telefonnummer}</p>
               <p>${section.mail_footer}</p>

					`;
	destFooter2.insertAdjacentHTML("beforeend", template);

}


//destFooter = document.querySelector("#footer_box", getFooter());
//
//async function getFooter() {
//    console.log("Footer");
//    let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/footer/125"; //----- VIRKER IKKE??? -----//
//    let jsonData = await fetch(pagesURL);
//    section = await jsonData.json();
//    insertFooter();
//}
//
//function insertFooter() {
//    let template =
//        `
//						<section>
//                            <div class="venstre">
//                                   <div class="day">
//                                      <p>${section.aabningsdage}</p>
//                                      <p>${section.aabningsdage_2}</p>
//                                   </div>
//                                </div>
//
//                                <div class="center">
//                                   <div class="adress">
//                                       <p>${section.adresse_footer}</p>
//                                       <p>${section.telefonnummer}</p>
//                                       <p>${section.mail_footer}</p>
//                                   </div>
//                                </div>
//
//                                <div class="hojre">
//                                   <div class="news"></div>
//                                   <div class="some"></div>
//                                </div>
//						</section>
//					`;
//    //------ MAILCHIMP VIRKER IKKE? KAN IKKE LURE HVORDAN DET SKAL SÆTTES OP (KIG UNDER CLASS="NEWS" OG FOOTER I HTML'EN-------//
//
//    destFooter.insertAdjacentHTML("beforeend", template);
//}
//



//-----------------------------Footer sektion SLUT-----------------------------------//
