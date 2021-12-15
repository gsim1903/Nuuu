import axios from 'axios'



const apiURL = "https://newsapi.org/v2/"
const headlineEndpoint = "top-headlines"
const searchEndpoint = "everything"
const NewsService = {
  async index() {
    const headlines = await axios.get("https://newsapi.org/v2/top-headlines?apiKey=9d36d2479caf4e08baa7abf4f05ed7c2&country=se")
      
  
    return headlines.data.articles 
  },

  async search(query) {

  } 
}

export default NewsService



// apiURL + headlineEndpoint, {
  //   params: {
  //     country: 'gb',
  //     apiKey: "9d36d2479caf4e08baa7abf4f05ed7c2"
  //   },
  // })