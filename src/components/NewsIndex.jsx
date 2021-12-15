import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import NewsService from '../modules/NewsService'
import { Grid } from 'semantic-ui-react'
//import axios from 'axios'

const NewsIndex = () => {

  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    NewsService.index().then(data => {
      setHeadlines(data)
    });
  }, []);

  const headlinesDisplay = headlines.map((headline) => { 
    return <NewsCard key={headline.index} headline={headline} />;
   })

   return <Grid data-cy="news-collection">{headlinesDisplay}</Grid>
   debugger 

}

export default NewsIndex



  // const [Searchlines, setSearchlines] = useState([]);

  // useEffect(() => {
  //   getSearchlines();
  // }, []);

  // const getSearchlines = async () => {
  //   const response = await axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&${query}&apiKey=9d36d2479caf4e08baa7abf4f05ed7c2` 
      
  //     );
  //   setSearchlines(response.data.articles);
  // };

   // const getHeadlines = async () => {
  //   const response = await axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=us&pageS&apiKey=9d36d2479caf4e08baa7abf4f05ed7c2` 
  //     );
  //   setHeadlines(response.data.articles);
  // };