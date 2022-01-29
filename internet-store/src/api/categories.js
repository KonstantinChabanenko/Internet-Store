import { getRequest } from './http';

const getCategories = () => getRequest('/categories');

export default getCategories;
