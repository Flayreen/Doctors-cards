import deleteVisit from "../API/deleteVisit.js";

class Visit {
	constructor(fullName, urgency, status, description, purpose, id) {
		this.fullName = fullName;
		this.urgency = urgency;
		this.status = status;
		this.description = description;
		this.purpose = purpose;
		this.id = id;

		this.element = document.createElement("div");
		this.buttonMore = document.createElement("button");
		this.buttonEdit = document.createElement("button");
		this.buttonDelete = document.createElement("button");
	}

	render() {
		// Create card container
		this.element.classList.add("card");
		if (this.urgency.toLowerCase() === "high") {
			this.element.classList.add("card--high");
		} else if (this.urgency.toLowerCase() === "normal") {
			this.element.classList.add("card--normal");
		} else {
			this.element.classList.add("card--low");
		}
		// Create card title (patient's name)
		const cardTitle = document.createElement("span");
		cardTitle.classList.add("card__title");
		cardTitle.textContent = this.fullName;
		// Create card doctor
		const cardDoctor = document.createElement("span");
		cardDoctor.classList.add("card__doctor");
		cardDoctor.textContent = this.doctor;
		// Create button "Delete"
		this.buttonDelete.classList.add("card__button-delete");
		this.buttonDelete.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`
		// Create buttons block
		const buttonsContainer = document.createElement("div");
		buttonsContainer.classList.add("card__buttons-container");
		// Button "Show more"
		this.buttonMore.classList.add("card__buttons-container__button-more");
		this.buttonMore.textContent = "Show more";
		// Button "Edit"
		this.buttonEdit.classList.add("card__buttons-container__button-edit");
		this.buttonEdit.textContent = "Edit";
		buttonsContainer.append(this.buttonMore, this.buttonEdit);
		// Create full card
		this.element.append(cardTitle, cardDoctor, this.buttonDelete, buttonsContainer);
		// Logic of adding cards to columns
		const containerMain = document.querySelector(".container--main");
		containerMain.append(this.element);


		// this.delete();
		// this.showMore();
	}

	delete() {
		this.buttonDelete.addEventListener("click", () => {
			// Stop scrolling background
			document.body.style.overflow = "hidden";
			// Create dark background
			const darkBackground = document.createElement("div");
			darkBackground.style.top = window.scrollY + "px";
			darkBackground.classList.add("dark-background");
			// Create modal window
			const modalContainer = document.createElement("div");
			modalContainer.classList.add("modal");
			// Text
			const modalText = document.createElement("span");
			modalText.classList.add("modal__text");
			modalText.textContent = "Are you sure you want to delete the appointment?";
			const buttonsContainer = document.createElement("div");
			// Buttons container
			buttonsContainer.classList.add("modal__buttons-container");
			// Button "Cancel"
			const buttonCancel = document.createElement("button");
			buttonCancel.classList.add("modal__buttons-container__button-cancel");
			buttonCancel.textContent = "Cancel";
			// Button "Delete"
			const buttonDelete = document.createElement("button");
			buttonDelete.classList.add("modal__buttons-container__button-delete");
			buttonDelete.textContent = "Delete";
			buttonsContainer.append(buttonCancel, buttonDelete);
			modalContainer.append(modalText, buttonsContainer);
			darkBackground.append(modalContainer);
			document.body.append(darkBackground);


			// Event of deleting post
			buttonDelete.addEventListener("click", async () => {
				try {
					await deleteVisit(this.id);
					document.body.style.overflow = "";
					darkBackground.remove();
					this.element.remove();
				} catch (err) {
					console.log(err)
				}
			})

			// Event of cancel deleting
			buttonCancel.addEventListener("click", () => {
				document.body.style.overflow = "";
				darkBackground.remove();
			})
		})
	}

	showMore() {
		// Create additional block
		const hideBlock = document.createElement("div");
		hideBlock.classList.add("card__hidden");
		hideBlock.style.display = "none";
		// Create urgency & status block
		const centralInfo = document.createElement("div");
		centralInfo.classList.add("card__hidden__central");
		// Urgency text
		const urgencyText = document.createElement("span");
		urgencyText.dataset.urgency = this.urgency.toLowerCase();
		urgencyText.classList.add("card__hidden__central__urgency");
		urgencyText.textContent = this.urgency;
		// Status text
		const statusText = document.createElement("span");
		statusText.dataset.status = this.status.toLowerCase();
		statusText.classList.add("card__hidden__central__status");
		statusText.textContent = this.status;
		centralInfo.append(urgencyText, statusText);

		// Create purpose
		const purposeBlock = document.createElement("div");
		purposeBlock.classList.add("card__hidden__text-block");
		const purposeTitle = document.createElement("span");
		purposeTitle.classList.add("card__hidden__text-block__title");
		purposeTitle.textContent = "Purpose:";
		const purposeDescription = document.createElement("p");
		purposeDescription.classList.add("card__hidden__text-block__description");
		purposeDescription.textContent = this.purpose;
		purposeBlock.append(purposeTitle, purposeDescription);
		// Inserting content inside hidden block
		hideBlock.append(centralInfo, purposeBlock);
		// Inserting hidden block inside this.element
		this.element.querySelector(".card__doctor").after(hideBlock);

		this.buttonMore.addEventListener("click", () => {
			if (this.buttonMore.textContent === "Show more") {
				hideBlock.style.display = "flex";
				this.buttonMore.textContent = "Show less"
			} else {
				hideBlock.style.display = "none";
				this.buttonMore.textContent = "Show more";
			}
		})
	}
}

export default Visit;