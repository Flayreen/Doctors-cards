const TOKEN_FROM_LOCALSTORAGE = localStorage.getItem("token");
async function getVisits() {
	try {
		const response = await axios.get('https://ajax.test-danit.com/api/v2/cards', {
			headers: {
				'Authorization': `Bearer ${TOKEN_FROM_LOCALSTORAGE}`,
			}
		})
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

export default getVisits;