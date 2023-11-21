
import {getToken,formLogin} from "../script.js";

function login () {
	const formData = new FormData(formLogin);
	const passwordUser = formData.get('passwordUser');
	const emailUser = formData.get('emailUser');
	let user = { email: `${emailUser}`, password: `${passwordUser}` };
	console.log(passwordUser);
	console.log(emailUser);
	console.log(user);
	getToken(user);
	formLogin.reset();
}

export default login