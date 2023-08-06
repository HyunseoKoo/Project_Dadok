import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';

function App() {
  return (
    <>
     ts cra로 개발
     <RouterProvider router={router}/>
    </>
  );
}

export default App;