// Import classes
import visitCardiologist from "../Classes/VisitCardiologist.js";
import visitDentist from "../Classes/VisitDentist.js";
import visitTherapist from "../Classes/VisitTherapist.js";

// Import API
import getVisits from "../API/getVisits.js";
import {filterCards} from "./filter.js";

async function renderVisits(token) {
    try {
        const allVisits = await getVisits(token);
        console.log(allVisits)
        allVisits.forEach(visit => {
            if (visit.doctor.toLowerCase() === "cardiologist") {
                const visitCard = new visitCardiologist(visit.fullname, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.pressure, visit.bmi, visit.disease, visit.age);
                visitCard.render();
            }

            if (visit.doctor.toLowerCase() === "dentist") {
                const visitCard = new visitDentist(visit.fullname, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.lastVisit);
                visitCard.render();
            }

            if (visit.doctor.toLowerCase() === "therapist") {
                const visitCard = new visitTherapist(visit.fullname, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.age);
                visitCard.render();
            }
        });
        filterCards(); // Бо після рендеру треба перерахувати картки.
    } catch (error) {
        console.log(error)
    }
}

export default renderVisits;