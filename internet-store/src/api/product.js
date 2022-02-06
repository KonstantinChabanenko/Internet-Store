import { getRequest } from './http';

const getProduct = (urlParams) => getRequest('/product', urlParams);

export default getProduct;
