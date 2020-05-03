document.addEventListener("DOMContentLoaded", start);

function start() {
	console.log("startup", destGallery);

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
	destGallery = document.querySelector("#gallery-section");

	async function getGallery() {
		let pagesURL = "http://widespace.dk/MET-WP/wp-json/wp/v2/forside_-_galleri?per_page=100";
		// Husk at sætte WP post URL ind.
		let jsonData = await fetch(pagesURL);
		section = await jsonData.json();
		insertGallery();
		//Med InsertGallery, "aktiverer" vi funktionen til at virke.
	}

	function insertGallery() {
		section.forEach(section => {
			let template =
				`
						<section>
							<div class="content">
								<div class="billede_venstre">

									<img src="${section.billede_1.guid}" alt="Billede til: ${section.title.rendered}">

									<p>${section.billede_venstre_tekst.guid}</p>
								</div>

							<div class="gallery_content" id="${section.slug}">
								<div class="top">

									<img src="${section.billede_2.guid}" alt="Billede til: ${section.title.rendered}">

									<img src="${section.billede_3.guid}" alt="Billede til: ${section.title.rendered}">

								</div>
								<div class="bottom">

									<img src="${section.billede_4.guid}" alt="Billede til: ${section.title.rendered}">

									<img src="${section.billede_5.guid}" alt="Billede til: ${section.title.rendered}">
								</div>
						</div>
						</section>
					`;
			//Section er strukturen på forsidens billedgalleri - Derfor har klassen, gallery_content, fået fire img srcs, da det er herinde vi skal indsætte billeder fra caféen eller deres mad.
			destGallery.insertAdjacentHTML("beforeend", template);
		});
	}
	getGallery();
