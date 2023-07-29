import axios from 'axios';

// 1. axios create로 근간이 되는거 만들거야!
export const KakaoApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: 'KakaoAK ' + process.env.REACT_APP_KAKAOBOOK_API_KEY
    }
});

// 2. axios get 함수 만들기
function searchBookApi(query) {
    return KakaoApi.get('/search/book', {
        params: {query: query}
    });
};

export default searchBookApi;