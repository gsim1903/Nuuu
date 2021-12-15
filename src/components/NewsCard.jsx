import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = ({headline}) => {

  return (
    <Card
      //data-cy={`headline-${headline.id}`}
      //key={headline.index}
      header={headline.title}
      image={headline.urlToImage}
      meta={`By: ${headline.author} at ${headline.source.name}`}
      description={headline.description}
      extra={<Header as="h7">{`Published at ${headline.publishedAt}`}</Header>}
      href={headline.url}

    ></Card>
  )
}

export default NewsCard