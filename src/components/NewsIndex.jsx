import React from 'react'
import NewsCard from './NewsCard'
import { Grid} from 'semantic-ui-react'
//import axios from 'axios'

const NewsIndex = ({headlines}) => {
  const headlinesDisplay = headlines.map((headline) => { 
    return <NewsCard key={headline.index} headline={headline} />;
   })

   return <Grid data-cy="news-collection">{headlinesDisplay}</Grid>

}

export default NewsIndex


