import {mainBlock} from "../variables.js";

const filterInput = document.querySelector('#filter-input');
const filterStatus = document.querySelector('#filter-status');
const filterUrgency = document.querySelector('#filter-urgency');
const nothingFound = document.querySelector('.nothingfound');
const empty = document.querySelector('.empty');

export function filterCards() {
	toggleDefaultOptionName(filterUrgency, 'any', 'Urgency', '—— ALL ——');
	toggleDefaultOptionName(filterStatus, 'any', 'Status', '—— ALL ——');
	
	const shownCardsCount = document.querySelector('.shown-cards-count');
	const domCards = [...mainBlock.children].filter(card => card.classList.contains('card'));
	
	let filteredCount = 0;
	
	domCards.forEach( card => {
		const urgency = card.dataset.urgency;
		const status = card.dataset.status;
		const patientName = card.querySelector('.card__title').innerText;
		const purpose = card.querySelector('.js-purpose').innerText;
		const description = card.querySelector('.js-description').innerText;
		
		if (
			( filterUrgency.value === 'any' || filterUrgency.value === urgency )
			&&
			( filterStatus.value === 'any' || filterStatus.value === status )
			&&
			`${patientName} ${purpose} ${description}`.toLowerCase().includes(filterInput.value.toLowerCase())
		) {
			card.style.display = 'flex';
			filteredCount++;
		} else {
			card.style.display = 'none';
		}
	});
	
	shownCardsCount.innerText = (filteredCount === domCards.length) ? `(${domCards.length})` : `(${filteredCount} з ${domCards.length})`;
	
	empty.style.display = domCards.leng ? 'none' : 'flex';
	nothingFound.style.display = filteredCount ? 'none' : 'flex';
}

export function filtersReset() {
	filterInput.value = '';
	filterStatus.value = 'any';
	filterUrgency.value = 'any';
	
	toggleDefaultOptionName(filterUrgency, 'any', 'Urgency', '—— ALL ——');
	toggleDefaultOptionName(filterStatus, 'any', 'Status', '—— ALL ——');
	filterCards();
}



/**
 * Toggles the name of the "default" option of the SELECT element based on it being selected or not selected. It does not change the value, it only toggles the name (the Element.innerTEXT) of the option that the users see.
 *
 * This may be helpful if you don't want to add a label for the select element. When the default option is selected, it says "Car model" or "Color". When any other option is selected, the default option says "All car models" or "Any color", and users can see this name when they expand the select to change it.
 *
 * The function relies on the option value to determine which option is the default one and is to be "renamed".
 *
 * @param {Element} selectElement - the <SELECT> element whose default option name needs toggling.
 * @param {string} defaultOptionValue - the value of the option to be renamed.
 * @param {string} nameWhenSelected - how to name the default option when it is selected and visible.
 * @param {string} nameWhenNotSelected - how to name the default option when it is NOT selected and is only visible when the select is expanded (clicked or tapped).
 */
function toggleDefaultOptionName(selectElement, defaultOptionValue, nameWhenSelected, nameWhenNotSelected) {
	const defaultOption = selectElement.querySelector(`option[value=${defaultOptionValue}]`);
	
	defaultOption.innerText = (selectElement.value === defaultOptionValue) ? nameWhenSelected : nameWhenNotSelected;
}

// Після завантаження сторінки треба відобразити кількість карток:
window.addEventListener('load', filterCards, {once: true});