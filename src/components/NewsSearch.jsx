import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input } from 'semantic-ui-react'

const NewsSearch = () => {

  const[data,setData]=useState(null)
  function getData (string)
  { 
    setData(string.targe.value)
    console.warn (string.target.value)}

  return (
    <Input action='Search' placeholder='Search...' onchange={getData} data/>
  )
}

export default NewsSearch
