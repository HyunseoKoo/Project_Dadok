import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useGetSearchBooks } from '../query/get-bookList-query';

export default function SearchBar() {
    const keyword = useRef('');

    const [searchedBooks, setSearchedBooks] = useState<{}[]>([]);
    const {isLoading, isError, data: searchedBookList} = useGetSearchBooks(keyword.current);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: React.MutableRefObject<string>) => {
        const value = e.target.value;
        type.current = value;
    }

    const onSearchBooks = async (e: React.MouseEvent<HTMLButtonElement>)=> {
        e.preventDefault();
        try {
            searchedBookList && setSearchedBooks(searchedBookList?.documents)
        } catch (err) {
            console.log('에러', err);
        }
    };

    useEffect(()=>{
        // if(isLoading) {
            console.log(searchedBooks)
        // }
    }, [searchedBooks])

    return (
      <>
        {isLoading && <div>로딩중!</div>}
        <form
          className='flex justify-center items-center mx-auto px-[20px] border-solid border-2 border-indigo-900 w-max'
          >
            <input 
              type='text'
              placeholder='책 제목을 입력해 주세요.'
            //   value={title}
            //   onChange={(e)=>setTitle(e.target.value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=> onChange(e, keyword)}
              className='outline-none border-none w-[400px] h-[50px] text-[1.3rem]'
              />
            <button 
              onClick={onSearchBooks}
              className='bg-white border-none text-[1.5rem] h-[50px] cursor-pointer'
              ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
      </>
    );
}

