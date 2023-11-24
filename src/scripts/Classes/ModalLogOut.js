import logOut from "../functions/logOut.js";
import {btnOut} from "../variables.js";
class ModalLogOut {
    constructor() {
        this.btnOut = btnOut;
        this.headerLogoExit = document.querySelector(".header_logo__exit");
        //black background container
        this.darkBackground = document.createElement("div");
        //заг контейнер
        this.modalContainer = document.createElement("div");
        //заголовок
        this.modalText = document.createElement("span");
        //контейнер для кнопок
        this.buttonsContainer = document.createElement("div");
        //кнопки
        this.buttonCancel = document.createElement("button");
        this.buttonOut = document.createElement("button");
    }
    render() {
        this.createElements();
        this.exitLogo();
    }
    createElements() {
        this.btnOut.addEventListener("click", () => {
            const body = document.querySelector("body");
            // Stop scrolling background
            body.style.overflow = "hidden";
            // Create dark background
            this.darkBackground.style.top = window.scrollY + "px";
            this.darkBackground.classList.add("dark-background");
            // Create modal window
            this.modalContainer.classList.add("modal");
            // Text
            this.modalText.classList.add("modal__text");
            this.modalText.textContent = "Are you sure you want out?";
            // Buttons container
            this.buttonsContainer.classList.add("modal__buttons-container");
            // Button "Cancel"
            this.buttonCancel.classList.add("modal__buttons-container__button-cancel");
            this.buttonCancel.textContent = "Cancel";
            // Button "Log out"
            this.buttonOut.classList.add("modal__buttons-container__button-delete");
            this.buttonOut.textContent = "Log out";
            this.buttonsContainer.append(this.buttonCancel, this.buttonOut);
            this.modalContainer.append(this.modalText, this.buttonsContainer);
            this.darkBackground.append(this.modalContainer);
            body.append(this.darkBackground);
            // Event of cancel out
            this.buttonCancel.addEventListener("click", (e) => {
                e.stopPropagation();
                body.style.overflow = "";
                this.darkBackground.remove();
            })

            // Event of out
            this.buttonOut.addEventListener("click", (e) => {
                e.stopPropagation();
                body.style.overflow = "";
                this.darkBackground.remove();
                logOut();
            })

            // Event of darkBackground
            this.darkBackground.addEventListener("click", (e) => {
                e.stopPropagation();
                this.darkBackground.remove();
            })

        })

    }
    exitLogo() {
        this.headerLogoExit.addEventListener("click", (e) => {
            const body = document.querySelector("body");
            // Stop scrolling background
            body.style.overflow = "hidden";
            // Create dark background
            this.darkBackground.style.top = window.scrollY + "px";
            this.darkBackground.classList.add("dark-background");
            // Create modal window
            this.modalContainer.classList.add("modal");
            // Text
            this.modalText.classList.add("modal__text");
            this.modalText.textContent = "Are you sure you want out?";
            // Buttons container
            this.buttonsContainer.classList.add("modal__buttons-container");
            // Button "Cancel"
            this.buttonCancel.classList.add("modal__buttons-container__button-cancel");
            this.buttonCancel.textContent = "Cancel";
            // Button "Log out"
            this.buttonOut.classList.add("modal__buttons-container__button-delete");
            this.buttonOut.textContent = "Log out";
            this.buttonsContainer.append(this.buttonCancel, this.buttonOut);
            this.modalContainer.append(this.modalText, this.buttonsContainer);
            this.darkBackground.append(this.modalContainer);
            body.append(this.darkBackground);
            // Event of cancel out
            this.buttonCancel.addEventListener("click", (e) => {
                e.stopPropagation();
                body.style.overflow = "";
                this.darkBackground.remove();
            })

            // Event of out
            this.buttonOut.addEventListener("click", (e) => {
                body.style.overflow = "";
                this.darkBackground.remove();
                logOut();
            });

            // Event of darkBackground
            this.darkBackground.addEventListener("click", (e) => {
                this.darkBackground.remove();
            })

        })
    }
}
new ModalLogOut().render();
export default ModalLogOut;
