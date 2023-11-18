import Visit from "./Classes/Visit.js";
import postVisit from "./API/postVisit.js";
import getVisits from "./API/getVisits.js";
import VisitCardiologist	from "./Classes/VisitCardiologist.js";
import VisitDentist			from "./Classes/VisitDentist.js";
import VisitTherapist		from "./Classes/VisitTherapist.js";
import filterCards			from "./functions/filter-cards.js";


// const body1 = {
//     name: "Vakarchuk Oleg",
//     urgency: "High",
//     description: "I wanna leave the job",
//     purpose: "HZ XD",
//     doctor: "Cardiologist",
//     id: 1,
// }
//
// const body2 = {
//     name: "John Cena",
//     urgency: "High",
//     description: "I wanna leave the job",
//     purpose: "HZ XD",
//     doctor: "Dodik",
//     id: 2,
// }
//
// async function post () {
//     await postVisit(body1);
//     await postVisit(body2);
//     const visits = await getVisits();
//
//     visits.forEach(({name, urgency, description, purpose, doctor, id}) => {
//         const newCard = new Visit(name, urgency, description, purpose, doctor, id);
//         newCard.render();
//     })
//
// }
//
// post();

const newCard = new Visit("Oleg0", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 1);
newCard.render();
const newCard1 = new Visit("Oleg1", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 2);
newCard1.render();
const newCard2 = new Visit("Oleg2", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 3);
newCard2.render();
const newCard3 = new Visit("Oleg3", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 4);
newCard3.render();
const newCard4 = new Visit("Oleg4", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 5);
newCard4.render();
const newCard5 = new Visit("Oleg5", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 6);
newCard5.render();
const newCard6 = new Visit("Oleg6", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 7);
newCard6.render();
const newCard7 = new Visit("Oleg07", "High", "I wanna leave the job", "HZ XD", "Cardiologist", 8);
newCard7.render();



