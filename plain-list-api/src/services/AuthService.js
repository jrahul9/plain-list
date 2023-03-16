import axios from 'axios';

class AuthService {

    generateToken = async () => {
        console.log('AuthService > generateToken');
        const data = await axios.post(`${process.env.APP_URL}/v1/generate-token`, null, {
            headers: {
                'Api-key': process.env.API_KEY,
            }
        });
        return data?.data ?? {};
    };
}

export default AuthService;