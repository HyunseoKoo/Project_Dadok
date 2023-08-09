import axios from "axios";

export const KakaoApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: 'KakaoAK ' + process.env.REACT_APP_KAKAOBOOK_API_KEY
    }
});

function searchBookApi(query: string | undefined) {
    KakaoApi.get('/search/book', {
        params: {query: query}
    }).then((res)=>res.data)
};

export default searchBookApi;