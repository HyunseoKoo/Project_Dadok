import React, { useState } from 'react';
import {styled} from 'styled-components';

export default function SearchBar() {
    const [title, setTitle] = useState();

    console.log(title);

    return (
        <S.Container>
            <input placeholder='책 제목을 입력해주세요.' onChange={(e)=>setTitle(e.target.innerText)}/>
            <button>검색</button>
        </S.Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const S = {
    Container,
}