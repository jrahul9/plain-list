import axios from 'axios';

class PlainListService {

    fetchPlainList = async (token) => {
        console.log('PlainListService > fetchPlainList')
        const data = await axios.post(`${process.env.APP_URL}/v1/plan-list`, {
            "session_id": process.env.SESSION_ID
        }, {
            headers: {
                'Api-key': process.env.API_KEY,
                'Auth-token': token,
            }
        });
        return data?.data ?? {};
    };
}

export default PlainListService;