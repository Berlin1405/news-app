
import { useEffect,useState } from 'react'
import './App.css'
import News from './News';
import './index.css'

function App() {

  let [ articles , setArticles] = useState([]);


  useEffect(() => {
  },[])

  fetch("https://newsapi.org/v2/everything?q=microsoft&from=2024-03-03&apiKey=bacb8b8a7a71408693c6c9aecac6bf03")
  .then(Response => Response.json())
  .then(news => {
    setArticles(news.articles);
  })
  .catch(error => {
    console.log(error);
  });
 

  return (
    <div className="app">
      <header className='header'>
        <h1>News App</h1>
        <input type="text" placeholder='Search News'/>



      </header>

      <section className='news-articles'>

        {
          articles.map((article, index) => {
            return (
              <News key={index} article={article} />
            )
          })
        }


      <News />

      

      </section>
    
    </div>
    
  )
}


export default App
