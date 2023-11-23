
import { btnLogin, btnOut, btnCreate, headerLogoExit, mainBlock } from "../script.js";

function logOut() {
	try {
		localStorage.clear();
		btnLogin.style.display = "flex";
		btnOut.style.display = "none";
		btnCreate.style.display = "none";
		headerLogoExit.style.display = "none";
		mainBlock.innerHTML = "";
	}
	catch (error) {
		console.log(error)
	}

}

export default logOut;