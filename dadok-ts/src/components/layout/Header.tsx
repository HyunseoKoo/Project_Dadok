import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const nickName = localStorage.getItem('nickName');

    return (
        <header className='flex items-center justify-between w-full h-100px px-[100px] text-blue-950'>
            <div 
              className='text-[40px] font-bold cursor-pointer'
              onClick={()=>navigate('/')}
            >
                Dadok
            </div>
            {nickName !== null && <div className="text-[20px]">읽고 기록하는 힘이 훗날 멋진 <span className="text-[1.5rem]">{nickName}</span> 님을 만들어 줄거에요 :)</div>}
        </header>
    );
}

