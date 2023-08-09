import { useEffect, useState } from 'react';
import searchBookApi from '../api/KakaoApi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useGetSearchBooks } from '../query/get-bookList-query';

export default function SearchBar() {
    const [title, setTitle] = useState('');
    const [searchedBooks, setSearchedBooks] = useState([]);

    const {isLoading, isError, data: searchedBookList} = useGetSearchBooks({title});

    const onSearchBooks = async (e: React.MouseEvent<HTMLButtonElement>)=> {
        e.preventDefault();

    };

    // 확인용
    useEffect(()=> {
        console.log(searchedBooks);
    }, [searchedBooks]);

    return (
        <form
          className='flex justify-center items-center mx-auto px-[20px] border-solid border-2 border-indigo-900 w-max'
        >
            <input 
              type='text'
              placeholder='책 제목을 입력해 주세요.'
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className='outline-none border-none w-[400px] h-[50px] text-[1.3rem]'
            />
            <button 
              onClick={onSearchBooks}
              className='bg-white border-none text-[1.5rem] h-[50px] cursor-pointer'
            ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    );
}

