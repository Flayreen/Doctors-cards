import checkToken from "../functions/checkToken.js";
import { formLogin } from "../variables.js";
const ourLoginPas = {
    email: "OSD@gmail.com",
    password: "12345"
}
// a64a6977-7d7a-4d2f-93cf-375935b363a8
// user це обєкт який формується після введення данних в форму логінізаціі.
//oбєкт  ourLoginPas зареєстрований на сайті,що вказано в тз

async function getToken(user) {
    try {
        const response = await axios.post("https://ajax.test-danit.com/api/v2/cards/login", user, {
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (response.status === 200) {
            const { data } = response;
            localStorage.setItem("token", data);
            console.log(response);
            checkToken(response);
            return data;
        }
    } catch ({ response }) {

        if (response) {
            if (response.status === 401) {
                formLogin.insertAdjacentHTML(
                    "beforeend",
                    `<span style="display:inline-block; color:red; margin-top:12px">
                            Incorrect email or password
                         </span>`
                )
            }
            if (response.status === 500) {
                formLogin.insertAdjacentHTML(
                    "beforeend",
                    `<span style="display:inline-block; color:red; margin-top:12px">
                    Please enter your email or password!
                         </span>`
                )
            }

        }
    }
}

export default getToken;
