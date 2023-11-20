const TOKEN_FROM_LOCALSTORAGE = localStorage.getItem("token");

async function getVisits() {
	try {
		const response = await axios.get('https://ajax.test-danit.com/api/v2/cards', {
			headers: {
				'Authorization': `Bearer ${TOKEN_FROM_LOCALSTORAGE}`,
			}
		})
			.then(res => res.data);
		return response;
	} catch (err) {
		console.warn(err);
	}
}

export default getVisits;