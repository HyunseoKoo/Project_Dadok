import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className='flex items-center w-full h-100px text-blue-950'>
            <div 
              className='ml-[100px] text-[40px] font-bold cursor-pointer'
              onClick={()=>navigate('/')}
            >
                Dadok
            </div>
        </header>
    );
}

