import React from 'react';
import { styled } from 'styled-components';

export default function Header() {
    return (
        <S.Container>
            <S.Title>Dadok</S.Title>
        </S.Container>
    );
}

const Container = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    color: darkblue;
`;

const Title = styled.div`
    margin-left: 100px;
    font-size: 40px;
    font-weight: bolder;
`

const S = {
    Container,
    Title
}