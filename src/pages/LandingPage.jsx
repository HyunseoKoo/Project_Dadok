import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <>
            <S.BackgroundImg/>
            <S.TextContainer>
                <div>책이 전하는 영감,</div>
                <div>기록을 통한 성장</div>
                <div>읽고 기록하는 힘이 훗날 멋진 나를 만들어 줄거에요 :)</div>
                <S.StartButton onClick={()=>navigate('/main')}>시작하기</S.StartButton>
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
    /* filter: opacity(88%); */
`;

const TextContainer = styled.article`
    width: max-content;
    margin: 40px auto;
    text-align: center;
    line-height: 4rem;
    & > div {
        color: white;
        font-size: 50px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    & > div:nth-child(3) {
        color: white;
        font-size: 20px;
        font-family: 'Noto Sans KR', sans-serif;
        margin-top: 5px;
    }
`

const StartButton = styled.button`
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    width: 130px;
    height: 50px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    color: darkblue;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    &:hover {
        border: solid 2px darkblue;
    }
`

const S = {
    BackgroundImg,
    TextContainer,
    StartButton
};