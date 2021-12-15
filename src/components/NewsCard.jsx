import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = ({headline}) => {

  return (
    <Card
      //data-cy={`headline-${headline.id}`}
      //key={headline.index}
      image={headline.urlToImage}
      header={headline.title}
      meta={`By: ${headline.author} at ${headline.name}`}
      description={headline.description}
      extra={<Header as="h6">{`Published at ${headline.publishedAt}`}</Header>}
      href={headline.url}

    ></Card>
  )
}

export default NewsCard