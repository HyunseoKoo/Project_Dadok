import searchBook from "./api/kakaoApi";
import {useEffect} from 'react';

function App() {
  const bring = async () => {
   try {
    const res = await searchBook('2023 제14회 젊은작가상 수상작품집');
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
      <div>:)</div>
    </>
  );
}

export default App;
