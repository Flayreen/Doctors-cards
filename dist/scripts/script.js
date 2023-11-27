// VARIABLES
import {btnLogin, btnCreate, btnOut, headerLogo, headerLogoExit} from "./variables.js";
import {formLogin, mainBlock} from "./variables.js";

//	FUNCTIONS:
import { filterCards, filtersReset } from "./functions/filter.js";
import checkToken from "./functions/checkToken.js";
import logOut from "./functions/logOut.js";
import login from "./functions/login.js";
import isToken from "./functions/isToken.js";

//Classes
import ModalAttention from "./Classes/ModalAttention.js";
import ModalLogin from "./Classes/ModalLogin.js";
import ModalAppointment from "./Classes/ModalAppointment.js";

// import postVisit from "./API/postVisit.js";
// const user1 = {
// 	fullname: "Vakarchuk Oleg",
// 	urgency: "high",
// 	status: "done",
// 	description: "I wanna leave the job",
// 	purpose: "Review",
// 	pressure: 120,
// 	bmi: 30,
// 	disease: "Heartache",
// 	age: 45,
// 	doctor: "Cardiologist",
// 	id: 1,
// };
//
// const user2 = {
// 	fullname: "John Cena",
// 	urgency: "medium",
// 	status: "open",
// 	description: "I wanna leave the job",
// 	purpose: "Review",
// 	lastVisit: "11.07.2007",
// 	doctor: "Dentist",
// 	id: 2,
// };
//
// const user3 = {
// 	fullname: "Mary Jain",
// 	urgency: "low",
// 	status: "open",
// 	description: "I wanna leave the job",
// 	purpose: "Review",
// 	age: 30,
// 	doctor: "Therapist",
// 	id: 3,
// };
//
// const user4 = {
// 	fullname: "John Wick",
// 	urgency: "medium",
// 	status: "open",
// 	description: "I wanna leave the job",
// 	purpose: "Review",
// 	pressure: 110,
// 	bmi: 25,
// 	disease: "Heartache",
// 	age: 50,
// 	doctor: "Cardiologist",
// 	id: 4,
// };

// postVisit(user1)
// postVisit(user2)
// postVisit(user3)
// postVisit(user4)


// Перевірка на те, чи є токен при загрузці сторінки
document.addEventListener("DOMContentLoaded", async () => {
	await isToken();
	new ModalLogin().render();
})


// єдиний слухач для всіх фільтрів:
document.querySelector('.filters__wrapper').addEventListener('input', () => {
	filterCards();
});

// слухач для кнопки очищення фільтрів:
document.querySelector('#filter-reset').addEventListener('click', filtersReset);


btnOut.addEventListener('click',  (e) => {
	e.preventDefault();
	const Attention = new ModalAttention("Are you sure you want out?","Log out");
	Attention.createElement();
	Attention.exit();
});
headerLogoExit.addEventListener('click',  (e) => {
	e.preventDefault();
	const Attention = new ModalAttention("Are you sure you want out?","Log out");
	Attention.createElement();
	Attention.exit();
	
});

btnCreate.addEventListener("click", (e) => {
	const modalCreate = new ModalAppointment("Create appointment", "Create");
	modalCreate.render();
	modalCreate.create();
})


