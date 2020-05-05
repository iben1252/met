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

//---------------------------------Forside Galleri ---------------------------------------

async function getGallery() {
	console.log("gallery!");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside?per_page=100";
	// Husk at sætte WP post URL ind.
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertGallery();
	//Med InsertGallery, "aktiverer" vi funktionen til at virke.
}

function insertGallery() {
	section.forEach((section) => {
		console.log("get content");
		let template =
			`
						<section>
							<div class="content">
								<div class="billede_venstre">

									<img src="${section.billede_venstre.guid}" alt="Billede til: ${section.title.rendered}" style="width:100%;">

									<p>${section.billede_venstre_tekst.guid}</p>
								</div>

							<div class="gallery_content" id="${section.slug}">
								<div class="top">

									<img src="${section.billede_1.guid}" alt="Billede til: ${section.title.rendered}" style="width:100%";>

									<img src="${section.billede_2.guid}" alt="Billede til: ${section.title.rendered}" style="width:100%;">

								</div>
								<div class="bottom">

									<img src="${section.billede_3.guid}" alt="Billede til: ${section.title.rendered}" style="width:100%;">

									<img src="${section.billede_4.guid}" alt="Billede til: ${section.title.rendered}" style="width:100%;">
								</div>
						</div>
						</section>
					`;
		//Section er strukturen på forsidens billedgalleri - Derfor har klassen, gallery_content, fået fire img srcs, da det er herinde vi skal indsætte billeder fra caféen eller deres mad.
		destGallery.insertAdjacentHTML("beforeend", template);
		destQuote = document.querySelector("#quote-box", getQuote());

	});
}
//----------------------- Forside Galleri SLUT ---------------------------------


//----------------------- Forside Citat --------------------------------

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


//
//--------------- Forside Citat - Slideshow JavaScript (virker ikke pt)------------------
//async function getQuote() {
//	console.log("quote");
//	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside?per_page=100";
//	let jsonData = await fetch(pagesURL);
//	section = await jsonData.json();
//	insertQuote();
//}
//
//function insertQuote() {
//	section.forEach((section) => {
//		console.log("get quote");
//		let template =
//			`
//			<section>
//				<div class="mySlides">
//					<q>${section.citat}</q>
//					<p class="author">${section.citat_forfatter}</p>
//				</div>
//
//				<div class="mySlides">
//					<q>${section.citat_2}</q>
//					<p class="author">${section.citat_forfatter_2}</p>
//				</div>
//
//				<div class="mySlides">
//					<q>${section.citat_3}</q>
//					<p class="author">${section.citat_forfatter_3}</p>
//				</div>
//            </section>
//			`
//		destQuote.insertAdjacentHTML("beforeend", template);
//	}) }


//
//function insertQuote() {
//	section.forEach((section) => {
//		console.log("get quote");
//		let template =
//
//			`
//						<section>
//							<div class="content">
//								<div class="quote-container" style="width:70vw; height:70vh; overflow-x:auto; display:flex; -webkit-overflow-scrolling:touch; scroll-behavior:smooth;">
//									<p style="width:70vw; flex-shrink:0; ">${section.citat}</p>
//
//									<p style="width:70vw; flex-shrink:0;">${section.citat_2}</p>
//
//									<p style="width:70vw; flex-shrink:0;>${section.citat_3}</p>
//
//								</div>
//							</div>
//						</section>
//					`;
//		//Section er strukturen på forsidens billedgalleri - Derfor har klassen, gallery_content, fået fire img srcs, da det er herinde vi skal indsætte billeder fra caféen eller deres mad.
//		destQuote.insertAdjacentHTML("beforeend", template);
//	});
//}


//----------------------- Forside Citat JavaScript SLUT----------------------------



//----------------------- Forside Citat SLUT----------------------------



//OM OS SEKTION

destOmOs = document.querySelector("#about-us", getOmOs());

async function getOmOs() {
	console.log("Om os");
	let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside?per_page=100";
	// Husk at sætte WP post URL ind.
	let jsonData = await fetch(pagesURL);
	section = await jsonData.json();
	insertOmOs();
	//Med InsertGallery, "aktiverer" vi funktionen til at virke.
}

function insertOmOs() {
	section.forEach((section) => {
		let template =
			`
						<section>
							<div class="content">
                                <h2>${section.overskrift}</h2>

									<img src="${section.billede_om_os_1.guid}" alt="Billede til: ${section.title.rendered}" style="width:100%;">
                                    <p>${section.tekst_om_os_1}</p>


									<img src="${section.billede_om_os_2.guid}" alt="Billede til: ${section.title.rendered}" style="width:100%;">
                                    <p>${section.tekst_om_os_2}</p>
						      </div>
						</section>
					`;
		//Section er strukturen på forsidens billedgalleri - Derfor har klassen, gallery_content, fået fire img srcs, da det er herinde vi skal indsætte billeder fra caféen eller deres mad.
		destOmOs.insertAdjacentHTML("beforeend", template);
	});
}
