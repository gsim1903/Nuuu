import React from 'react'
import { Header, Card, Image } from 'semantic-ui-react'

const NewsCard = ({ article }) => {

  return (
    <Card
      data-cy={`article-${article.id}`}
      key={article.index}
      image={article.urlToImage}
      header={article.title}
      description={article.description}
      meta={`By: ${article.author} at ${article.name}`}
      extra={<Header as="h6">{`Published at ${article.publishedAt}`}</Header>}
      href={article.url}

    ></Card>
  )
}

export default NewsCard