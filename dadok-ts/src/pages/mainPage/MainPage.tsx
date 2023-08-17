import { useEffect, useRef, useState } from "react";
import SearchBar from "../../components/SearchBar";
import NickNameModal from "./components/NickNameModal";
import BookListModal from "./components/BookListModal";
import BookCard from "../../components/BookCard";
import { useGetSearchBooks } from "../../query/get-bookList-query";

let title:string;

export default function MainPage() {
    const [isOpenNickNameModal, setIsOpenNickNameModal] = useState(true);
    const [isOpenBookListModal, setIsOpenBookListModal] = useState(false)
    const keyword = useRef(title);
    const {data: searchedBookList} = useGetSearchBooks(keyword.current);

    // 확인용
    useEffect(()=>{
      console.log(searchedBookList);
    }, [searchedBookList])

    return (
        <>
            {isOpenNickNameModal && <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md">
              <NickNameModal 
                setIsOpenNickNameModal={setIsOpenNickNameModal}
              />
            </div>}
            <SearchBar 
              keyword={keyword}
              setIsOpenBookListModal={setIsOpenBookListModal}
            />
            {searchedBookList && isOpenBookListModal && 
              <div className="absolute top-0 left-0 w-full h-100% backdrop-blur-md backdrop-sepia">
                {searchedBookList.documents.length > 0 && <BookListModal 
                  setIsOpenBookListModal={setIsOpenBookListModal}
                />}
                {searchedBookList && searchedBookList?.documents.map((booklist)=>(
                  <BookCard books={booklist} />
                ))}
              </div>
            }
        </>
    );
}

/**
 * 1. [시작하기] 버튼을 누르면 메인 페이지로 이동
 * 2. 뒷 배경이 블러처리 되어 있고, 모달창으로 "이름을 입력해주세요" 나타내기
 * 3. 모달창의 [확인] 버튼을 누르면, 모달창이 닫히고 뒷 배경의 블러가 사라지게 하기
 * 4. 헤더 문구 부분에 입력한 이름 나타내기. ex) 읽고 기록하는 힘이 훗날 멋진 ㅇㅇ님을 만들어 줄거에요 :)
 */