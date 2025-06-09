/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import axios from "axios"
import { authApis, browseApis, cartApis } from './api'
const App = () => {
  const check = async () => {
    const response = await axios.get(cartApis.ping).then(res => res.data).catch(err => console.log(err))
    console.log(response);
  }
  useEffect(() => {
    check()
  }, [])
  return (
    <div>App</div>
  )
}

export default App