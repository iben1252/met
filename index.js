document.addEventListener("DOMContentLoaded", start);

function start() {
	burgerStart();
	getFrontpage();
	getFooter();


}



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




//---------------------------------Animation show Galleri ---------------------------------------

//---------------------------------Animation show Galleri ---------------------------------------




//---------------------------------Forside Galleri ---------------------------------------


async function getFrontpage() {
	console.log("get frontpage!");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside/13";
	// Husk at sætte WP post URL ind.
	let jsonData = await fetch(pagesURL);
	let section = await jsonData.json();

	insertGallery(section);
	//Med InsertGallery, "aktiverer" vi funktionen til at virke.
	insertQuote1(section);
	insertQuote2(section);
	insertQuote3(section);
	insertAboutUs(section);
}

function insertGallery(section) {
	console.log("get content");

	let destGallery = document.querySelector("#gallery-section");

	let template =
		`
						<section>
							<div class="content">
								<div class="flip-card">
                                    <div class="flip-card-inner">

                                        <div class="flip-card-front fade-in">
                                            <img src="${section.billede_venstre.guid}" alt="Billede af caffeen facade">
                                        </div>


                                        <div class="flip-card-back">
											<div class="card-text">
                                            <h3 class="pictur_header">${section.billede_venstre_overskrift}</h3>                         <p>${section.billede_venstre_tekst1}</p><p>${section.billede_venstre_tekst2}</p><p>${section.billede_venstre_tekst3}</p><p>${section.billede_venstre_tekst4}</p><p class="end_text">${section.billede_venstre_tekst5}</p>
                                        </div>
										</div>
                                    </div>
                                </div>



<!-----
                                <div class="picture-left">
									<div class="front">
										<img src="${section.billede_venstre.guid}" alt="Billede af caffeen facade">
                                    </div>

									<div class="back">
										<p>${section.billede_venstre_tekst}</p>
									</div>

				                </div>

--->

							<div class="gallery-content" id="${section.slug}">
								<div class="top">
									<img src="${section.billede_1.guid}" alt="MET's logo skilt uden for caffenen"; class="p-top-left fade-in">

									<img src="${section.billede_2.guid}" alt="efterårs salat i en skål" class="p-top-right fade-in">

								</div>
								<div class="bottom">

									<img src="${section.billede_3.guid}" alt="Kage med creme og lyserødt drys" class="p-bottom-left fade-in">

									<img src="${section.billede_4.guid}" alt="Surdejsbolle";" class="p-bottom-right fade-in">
								</div>
						</div>
						</section>
					`;
	//Section er strukturen på forsidens billedgalleri - Derfor har klassen, gallery_content, fået fire img srcs, da det er herinde vi skal indsætte billeder fra caféen eller deres mad.
	destGallery.insertAdjacentHTML("beforeend", template);

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


function insertQuote1(section) {
	let destQuote1 = document.querySelector("#quote_1");

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


function insertQuote2(section) {
	let destQuote2 = document.querySelector("#quote_2");

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


function insertQuote3(section) {

	let destQuote3 = document.querySelector("#quote_3");


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


function insertAboutUs(section) {
	let destAboutUs = document.querySelector("#about-us");

	let template =
		`
				<section id="aboutUs">
				    <div class="content">
                        <h2>${section.overskrift}</h2>
                            <div class="grid-colum-2">

                            <div class="mette">

								<img src="${section.billede_om_os_1.guid}" alt="Mette/kvinde står ved indgangen";">

                                <p>${section.tekst_om_os_1}</p>
                            </div>

                            <div class="thomas">
								<img src="${section.billede_om_os_2.guid}" alt="Thomas/mand sidder ved caffeens udendørs sæde";">

                                <p class="thomas2">${section.tekst_om_os_2}</p>
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
