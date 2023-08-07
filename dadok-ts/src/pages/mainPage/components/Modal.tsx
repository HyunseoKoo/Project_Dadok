export default function Modal({setIsOpen}: { setIsOpen : React.Dispatch<React.SetStateAction<boolean>> }) {
    const onChangeOpenState = () => {
        setIsOpen(false);
    }

    return (
        <section className=' text-center w-[400px] h-[180px] rounded-[10px] border-solid border-2 border-indigo-900 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='pt-[30px]'>닉네임을 입력해주세요</div>
            <input 
              alt='nickname'
              placeholder='nick name'
              className='block mx-auto outline-none w-[200px] h-[40px] mt-[20px] pl-[10px] border-solid border-2 border-indigo-600 rounded-[10px]'
            />
            <button
              onClick={onChangeOpenState}
              className="w-[50px] h-[30px] mt-[15px] bg-indigo-900 text-white rounded-[10px]"
            >확인</button>
        </section>
    );
}