import axios from "axios";
import { getAuthTokenFromCache } from "./authCache";

const base_url = 'http://localhost:3001/api';

const authRequest = async (method, url, payload, header) => {
    console.log(`authRequest: ${method} ${url}`);
    try {
        const authToken = getAuthTokenFromCache();
        return await axios({
            method,
            url: `${base_url}/${url}`,
            data: {
                token: authToken.token, 
            },
        });
    } catch (err) {
        return err;
    }
}

const publicRequest = async (method, url, payload, header) => {
    console.log(`publicRequest: ${method} ${url}`);
    try {
        return await axios({
            method,
            url: `${base_url}/${url}`,
            payload,
        });
    } catch (err) {
        return err;
    }
}


export { authRequest, publicRequest }