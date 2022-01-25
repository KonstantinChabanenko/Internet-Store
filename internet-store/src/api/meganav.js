import { getRequest } from './http';

const getMeganavItems = () => getRequest('/meganav');

export default getMeganavItems;
