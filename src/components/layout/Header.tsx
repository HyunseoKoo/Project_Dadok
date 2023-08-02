import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.Title onClick={()=>navigate('/')}>Dadok</S.Title>
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
    font-family: 'Edu SA Beginner', cursive;
    cursor: pointer;
`

const S = {
    Container,
    Title
}