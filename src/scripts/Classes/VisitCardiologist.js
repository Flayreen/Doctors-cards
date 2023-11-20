import Visit from "./Visit.js";

class VisitCardiologist extends Visit {
	constructor(fullName, urgency, status, description, purpose, id, pressure, bmi, disease, age){
		super(fullName, urgency, status, description, purpose, id);
		this.fullName = fullName;
		this.urgency = urgency;
		this.status = status;
		this.description = description;
		this.purpose = purpose;
		this.id = id;
		this.pressure = pressure;
		this.bmi = bmi;
		this.disease = disease;
		this.age = age;
		this.doctor = "Cardiologist";
	}

	// Default from parent class Visit
	render() {
		super.render();
		this.delete();
		this.showMore();
	};

	// Default from parent class Visit
	delete() {
		super.delete();
	}

	showMore() {
		super.showMore();

		const hideInfo = (title, value) => {
			const block = document.createElement("div");
			block.classList.add("card__hidden__text-block");
			const blockTitle = document.createElement("span");
			blockTitle.classList.add("card__hidden__text-block__title");
			blockTitle.textContent = title;
			const blockValue = document.createElement("p");
			blockValue.classList.add("card__hidden__text-block__description");
			blockValue.textContent = value;
			block.append(blockTitle, blockValue);
			this.element.querySelector(".card__hidden").append(block)
		};

		hideInfo("Diseases:", this.disease);
		hideInfo("Normal pressure:", this.pressure);
		hideInfo("BMI:", this.bmi);
		hideInfo("Age:", this.age);
	}
}

export default VisitCardiologist;