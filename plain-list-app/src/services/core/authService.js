import { TOKEN_PATH } from "../../shared/constants/endpoints";
import { publicRequest } from "./api";
import { getAuthTokenFromCache, setAuthTokenInCache } from "./authCache";

const getAuthToken = async () => {
    console.log('GetAuthToken > called');
    const authState = getAuthTokenFromCache();
    if (authState) {
        return authState;
    }
    try {
        const response = await publicRequest('post', TOKEN_PATH);
        console.log('getauthtoke --', response?.data);
        if (response.status === 200 && response?.data?.data?.token) {
            setAuthTokenInCache(response?.data?.data);
            return { token: response?.data?.data?.token };
        }
        return null;
    } catch (err) {
        console.error(`[getAuthToken] error: ${err}`);
        return null;
    }
};

export { getAuthToken }