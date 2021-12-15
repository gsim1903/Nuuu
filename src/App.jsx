import React, { useState, useEffect } from 'react'
import NewsSearch from "./components/NewsSearch"
import { Container, Menu, Header, Image } from 'semantic-ui-react'
import NewsIndex from './components/NewsIndex'
import NewsService from './modules/NewsService'
import logo from './nwn.png'


const App = () => {

  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    NewsService.index().then(data => {
      setHeadlines(data)
    });
  }, []);

  const performSearch = (query) => {
    NewsService.search(query).then(data => {
      setHeadlines(data)
    })
  }


  return (
    <>
      <Menu style={{ borderRadius: 0, background: '' }}>
        <Menu.Item>
          <Image src={logo} size='tiny' centered />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <NewsSearch performSearch={performSearch} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <Header as='h2' >News Wire Network</Header>
        <Header as="p" >Todays top stories from around the world</Header>
        <NewsIndex headlines={headlines} />
      </Container>
    </>
  )
}

export default App


//  <u1 data-cy="news-list">{newsList}</u1>