import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = (props) => {

  const [news, setNews] = useState([])
  const fetchNews = async () => {
    const response = await axios.get('http://reqres.in/api/users?per_page=5')
    setNews(response.data.data)
  }

  useEffect(() => { 
    fetchNews()
  },[]);
  
  const newsList = news.map((news) => {
    return <li key={news.id}>{`${news.name} ${news.title}`} </li>
  })
  
  return (
    <Card
      image='https://editorial.fxstreet.com/images/Markets/Currencies/Digital%20Currencies/Bitcoin/bitcoins-52602600_Large.jpg'
      header='DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017'
      meta={`By: ${'Lorenzo Stroe'} at ${'FXStreet'}`}
      description='DBS Bank of Simmie has just announced the launch of a digital asset exchange featuring Bitcoin, Ethereum, Bitcoin Cash, and XRP and several fiat cu'
      extra={<Header as='h6'>`Published at ${"2020-12-10T20:29:20Z"}`</Header>}

    />
  )
}

export default NewsCard




