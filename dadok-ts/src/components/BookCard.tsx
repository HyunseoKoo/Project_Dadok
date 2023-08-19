import { useState } from "react";
import { Documents } from "../query/get-bookList-query";

function BookCard ({books}:{books:Documents}) {
    const [listAddModal, setListAddModal] = useState(false);

    // useEffect(() => {
    //     console.log(listAddModal);
    // }, [setListAddModal])

    return (
        <section className='mx-auto border-solid border-2 border-indigo-900 bg-[white] rounded-[10px] w-[600px] h-[300px] my-[20px] py-[10px] overflow-hidden'>
            <div className='flex gap-10 w-[100%] px-[5%]'>
                <section className="w-[160px]">
                    <img 
                        alt='썸네일' 
                        src={books.thumbnail} 
                        className="w-[160px] h-[210px]" 
                    />
                    <button 
                      className=" w-[160px] h-[35px] border-solid border-2 border-indigo-900 rounded-[5px] mt-[10px] hover:bg-yellow-400"
                      onClick={(prev)=>setListAddModal(!prev)} // 작동 안함
                    >
                        {listAddModal === true ? '이미 추가된 책' : '내 서재에 추가'}
                    </button>
                </section>
                <section>
                    <div className="font-bold text-[25px]">{books.title}</div>
                    <div><span className="font-semibold">작가</span> {books.authors}</div>
                    <div><span className="font-semibold">출판사</span> {books.publisher}</div>
                    <div><span className="font-semibold">출간</span> {books.datetime.split('T', 1)}</div>
                    <div className="h-[130px] mt-[20px] overflow-y-auto">{books.contents}</div>
                </section>
            </div>
        </section>
    );
}

export default BookCard;