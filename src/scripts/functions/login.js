
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

	/*	
		// delete modal
		document.querySelector(".modal-backdrop").remove();
		modalLogin.style.display = "none";
		modalLogin.classList.remove("show");
		modalLogin.removeAttribute("role");
		modalLogin.removeAttribute("aria-modal");
		modalLogin.setAttribute("aria-hidden", "true");
		document.body.classList.remove("modal-open");
		document.body.style.overflow = "";
		document.body.style.padding = "";
		*/
	}
	
}

export default login