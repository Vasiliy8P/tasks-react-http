import axios from "axios";

axios.defaults.baseURL = 'https://640d0e31b07afc3b0da6e662.mockapi.io';

export const AddMaterial = async values => {
    const response = await axios.post('/materials', values);
    return response.data;
}

export const GetMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
}

export const DeleteMaterials = async (id) => {
    const response = await axios.delete(`/materials/${id}`);
    return response.data;
}