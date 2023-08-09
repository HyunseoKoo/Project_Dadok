import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import NickNameModal from "./components/NickNameModal";

export default function MainPage() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            {isOpen && <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md">
              <NickNameModal 
                setIsOpen={setIsOpen}
              />
            </div>}
            <SearchBar />
        </div>
    );
}

/**
 * 1. [시작하기] 버튼을 누르면 메인 페이지로 이동
 * 2. 뒷 배경이 블러처리 되어 있고, 모달창으로 "이름을 입력해주세요" 나타내기
 * 3. 모달창의 [확인] 버튼을 누르면, 모달창이 닫히고 뒷 배경의 블러가 사라지게 하기
 * 4. 헤더 문구 부분에 입력한 이름 나타내기. ex) 읽고 기록하는 힘이 훗날 멋진 ㅇㅇ님을 만들어 줄거에요 :)
 */