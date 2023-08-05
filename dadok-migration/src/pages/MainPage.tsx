import React from 'react';
import SearchBar from '../components/SearchBar';
import { styled } from 'styled-components';
import ThumbnailCard from '../components/ThumbnailCard';

export default function MainPage() {

    return (
        <S.Container>
            <SearchBar />
            <S.ThumbnailContainer>
                {Array(6)   // 배열요소 갯수를 변수로 관리하기
                    .fill()
                    .map(() => (
                        <ThumbnailCard />
                ))}
            </S.ThumbnailContainer>
        </S.Container>
    );
}

const Container = styled.section`
    padding: 50px 20vw;
    background-color: #f9f9f9;
`;

const ThumbnailContainer = styled.section`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    grid-column-gap: 80px;
    grid-row-gap: 50px;
`;

const S = {
    Container,
    ThumbnailContainer,
}