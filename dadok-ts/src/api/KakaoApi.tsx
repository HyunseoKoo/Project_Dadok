import axios from "axios";

export const KakaoApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: 'KakaoAK ' + process.env.REACT_APP_KAKAOBOOK_API_KEY
    }
});

function searchBookApi(props: string) {
    return KakaoApi.get('/search/book', {
        params: {query: props}
    })
    .then((res)=>res.data)
};

export default searchBookApi;