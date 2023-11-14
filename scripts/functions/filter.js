export function filterCards(selector) {
	const filterInputValue = document.querySelector('#filter-input').value;
	const filterStatusValue = document.querySelector('#filter-status').value;
	const filterUrgencyValue = document.querySelector('#filter-urgency').value;
	
	const shownCardsCount = document.querySelector('.shown-cards-count');
	const domCards = document.querySelector(selector).children;
	
	
	// domCards.length
	let filteredCount = 0;
	
	[...domCards].forEach( card => {
		const urgency = card.dataset.urgency;
		const status = card.dataset.status;
		const purpose = card.querySelector('.card-header').innerText;
		const description = card.querySelector('.card-body').innerText;
		
		if (
			( filterUrgencyValue === 'any' || filterUrgencyValue === urgency )
			&&
			( filterStatusValue === 'any' || filterStatusValue === status )
			&&
			`${purpose} ${description}`.toLowerCase().includes(filterInputValue.toLowerCase())
		) {
			card.style.display = 'block';
			filteredCount++;
		} else {
			card.style.display = 'none';
		}
	});
	
	shownCardsCount.innerText = (filteredCount === domCards.length) ? `(${domCards.length})` : `(${filteredCount} з ${domCards.length})`;
}

export function filtersReset() {
	document.querySelector('#filter-input').value = '';
	document.querySelector('#filter-status').value = 'any';
	document.querySelector('#filter-urgency').value = 'any';
	filterCards('.mainblock .container');
}
