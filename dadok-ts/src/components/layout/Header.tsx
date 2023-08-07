import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className='flex items-center justify-between w-full h-100px px-[100px] text-blue-950'>
            <div 
              className='text-[40px] font-bold cursor-pointer'
              onClick={()=>navigate('/')}
            >
                Dadok
            </div>
            <div className="text-[20px]">읽고 기록하는 힘이 훗날 멋진 나를 만들어 줄거에요 :)</div>
        </header>
    );
}

