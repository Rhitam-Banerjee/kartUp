/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import axios from "axios"
import { authApis, browseApis, cartApis } from './api'
import { Browsepage } from "./components"
import { Route, Routes } from 'react-router-dom'
const App = () => {
  // const check = async () => {
  //   const response = await axios.get(cartApis.ping).then(res => res.data).catch(err => console.log(err))
  //   console.log(response);
  // }
  // useEffect(() => {
  //   check()
  // }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Browsepage />} />
        <Route path='/test' element={<div>Test</div>} />
      </Routes>
    </div>
  )
}

export default App