import checkToken from "../functions/checkToken.js";

const ourLoginPas = {
    email: "OSD@gmail.com", 
    password: "12345"
}
// a64a6977-7d7a-4d2f-93cf-375935b363a8
// user це обєкт який формується після введення данних в форму логінізаціі.
//oбєкт  ourLoginPas зареєстрований на сайті,що вказано в тз

async function getToken(user) {
    try {
        let response = await axios.post("https://ajax.test-danit.com/api/v2/cards/login", user );
        let {data} = response;
        localStorage.setItem("token", data);
        console.log(response)
        checkToken(response);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getToken;