import axios from "axios";

export const KakaoApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: 'KakaoAK ' + process.env.REACT_APP_KAKAOBOOK_API_KEY
    }
});

function searchBookApi(query: string) {
    return KakaoApi.get('/search/book', {
        params: {query: query}
    });
};

export default searchBookApi;