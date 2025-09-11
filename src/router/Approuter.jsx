import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../core/Main'
import Home from '../shared/components/Home'

export default function Approuter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main/>}>
            <Route path='/' element={<Home/>}></Route>
        </Route>

    </Routes>
    </BrowserRouter>
  )
}
