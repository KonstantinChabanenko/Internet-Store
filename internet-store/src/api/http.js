import axios from 'axios';
import resolve from './resolver';

const originURL = 'http://localhost:8080';

const getRequest = async (endpoint, urlParams) => {
    let querystring = '';

    if (urlParams) {
        Object.keys(urlParams).forEach((param, index) => {
            if (index === 0) {
                querystring += '?';
            } else {
                querystring += '&';
            }
    
            querystring += `${param}=${urlParams[param]}`;
        });
    }

    const response = await resolve(axios.get(
        originURL + endpoint + querystring,
        { withCredentials: true }
    ));

    return response;
};

const postRequest = () => {

};

export {
    getRequest,
    postRequest,
};
