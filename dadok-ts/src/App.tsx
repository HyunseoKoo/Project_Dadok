import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';

function App() {
  return (
    <>
     <div className="text-3xl">ts, tailwind로 개발</div>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;