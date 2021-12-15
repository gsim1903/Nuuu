import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input, Button } from 'semantic-ui-react'

const NewsSearch = ({ performSearch }) => {
  const [q, setQ] = useState(' ')

  return (
    <React.Fragment>
      <Input
        data-cy="search-field"
        placeholder='Search...'
        onChange={(event, data) => { 
          setQ(data.value)}} />
      <Button data-cy="search-button" type='submit' onCLick={() =>performSearch(q)}>
        Search
      </Button>
    </React.Fragment>
  )
}

export default NewsSearch