import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import axios from 'axios'
import { Menu } from 'semantic-ui-react'
import NewsSearch from './NewsSearch'

const NewsIndex = () => {

  const query  = "bitcoin"

  const [Headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines();
  }, []);

  const getHeadlines = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=9d36d2479caf4e08baa7abf4f05ed7c2` 
      
      );
    setHeadlines(response.data.articles);
  };

  const [Searchlines, setSearchlines] = useState([]);

  useEffect(() => {
    getSearchlines();
  }, []);

  const getSearchlines = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&${query}&apiKey=9d36d2479caf4e08baa7abf4f05ed7c2` 
      
      );
    setSearchlines(response.data.articles);
  };

  const mainHeadlines = Headlines.map((article) => {
    return <NewsCard article={article} />;
  })

  const mainSearchlines = Searchlines.map((article) => {
    return <NewsCard article={article} />;
  })


  return (
    <>
       <Menu data-cy="articles">{mainHeadlines}</Menu>
       <Menu data-cy="articles">{mainSearchlines}</Menu>
    </>
  )

}

export default NewsIndex
