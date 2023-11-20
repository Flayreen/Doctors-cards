// API:
//import postVisit from "./API/postVisit.js";
import getVisits from "./API/getVisits.js";
import getToken from "./API/getToken.js";
import postVisit from "./API/postVisit.js";

//	CLASSES:
import Visit from "./Classes/Visit.js";
import VisitCardiologist from "./Classes/VisitCardiologist.js";
import VisitDentist from "./Classes/VisitDentist.js";
import VisitTherapist from "./Classes/VisitTherapist.js";

//	FUNCTIONS:
import { filterCards, filtersReset } from "./functions/filter.js";



// єдиний слухач для всіх фільтрів:
document.querySelector('.filters__wrapper').addEventListener('input', () => {
	filterCards('.mainblock .container');
});

// слухач для кнопки очищення фільтрів:
document.querySelector('#filter-reset').addEventListener('click', filtersReset);

const body1 = {
	fullname: "Vakarchuk Oleg",
	urgency: "high",
	status: "done",
	description: "I wanna leave the job",

}
// Пост і рендер візитів
async function postAndRenderVisits() {
	await postVisit()
	const allVisits = await getVisits();
	console.log(allVisits)
}
renderVisits();

// const card1 = new VisitCardiologist("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "1", "120", "30", "Hearrfjnrg jngrnjrgjngjnrjrgjnrjngrjntaefeefefefche", "40");
// card1.render();
// const card2 = new VisitCardiologist("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "1", "120", "30", "Heartache", "40");
// card2.render();
// const card3 = new VisitCardiologist("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "1", "120", "30", "Heartache", "40");
// card3.render();
// const card4 = new VisitCardiologist("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "1", "120", "30", "Heartache", "40");
// card4.render();
// const card5 = new VisitCardiologist("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "1", "120", "30", "Heartache", "40");
// card5.render();
// const card6 = new VisitCardiologist("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "1", "120", "30", "Heartache", "40");
// card6.render();
// const card7 = new VisitCardiologist("Vakarchuk Oleg", "high", "open", "I wanna leave the job", "I dont know", "1", "120", "30", "Heartache", "40");
// card7.render();

//робота з формою
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(formLogin);
	const passwordUser = formData.get('passwordUser');
	const emailUser = formData.get('emailUser');
	let user = { email: `${emailUser}`, password: `${passwordUser}` };
	console.log(passwordUser);
	console.log(emailUser);
	console.log(user);
	getToken(user);
	formLogin.reset();
});

let TOKEN_FROM_LOCALSTORAGE = localStorage.getItem("token");
console.log(TOKEN_FROM_LOCALSTORAGE);