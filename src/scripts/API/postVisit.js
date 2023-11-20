const TOKEN_FROM_LOCALSTORAGE = "4f409526-c10c-4656-86c3-d67f70f5d665";

async function postVisit(body) {
    try {
        const response = await axios.post('https://ajax.test-danit.com/api/v2/cards', body, {
            headers: {
                'Authorization': `Bearer ${TOKEN_FROM_LOCALSTORAGE}`,
            }
        })
        return response;
    } catch (err) {
        console.warn(err);
    }
}

export default postVisit;