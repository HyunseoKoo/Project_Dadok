import React from 'react';
import { styled } from 'styled-components';

export default function MainPage() {
    return (
        <>
            <S.BackgroundImg/>
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
    filter: opacity(80%);
`;

const S = {
    BackgroundImg
};