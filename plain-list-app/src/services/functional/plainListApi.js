import { PLAIN_LIST } from "../../shared/constants/endpoints";
import { authRequest } from "../core/api";

const getPlainList = async () => {
    try {
        console.log('getPlainList > called');
        return await authRequest('post', PLAIN_LIST);
    } catch (err) {
        console.error(`[getPlainList] error: ${err}`);
        return null;
    }
};

export { getPlainList };