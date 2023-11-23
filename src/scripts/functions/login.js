
import {getToken,formLogin} from "../script.js";
import renderVisits from "./renderVisits.js";

const modalLogin = document.querySelector("#exampleModal");

async function login () {
	const formData = new FormData(formLogin);
	const passwordUser = formData.get('passwordUser');
	console.log(formData)
	const emailUser = formData.get('emailUser');
	let user = { email: `${emailUser}`, password: `${passwordUser}` };
	console.log(passwordUser);
	console.log(emailUser);
	console.log(user);
	formLogin.reset();
	const token = await getToken(user);

	if (token !== undefined) {
		await renderVisits(token);
		document.querySelector(".modal-backdrop").remove();
		modalLogin.style.display = "none";
		modalLogin.classList.remove("show");
		modalLogin.removeAttribute("role");
		modalLogin.removeAttribute("aria-modal");
		modalLogin.setAttribute("aria-hidden", "true");

		document.body.classList.remove("modal-open");
		document.body.style.overflow = "";
		document.body.style.padding = "";
	}
}

export default login