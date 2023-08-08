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
        <form
          className='flex justify-center items-center mx-auto border-solid border-2 border-indigo-900 w-max'
        >
            <input 
              type='text'
              placeholder='책 제목을 입력해주세요.'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className='outline-none border-none w-[400px] h-[50px] pl-[20px] text-[1.3rem]'
            />
            <button 
              onClick={()=>onSearchBooks()}
              className='bg-white border-none text-[1.5rem] h-[50px] cursor-pointer'
            >검색</button>
        </form>
    );
}

