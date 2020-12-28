import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'


const getAllPosts = async () => {
    const res = await axios.get(baseURL)
    return res.data
}
const getPostComments = async (id) => {
    const res = await axios.get(`${baseURL}/${id}/comments`)
    return res.data
}
const AIO = {
    getAllPosts,
    getPostComments
}
export default AIO