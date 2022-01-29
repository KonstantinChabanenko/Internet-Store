import { getRequest } from './http';

const getProducts = (urlParams) => getRequest('/products', urlParams);

export default getProducts;
