// Import classes
import visitCardiologist from "../Classes/VisitCardiologist.js";
import visitDentist from "../Classes/VisitDentist.js";
import visitTherapist from "../Classes/VisitTherapist.js";

// Import API
import postVisit from "../API/postVisit.js";
import getVisits from "../API/getVisits.js";
import {log} from "gulp-clean/utils.js";


// Тестові обʼєкти нових візитів, поки немає функціоналу створювати користувачів через модалку
const user1 = {
    fullName: "Vakarchuk Oleg",
    urgency: "high",
    status: "done",
    description: "I wanna leave the job",
    purpose: "Review",
    pressure: 120,
    bmi: 30,
    disease: "Heartache",
    age: 45,
    doctor: "Cardiologist",
    id: 1,
};

const user2 = {
    fullName: "John Cena",
    urgency: "medium",
    status: "open",
    description: "I wanna leave the job",
    purpose: "Review",
    lastVisit: "11.07.2007",
    doctor: "Dentist",
    id: 2,
};

const user3 = {
    fullName: "Mary Jain",
    urgency: "low",
    status: "open",
    description: "I wanna leave the job",
    purpose: "Review",
    age: 30,
    doctor: "Therapist",
    id: 3,
};

const user4 = {
    fullName: "John Wick",
    urgency: "medium",
    status: "open",
    description: "I wanna leave the job",
    purpose: "Review",
    pressure: 110,
    bmi: 25,
    disease: "Heartache",
    age: 50,
    doctor: "Cardiologist",
    id: 4,
};

// Функцію рендеру карточок з нашого сервака
async function renderVisits() {
    try {
        // Ці закоментовані методи постять тестові обʼєкти на сервак
        // await postVisit(user1);
        // await postVisit(user2);
        // await postVisit(user3);
        // await postVisit(user4);

        const allVisits = await getVisits();
        console.log(allVisits);
        allVisits.forEach(visit => {
            if (visit.doctor.toLowerCase() === "cardiologist") {
                const visitCard = new visitCardiologist(visit.fullName, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.pressure, visit.bmi, visit.disease, visit.age);
                visitCard.render();
            }

            if (visit.doctor.toLowerCase() === "dentist") {
                const visitCard = new visitDentist(visit.fullName, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.lastVisit);
                visitCard.render();
            }

            if (visit.doctor.toLowerCase() === "therapist") {
                const visitCard = new visitTherapist(visit.fullName, visit.urgency, visit.status, visit.description, visit.purpose, visit.id, visit.age);
                visitCard.render();
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default renderVisits;