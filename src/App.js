import searchBook from "./api/kakaoApi";
import {useEffect} from 'react';
// import SearchBar from "./components/SearchBar";
import MainPage from "./pages/MainPage";
import { styled } from "styled-components";
import Header from "./components/layout/Header";

function App() {
  const bring = async () => {
   try {
    const res = await searchBook('역행자');
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
    <S.Container>
      {/* <SearchBar /> */}
      <Header />
      <MainPage />
    </S.Container>
  );
}

export default App;

const Container = styled.section`
  margin: 0;
`;

const S = {
  Container
}