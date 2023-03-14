import axios from 'axios';

const Key = "AIzaSyBQWEaIPcVt7_ule83bk4ihYMD2Z4lD1Jo";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 1,
        key: Key
    },
    headers: {}
});