import React from 'react';
import { styled } from 'styled-components';

export default function MainPage() {
    return (
        <>
            <S.BackgroundImg/>
            <S.TextContainer>
                <p>책 속 문장이 큰 울림과 아이디어로 이어질 때가 있습니다</p>
                <p>기록을 통해 더 나은 내가 될 수 있는 기회를 잡으세요</p>
                <p>읽고 사고하는 힘이 훗날 멋진 나를 만들어 줄거에요 :)</p>
            </S.TextContainer>
        </>
    );
}

const BackgroundImg = styled.section`
    height: 100%;
    width: 100vw;
    background: url('/books.jpg');
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: opacity(88%);
`;

const TextContainer = styled.article`
    width: max-content;
    margin: 100px auto;
    & > p {
        color: white;
        font-size: 30px;
        font-family: 'Noto Sans KR', sans-serif;
    }
`

const S = {
    BackgroundImg,
    TextContainer
};