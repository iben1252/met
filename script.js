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
								<div class="picture-left">
									<div class="front">
										<img src="${section.billede_venstre.guid}" alt="Billede til: ${section.title.rendered}";"></div>

									<div class="back">
										<p>${section.billede_venstre_tekst}</p>
									</div>

								</div>

							<div class="gallery-content" id="${section.slug}">
								<div class="top">
									<img src="${section.billede_1.guid}" alt="Billede til: ${section.title.rendered}"; class="p-top-left">

									<img src="${section.billede_2.guid}" alt="Billede til: ${section.title.rendered}";" class="p-top-right">

								</div>
								<div class="bottom">

									<img src="${section.billede_3.guid}" alt="Billede til: ${section.title.rendered}";" class="p-bottom-left">

									<img src="${section.billede_4.guid}" alt="Billede til: ${section.title.rendered}";" class="p-bottom-right">
								</div>
						</div>
						</section>
					`;
    //Section er strukturen på forsidens billedgalleri - Derfor har klassen, gallery_content, fået fire img srcs, da det er herinde vi skal indsætte billeder fra caféen eller deres mad.
    destGallery.insertAdjacentHTML("beforeend", template);
    document.querySelector(".front").addEventListener("click", flipFrontCard);
}



function flipFrontCard() {
    console.log("flip front card");
    document.querySelector(".front").classList.add(".flip");
    document.querySelector(".back").classList.remove(".flip-back");

    document.querySelector(".front").removeEventListener("click", flipFrontCard);
    document.querySelector(".back").addEventListener("click", flipBackCard);
}


function flipBackCard() {
    console.log("flip back card");
    document.querySelector(".front").classList.add(".flip-back");
    document.querySelector(".back").classList.remove(".flip");


    document.querySelector(".front").addEventListener("click", flipFrontCard);
    document.querySelector(".back").removeEventListener("click", flipBackCard);
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







//---------------------------------Menu sektion --------------------------------


//<div id = "sectionwrapper" >
//    <div id = "section" >
//    <div class = "menu-left" >
//    <div class = "coffee-text" >
//    <h1 > Kaffe</h1>
//< p > PÅ RYESGADE 25 ligger vores hyggelige lille sted, MET.Her kan man få en sublim kop kaffe, morgenmad, salater & sandwiches der mætter både maven & øjet. < /p>
//<ul >
//    <
//    li >
//    <
//    p > Espresso < /p> <
//    p > 25 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Americano < /p> <
//    p > 30 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Cortado < /p> <
//    p > 34 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Flat white < /p> <
//    p > 38 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Cappuccino < /p> <
//    p > 38 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Latte < /p> <
//    p > 38 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Iskaffe < /p> <
//    p > 38 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Filter < /p> <
//    p > 25 / 30 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Te < /p> <
//    p > 30 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Varm kakao < /p> <
//    p > 38 kr. < /p> <
//    /li> <
//    /ul> <
//    /div> <
//    /div> <
//    div class = "menu-right" >
//    <
//    div class = "coffee-photo" > < /div> <
//    /div> <
//    /div>
//
//    <
//    div id = "section" >
//    <
//    div class = "menu-left" >
//    <
//    div class = "food-photo" >
//    <
//    /div> <
//    /div> <
//    div class = "menu-right" >
//    <
//    div class = "food-text" >
//    <
//    h1 > Morgenmad og brunch < /h1> <
//    p > PÅ RYESGADE 25 ligger vores hyggelige lille sted, MET.Her kan man få en sublim kop kaffe, morgenmad, salater & sandwiches der mætter både maven & øjet. < /p> <
//    ul >
//    <
//    li >
//    <
//    div class = "surdejs-upper" >
//    <
//    p > Surdejsbolle eller tebolle < /p> <
//    p > 17 kr. < /p> <
//    /div> <
//    div class = "surdejs-lower" >
//    <
//    p > -med smør & ost < /p> <
//    p > 32 kr. < /p> <
//    /div> <
//    /li> <
//    li >
//    <
//    p > Yoghurt med granola & kompot < /p> <
//    p > 40 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Overnight oats < /p> <
//    p > 40 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Focaccia < /p> <
//    p > 25 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Grape m.mynte / basilikum sukker < /p> <
//    p > 20 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Chokostykke < /p> <
//    p > 20 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Æg m.urtesalt & chili < /p> <
//    p > 20 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Månedens kage < /p> <
//    p > 35 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Månedens salater < /p> <
//    p > 38 kr. < /p> <
//    /li> <
//    li >
//    <
//    p > Sandwich < /p>
//



//---------------------------------Menu sektion SLUT ----------------------------





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


//-----------------------------Footer sektion SLUT-----------------------------------//
