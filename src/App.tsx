import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { Show } from './componoments/pages/show';

type Route = {
  path: string;
  element: React.ReactElement;
};
function App() {
  return (
    <>
     <Routes>
        <Route path="/ok" element={<Show/>} />
    </Routes>
    </>

  );
}

export default App;
