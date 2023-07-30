import React from 'react';
import { styled } from 'styled-components';

export default function ThumbnailCard() {
    return (
        <S.Container>
            <S.Title>Dadok</S.Title>
        </S.Container>
    );
}

const Container = styled.section`
    background-color: #b9b9b9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 40px;
    font-weight: bolder;
    font-family: 'Edu SA Beginner', cursive;
    color: rgb(247, 233, 189);
`

const S = {
    Container,
    Title
}