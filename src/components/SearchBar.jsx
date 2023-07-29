import React, { useEffect, useState } from 'react';
import {styled} from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import searchBookApi from '../api/kakaoApi';

export default function SearchBar() {
    const [title, setTitle] = useState();
    const [book, setBook] = useState();

    useEffect(()=> {
        console.log(book);
    }, [title])

    const bring = async () => {
        try {
         const res = await searchBookApi('역행자');
         if (res.status === 200) {
           console.log(res);
         }
        } catch (err) {
         console.log('에러', err);
        }
       };
     
       useEffect(()=>{
         bring();
       },[]);

    return (
        <>
            <S.FormContainer>
                <S.Input
                    type='text'
                    placeholder='책 제목을 입력해주세요.'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <S.Button><FontAwesomeIcon icon={faMagnifyingGlass} /></S.Button>
            </S.FormContainer>
        </>
    );
}

const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: solid 3px darkblue;
    width: max-content;
`;

const Input = styled.input`
    outline: none;
    border: none;
    width: 400px;
    height: 50px;
    padding-left: 20px;
    font-size: 1.3rem;
`;

const Button = styled.button`
    background-color: white;
    border: none;
    font-size: 1.5rem;
    height: 50px;
    cursor: pointer;
`
const S = {
    FormContainer,
    Input,
    Button
}