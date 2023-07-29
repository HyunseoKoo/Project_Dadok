import React from 'react';
import SearchBar from '../components/SearchBar';
import { styled } from 'styled-components';

export default function MainPage() {
    return (
        <S.Container>
            <SearchBar />
        </S.Container>
    );
}

const Container = styled.div`
    padding: 0 10%;
`

const S = {
    Container
}