import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <>
            <section 
              className="w-full h-screen bg-[url('../styles/books.jpg')] bg-cover bg-no-repeat absolute inset-x-0 inset-y-0 z-[-1]"
            />
            <main
              className="w-max mx-auto my-10 text-center leading-[4rem] group font-sans font-bold"
            >
                <div className="text-white text-[50px]">책이 전하는 영감,</div>
                <div className="text-white text-[50px]">기록을 통한 성장</div>
                <div className="text-white text-[20px] mt-[5px]">읽고 기록하는 힘이 훗날 멋진 나를 만들어 줄거에요 :)</div>
                <button onClick={()=>navigate('/main')}
                  className=" mx-auto flex items-center justify-center border-none rounded-[10px] mt-[20px] w-[130px] h-[50px] text-[1rem] bg-white text-blue-950 cursor-pointer shadow md:hover:border-darkblue-500 font-sans"
                >시작하기</button>
            </main>
        </>
    );
}

