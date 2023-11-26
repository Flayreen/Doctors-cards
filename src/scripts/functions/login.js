
import {formLogin, modalLogin} from "../variables.js";
import getToken from "../API/getToken.js"
import renderVisits from "./renderVisits.js";
import {filterCards} from "./filter.js";

async function login () {
	const formData = new FormData(formLogin);
	const passwordUser = formData.get('passwordUser');
	const emailUser = formData.get('emailUser');
	let user = { email: `${emailUser}`, password: `${passwordUser}` };
	formLogin.reset();
	const token = await getToken(user);

	if (token !== undefined) {
		await renderVisits(token);
		filterCards(); // Бо після входу треба перерахувати картки.
		formLogin.remove();
		const background = document.querySelector(".dark-background");
		background.remove();
		const modalWindow = document.querySelector(".modal-window");
		modalWindow.remove();
	}
	
}

export default login