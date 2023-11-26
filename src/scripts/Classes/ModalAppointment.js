
class ModalAppointment {
    constructor(title) {
        this.title = title;

        this.modalContainer = document.createElement("div");
    }

    render() {
        // Stop scrolling background
        document.body.style.overflow = "hidden";
        // Create dark background
        const darkBackground = document.createElement("div");
        darkBackground.style.top = window.scrollY + "px";
        darkBackground.classList.add("dark-background");
        // Create modal window
        this.modalContainer.classList.add("modal-attention", "modal-container");
        // Title
        const modalTitle = document.createElement("span");
        modalTitle.classList.add("modal-container__title");
        modalTitle.textContent = this.title;
        // Select doctor
        const doctorDropdown = document.createElement("select");
        doctorDropdown.setAttribute("aria-label", "Select the doctor");
        doctorDropdown.classList.add("form-select", "my-2");  //my-2
        doctorDropdown.value = "Select the doctor";
        doctorDropdown.insertAdjacentHTML(
            "beforeend",
            `<option value="cardiologist">Select the doctor</option>
                  <option value="cardiologist">Cardiologist</option>
                  <option value="therapist">Therapist</option>
                  <option value="dentist">Dentist</option>
                `
        )


        this.modalContainer.append(modalTitle, doctorDropdown);
        document.body.append(darkBackground, this.modalContainer);
    }

}

export default ModalAppointment;