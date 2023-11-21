// API:
import getVisits from "./API/getVisits.js";
import getToken from "./API/getToken.js";
import postVisit from "./API/postVisit.js";
console.log("hello")
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
import renderVisits from "./functions/renderVisits.js";


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


// Рендер візитів
renderVisits();
