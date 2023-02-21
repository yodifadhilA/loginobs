import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Login, Welcome } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Welcome/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router