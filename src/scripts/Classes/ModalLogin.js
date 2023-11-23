
import login from "../functions/login.js";

class ModalLogin {
    constructor() {
        this.btnLogin = document.querySelector(".btn__login");
        //black background container
        this.darkBackgroundContainer = document.createElement("div");
        //заг контейнер
        this.modalContainer = document.createElement("div");
        //заголовок
        this.modalTitle = document.createElement("h2");
        //форма
        this.formLogin = document.createElement("form");
        this.spanEmail = document.createElement("span");
        this.spanPassword = document.createElement("span");
        this.inputEmail = document.createElement("input");
        this.inputPassword = document.createElement("input");
        //контейнер для кнопок
        this.buttonsContainer = document.createElement("div");
        //кнопки
        this.buttonCancel = document.createElement("button");
        this.buttonModalLogin = document.createElement("button");

    }

    render() {
        this.openClose();
    }

    openClose() {
        this.btnLogin.addEventListener("click", () => {
            this.body = document.querySelector("body");
            this.darkBackgroundContainer.style.top = window.scrollY + "px";
            this.darkBackgroundContainer.classList.add("dark-background");
            this.body.style.overflow = "hidden";
            // container 
            this.modalContainer.classList.add("modal-window");
            //title
            this.modalTitle.classList.add("modal-window__title");
            this.modalTitle.textContent = "Log In";
            //form
            this.formLogin.setAttribute("id", "formLogin");
            this.formLogin.classList.add("form-login");
            this.spanEmail.textContent = "Email";
            this.spanPassword.textContent = "Password";
            this.spanEmail.classList.add("form-login__span-email");
            this.spanPassword.classList.add("form-login__span-password");
            //input email
            this.inputEmail.classList.add("form-login__input-email", "form-login__input-email-icon");
            this.inputEmail.setAttribute("type", "email");
            this.inputEmail.setAttribute("name", "emailUser");
            this.inputEmail.placeholder = 'Enter your email';
            //input password
            this.inputPassword.placeholder = 'Enter your password';
            this.inputPassword.classList.add("form-login__input-password", "form-login__input-password-icon");
            this.inputPassword.setAttribute("type", "password");
            this.inputPassword.setAttribute("name", "passwordUser");
            // Buttons container
            this.buttonsContainer.classList.add("modal-window__buttons-container");
            // Button "Cancel"
            this.buttonCancel.classList.add("modal-window__buttons-container__button-cancel");
            this.buttonCancel.textContent = "Cancel";
            // Button "Login"
            this.buttonModalLogin.classList.add("modal-window__buttons-container__button-login");
            this.buttonModalLogin.textContent = "Login";
            this.buttonModalLogin.setAttribute("type", "submit");

            this.buttonsContainer.append(this.buttonModalLogin, this.buttonCancel);
            this.formLogin.append(this.modalTitle, this.spanEmail, this.inputEmail, this.spanPassword, this.inputPassword, this.buttonsContainer,)
            this.modalContainer.append(this.formLogin);
            this.body.append(this.darkBackgroundContainer, this.modalContainer)

        })
        // Event of cancel deleting
        this.buttonCancel.addEventListener("click", () => {
            this.body.style.overflow = "";
            this.modalContainer.remove();
            this.darkBackgroundContainer.remove();
        })
        this.formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            login();
            this.darkBackgroundContainer.remove();
            this.modalContainer.remove();
        })
        this.darkBackgroundContainer.addEventListener("click", (e) => {
            this.modalContainer.remove();
            this.darkBackgroundContainer.remove();
        })
    }



}
new ModalLogin().render();

export default ModalLogin;