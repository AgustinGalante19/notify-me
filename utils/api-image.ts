import { API_BASE_URL } from './API';

const apiImage = (name: string) => `${API_BASE_URL}/static/${name}.png`;

export default apiImage;
