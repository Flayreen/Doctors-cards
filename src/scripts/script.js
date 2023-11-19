// API:
//import postVisit from "./API/postVisit.js";
import getVisits from "./API/getVisits.js";
import getToken from "./API/getToken.js";

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