import { Documents } from "../query/get-bookList-query";

function BookCard ({books}:{books:Documents}) {
    return (
        <section className='mx-auto border-solid border-2 border-indigo-900 bg-[white] rounded-[10px] w-[600px] h-[300px] mb-[20px] flex justify-center items-center'>
            <div className='text-[40px]'>{books.title}</div>
        </section>
    );
}

export default BookCard;