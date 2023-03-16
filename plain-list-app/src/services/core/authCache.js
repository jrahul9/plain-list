const getAuthTokenFromCache = () => {
    console.log('getAuthTokenFromCache > called');
    const authState = JSON.parse(sessionStorage.getItem('AuthState'));
    if (isAuthenticated(authState)) {
        console.log('Cached token is valid');
        return authState;
    }
    return null;
}

const setAuthTokenInCache = ({token, expiryTime}) => {
    console.log('setAuthTokenInCache >', token);
    sessionStorage.setItem('AuthState', JSON.stringify({
        token,
        expiryTime: new Date(expiryTime)
    }));
}



const isAuthenticated = (authState) => {
    if (!authState || !authState.token) {
        return false;
    }
    if (authState.generatedAt) {
        const validTil = new Date(authState.generatedAt);
        validTil.setHours(validTil.getHours() + 3);
        if (validTil.getTime() > new Date().getTime()) {
            return true;
        }
    }
    return false;
}

export { getAuthTokenFromCache, setAuthTokenInCache };