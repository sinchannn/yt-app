import axios from 'axios';


const KEY='AIzaSyBaQcvjxzu6CUBJTt8TymYJPeMaY8sEMDE';

export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
