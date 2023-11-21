const TOKEN_FROM_LOCALSTORAGE = localStorage.getItem("token");

async function deleteVisit(id) {
    try {
        const response = await axios.delete(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            headers: {
                'Authorization': `Bearer ${TOKEN_FROM_LOCALSTORAGE}`,
                'Content-Type': 'application/json',
            }
        });

        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
}

export default deleteVisit;