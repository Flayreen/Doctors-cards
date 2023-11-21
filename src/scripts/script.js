// API:
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
import checkToken from "./functions/checkToken.js";
import logOut from "./functions/logOut.js";
import login from "./functions/login.js";
import visitCardiologist from "./Classes/VisitCardiologist.js";
import visitDentist from "./Classes/VisitDentist.js";



// єдиний слухач для всіх фільтрів:
document.querySelector('.filters__wrapper').addEventListener('input', () => {
	filterCards('.mainblock .container');
});
let TOKEN_FROM_LOCALSTORAGE = localStorage.getItem("token");
//   BUTTONS
const btnLogin = document.querySelector(".btn__login");
const btnCreate = document.querySelector(".btn__create");
const btnOut = document.querySelector(".btn__out");
const headerLogoEhealth = document.querySelector(".header_logo");
const headerLogoExit = document.querySelector(".header_logo__exit");
// FORM
const formLogin = document.getElementById('form-login');
//block main для виведення карток
const mainBlock = document.querySelector(".main-block");
// слухач для кнопки очищення фільтрів:
document.querySelector('#filter-reset').addEventListener('click', filtersReset);



//робота з формою
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', (e) => {
	e.preventDefault();
	login();
});

btnOut.addEventListener("click" , (e) => {
	logOut();
})
headerLogoEhealth.addEventListener("click" , (e) => {
	logOut();
})

export {btnLogin,btnCreate,btnOut,headerLogoExit,TOKEN_FROM_LOCALSTORAGE,formLogin,getToken,mainBlock,getVisits}

let TOKEN_FROM_LOCALSTORAGE = localStorage.getItem("token");
console.log(TOKEN_FROM_LOCALSTORAGE);




// Пост і рендер візитів
// Тестові обʼєкти нових візитів, поки немає функціоналу створювати користувачів через модалку
const user1 = {
	fullname: "Vakarchuk Oleg",
	urgency: "high",
	status: "done",
	description: "I wanna leave the job",
	purpose: "Review",
	pressure: 120,
	bmi: 30,
	disease: "Heartache",
	age: 45,
	doctor: "Cardiologist",
	id: 1,
};

const user2 = {
	fullname: "John Cena",
	urgency: "medium",
	status: "open",
	description: "I wanna leave the job",
	purpose: "Review",
	lastVisit: "11.07.2007",
	doctor: "Dentist",
	id: 2,
};

const user3 = {
	fullname: "Mary Jain",
	urgency: "low",
	status: "open",
	description: "I wanna leave the job",
	purpose: "Review",
	age: 30,
	doctor: "Therapist",
	id: 3,
};

const user4 = {
	fullname: "John Wick",
	urgency: "medium",
	status: "open",
	description: "I wanna leave the job",
	purpose: "Review",
	pressure: 110,
	bmi: 25,
	disease: "Heartache",
	age: 50,
	doctor: "Cardiologist",
	id: 4,
};

// Функцію рендеру карточок з нашого сервака
async function renderVisits() {
	try {
		// Ці закоментовані методи постять тестові обʼєкти на сервак
		// await postVisit(user1);
		// await postVisit(user2);
		// await postVisit(user3);
		// await postVisit(user4);

		const allVisits = await getVisits();
		allVisits.forEach(visit => {
			if (visit.doctor.toLowerCase() === "cardiologist") {
				const visitCard = new visitCardiologist(visit.fullname, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.pressure, visit.bmi, visit.disease, visit.age);
				visitCard.render();
			}

			if (visit.doctor.toLowerCase() === "dentist") {
				const visitCard = new visitDentist(visit.fullname, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.lastVisit);
				visitCard.render();
			}

			if (visit.doctor.toLowerCase() === "therapist") {
				const visitCard = new visitDentist(visit.fullname, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.age);
				visitCard.render();
			}
		})
	} catch (error) {
		console.log(error)
	}
}
renderVisits();
