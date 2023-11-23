
import { btnLogin, btnOut, btnCreate, headerLogoExit} from "../script.js";

function logOut() {
	try {
		localStorage.removeItem("token");
		btnLogin.style.display = "flex";
		btnOut.style.display = "none";
		btnCreate.style.display = "none";
		headerLogoExit.style.display = "none";
	}
	catch (error) {
		console.log(error)
	}

}

export default logOut;