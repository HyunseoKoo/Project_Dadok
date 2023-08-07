import { useState } from 'react';
import searchBookApi from '../api/KakaoApi';

export default function SearchBar() {
    const [title, setTitle] = useState('');
    const [searchedBooks, setSearchedBooks] = useState([]);

    const onSearchBooks = async () => {
        try {
            const res = await searchBookApi(title);
            if (res.status === 200) {
                setSearchedBooks(res.data.documents);
            }
        } catch (err) {
            console.log('에러', err);
        }
    };

    return (
        <div>
            
        </div>
    );
}

