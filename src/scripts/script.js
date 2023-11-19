// API:
import postVisit					from "./API/postVisit.js";
import getVisits					from "./API/getVisits.js";

//	CLASSES:
import Visit						from "./Classes/Visit.js";
import VisitCardiologist			from "./Classes/VisitCardiologist.js";
import VisitDentist					from "./Classes/VisitDentist.js";
import VisitTherapist				from "./Classes/VisitTherapist.js";

//	FUNCTIONS:
import {filterCards, filtersReset} from "./functions/filter.js";



// єдиний слухач для всіх фільтрів:
document.querySelector('.filters__wrapper').addEventListener('input', () => {
		filterCards('.mainblock .container');
});

// слухач для кнопки очищення фільтрів:
document.querySelector('#filter-reset').addEventListener('click',filtersReset);


const card1 = new Visit("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "Cardiologist", "1");
card1.render();
const card2 = new Visit("John Cena", "normal", "open", "I wanna leave the job", "I dont know", "Cardiologist", "1");
card2.render();
const card3 = new Visit("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "Cardiologist", "1");
card3.render();
const card4 = new Visit("John Cena", "low", "open", "I wanna leave the job", "I dont know", "Cardiologist", "1");
card4.render();
const card5 = new Visit("Vakarchuk Oleg", "low", "open", "I wanna leave the job", "I dont know", "Cardiologist", "1");
card5.render();
const card6 = new Visit("John Cena", "normal", "open", "I wanna leave the job", "I dont know", "Cardiologist", "1");
card6.render();
const card7 = new Visit("Vakarchuk Oleg", "low", "open", "I wanna leave the job", "I dont know", "Cardiologist", "1");
card7.render();