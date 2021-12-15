import axios from 'axios'

const apiURL = "https://newsapi.org/v2/"
const headlineEndpoint = "top-headlines"
const searchEndpoint = "everything"
const NewsService = {
  async index() {
    const headlines = await axios.get(apiURL + headlineEndpoint, {
      params: {
        country: 'id',
        apiKey: process.env.REACT_APP_NEWSKEY
      },
    })
  
    return headlines.data.articles 
  },

  async search(query) {

  } 
}

export default NewsService



