const TOKEN_FROM_LOCALSTORAGE = "4f409526-c10c-4656-86c3-d67f70f5d665"

async function deleteVisit(id) {
    try {
        const response = await axios.delete(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            'Authorization': `Bearer ${TOKEN_FROM_LOCALSTORAGE}`
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default deleteVisit;