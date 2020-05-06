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

    });
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
    let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside?per_page=100";
    let jsonData = await fetch(pagesURL);
    section = await jsonData.json();
    insertQuote1();
}

function insertQuote1() {
    section.forEach((section) => {
        let template =
            `
						<section>
							<q>${section.citat}</q>
							<p>${section.citat_forfatter}</p>
						</section>
					`;

        destQuote1.insertAdjacentHTML("beforeend", template);
    });
}

//-------------------------- Citat 2 -------------------------------------------

destQuote2 = document.querySelector("#quote_2", getQuote2());

async function getQuote2() {
    console.log("get quote2");
    let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside?per_page=100";
    let jsonData = await fetch(pagesURL);
    section = await jsonData.json();
    insertQuote2();
}

function insertQuote2() {
    section.forEach((section) => {
        let template =
            `
						<section>
							<q>${section.citat_2}</q>
							<p>${section.citat_forfatter_2}</p>
						</section>
					`;
        destQuote2.insertAdjacentHTML("beforeend", template);
    });
}

//----------------------------- Citat 3 ------------------------------------------

destQuote3 = document.querySelector("#quote_3", getQuote3());

async function getQuote3() {
    console.log("get quote3");
    let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside?per_page=100";
    let jsonData = await fetch(pagesURL);
    section = await jsonData.json();
    insertQuote3();
}

function insertQuote3() {
    section.forEach((section) => {
        let template =
            `
						<section>
							<q>${section.citat_3}</q>
							<p>${section.citat_forfatter_3}</p>
						</section>
					`;
        destQuote3.insertAdjacentHTML("beforeend", template);
    });
}


//-------------------------- Forside Citat SLUT---------------------------------









//------------------------------Om os sektion-----------------------------------

destAboutUs = document.querySelector("#about-us", getAboutUs());

async function getAboutUs() {
    console.log("Om os");
    let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside?per_page=100";
    let jsonData = await fetch(pagesURL);
    section = await jsonData.json();
    insertAboutUs();
}

function insertAboutUs() {
    section.forEach((section) => {
        let template =
            `
						<section>
							<div class="content">
                                <h2>${section.overskrift}</h2>

									<img src="${section.billede_om_os_1.guid}" alt="Billede til: ${section.title.rendered}";">
                                    <p>${section.tekst_om_os_1}</p>


									<img src="${section.billede_om_os_2.guid}" alt="Billede til: ${section.title.rendered}";">
                                    <p>${section.tekst_om_os_2}</p>
						      </div>
						</section>
					`;
        destAboutUs.insertAdjacentHTML("beforeend", template);
    });
}

//------------------------------Om os sektion SlUT -----------------------------
