import axios from "axios";

export const api_url = 'https://to-dos-api.softclub.tj/api/to-dos';

export async function get() {
    try {
        const {data} = await axios.get(api_url);
        return data.data
    } catch (error) {
        console.error(error);
    }
}
export async function deleteBlog(id) {
    try {
        await axios.delete(`${api_url}?id=${id}`);
    } catch (error) {
        console.error(error);
    }
}