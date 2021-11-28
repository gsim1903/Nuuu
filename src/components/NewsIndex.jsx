import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import axios from 'axios'
import { Menu } from 'semantic-ui-react'


const NewsIndex = () => {

  const [Headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines();
  }, []);

  const getHeadlines = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${process.env.REACT_APP_NEWSKEY}` 
      
      );
    setHeadlines(response.data.articles);
  };

  const mainHeadlines = Headlines.map((article) => {
    return <NewsCard article={article} />;
  })

  return (
    <>
       <Menu data-cy="articles">{mainHeadlines}</Menu>
    </>
  )
}

export default NewsIndex
