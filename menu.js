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

<div id="kaffe-sektion">

    <div class="menu-left">
        <p>${section.kaffe_overskrift}</p>
        <p>${section.kaffe_beskrivelse}</p>

            <ul>
                <li>
                    <p>${section.kaffe_menu}</p>
                    <p>${section.kaffe_priser}</p>
                </li>
            </ul>
    </div>

    <div class="menu-right">
        <img src="${section.kaffebillede.guid}" alt="Billede til: ${section.title.rendered}";">
    </div>

</div>

<div id="morgenmad-sektion">

    <div class="menu-left">
        <p>${section.morgenmad_overskrift}</p>
        <p>${section.morgenmad_beskrivelse}</p>

            <ul>
                <li>
                    <p>${section.morgenmad_menu}</p>
                    <p>${section.morgenmad_priser}</p>
                </li>
            </ul>
    </div>

    <div class="menu-right">
        <img src="${section.morgenmadbillede.guid}" alt="Billede til: ${section.title.rendered}";">
    </div>

</div>


<div id="koldedrikke-sektion">

    <div class="menu-left">
        <p>${section.kolde_drikke}</p>
        <p>${section.kolde_beskrivelse}</p>

            <ul>
                <li>
                    <p>${section.kolde_menu}</p>
                    <p>${section.kolde_priser}</p>
                </li>
            </ul>
    </div>

    <div class="menu-right">
        <img src="${section.koldebillede.guid}" alt="Billede til: ${section.title.rendered}";">
    </div>

</div>





					`;
    destmenuKort.insertAdjacentHTML("beforeend", template);

}


//<div id="sectionwrapper">
//        <div id="section">
//            <div class="menu-left">
//                <div class="coffee-text">
//                    <h1>Kaffe</h1>
//                    <p>PÅ RYESGADE 25 ligger vores hyggelige lille sted, MET. Her kan man få en sublim kop kaffe, morgenmad, salater & sandwiches der mætter både maven & øjet.</p>
//                    <ul>
//                        <li>
//                            <p>Espresso</p>
//                            <p>25 kr.</p>
//                        </li>
//                        <li>
//                            <p>Americano</p>
//                            <p>30 kr.</p>
//                        </li>
//                        <li>
//                            <p>Cortado</p>
//                            <p>34 kr.</p>
//                        </li>
//                        <li>
//                            <p>Flat white</p>
//                            <p>38 kr.</p>
//                        </li>
//                        <li>
//                            <p>Cappuccino</p>
//                            <p>38 kr.</p>
//                        </li>
//                        <li>
//                            <p>Latte</p>
//                            <p>38 kr.</p>
//                        </li>
//                        <li>
//                            <p>Iskaffe</p>
//                            <p>38 kr.</p>
//                        </li>
//                        <li>
//                            <p>Filter</p>
//                            <p>25 / 30 kr.</p>
//                        </li>
//                        <li>
//                            <p>Te</p>
//                            <p>30 kr.</p>
//                        </li>
//                        <li>
//                            <p>Varm kakao</p>
//                            <p>38 kr.</p>
//                        </li>
//                    </ul>
//                </div>
//            </div>
//            <div class="menu-right">
//                <div class="coffee-photo"></div>
//            </div>
//        </div>
//
//        <div id="section">
//            <div class="menu-left">
//                <div class="food-photo">
//                </div>
//            </div>
//            <div class="menu-right">
//                <div class="food-text">
//                    <h1>Morgenmad og brunch</h1>
//                    <p>PÅ RYESGADE 25 ligger vores hyggelige lille sted, MET. Her kan man få en sublim kop kaffe, morgenmad, salater & sandwiches der mætter både maven & øjet.</p>
//                    <ul>
//                        <li>
//                            <div class="surdejs-upper">
//                                <p>Surdejsbolle eller tebolle</p>
//                                <p>17 kr.</p>
//                            </div>
//                            <div class="surdejs-lower">
//                                <p>- med smør & ost</p>
//                                <p>32 kr.</p>
//                            </div>
//                        </li>
//                        <li>
//                            <p>Yoghurt med granola & kompot</p>
//                            <p>40 kr.</p>
//                        </li>
//                        <li>
//                            <p>Overnight oats</p>
//                            <p>40 kr.</p>
//                        </li>
//                        <li>
//                            <p>Focaccia</p>
//                            <p>25 kr.</p>
//                        </li>
//                        <li>
//                            <p>Grape m. mynte/basilikum sukker</p>
//                            <p>20 kr.</p>
//                        </li>
//                        <li>
//                            <p>Chokostykke</p>
//                            <p>20 kr.</p>
//                        </li>
//                        <li>
//                            <p>Æg m. urtesalt & chili</p>
//                            <p>20 kr.</p>
//                        </li>
//                        <li>
//                            <p>Månedens kage</p>
//                            <p>35 kr.</p>
//                        </li>
//                        <li>
//                            <p>Månedens salater</p>
//                            <p>38 kr.</p>
//                        </li>
//                        <li>
//                            <p>Sandwich</p>
//                            <p>38 kr.</p>
//                        </li>
//                    </ul>
//                    <p>Ekstra bagværk fredag, lørdag & søndag</p>
//                    <ul>
//                        <li>
//                            <p>Kanelsnurre eller stickybuns</p>
//                            <p>25 kr.</p>
//                        </li>
//                    </ul>
//                </div>
//            </div>
//        </div>
//
//        <div id="section">
//            <div class="menu-left">
//                <div class="drinks-text">
//                    <h1>Kolde drikke</h1>
//                    <p>PÅ RYESGADE 25 ligger vores hyggelige lille sted, MET. Her kan man få en sublim kop kaffe, morgenmad, salater & sandwiches der mætter både maven & øjet.</p>
//                    <ul>
//                        <li>
//                            <p>GRO juice</p>
//                            <p>40 kr.</p>
//                        </li>
//                        <li>
//                            <p>Lemonade</p>
//                            <p>30 kr.</p>
//                        </li>
//                        <li>
//                            <p>Kombucha</p>
//                            <p>35 kr.</p>
//                        </li>
//                        <li>
//                            <p>Cortado</p>
//                            <p>34 kr.</p>
//                        </li>
//                    </ul>
//                </div>
//            </div>
//            <div class="menu-right">
//                <div class="drinks-photo"></div>
//            </div>
//
//        </div>
//    </div>

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
