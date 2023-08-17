import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useGetSearchBooks } from '../query/get-bookList-query';

export default function SearchBar({keyword, setIsOpenBookListModal}:{keyword:React.MutableRefObject<string>; setIsOpenBookListModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    useGetSearchBooks(keyword.current)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: React.MutableRefObject<string>) => {
        const value = e.target.value;
        type.current = value;
    }

    const onSearchBooks = async (e: React.MouseEvent<HTMLButtonElement>)=> {
        e.preventDefault();
        try {
            setIsOpenBookListModal(true);
        } catch (err) {
            console.log('에러', err);
        }
    };

    return (
      <>
        <form
          className='flex justify-center items-center mx-auto px-[20px] border-solid border-2 border-indigo-900 w-max'
          >
            <input 
              type='text'
              placeholder='책 제목을 입력해 주세요.'
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

