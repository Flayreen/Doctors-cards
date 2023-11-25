
import { btnLogin, btnOut, btnCreate, headerLogoExit, mainBlock } from "../variables.js";
import {filterCards} from "./filter.js";

function logOut() {
	try {
		localStorage.clear();
		btnLogin.style.display = "flex";
		btnOut.style.display = "none";
		btnCreate.style.display = "none";
		headerLogoExit.style.display = "none";
		mainBlock.innerHTML = "";
		filterCards(); // Бо після виходу треба перерахувати картки.
	}
	catch (error) {
		console.log(error)
	}
}

export default logOut;