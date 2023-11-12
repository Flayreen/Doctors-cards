async function getVisits() {
	try {
		const response = await axios.get('https://ajax.test-danit.com/api/v2/cards', {
			'Authorization': `Bearer ${TOKEN_FROM_LOCALSTORAGE}`
		})
			.then(res => res.data);
		return response;
	} catch (err) {
		console.warn(err);
	}
}

export default getVisits;