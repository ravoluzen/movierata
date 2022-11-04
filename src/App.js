import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import MovieDetail from './components/movie-detail/MovieDetail'
import PageNotFound from './components/page-not-found/PageNotFound'
import './App.scss';
import { APIKey } from './common/apis/movieApiKey'
import movieApi from './common/apis/movieApi'

function App() {

  /*useEffect(() => {
    const response = async () => {
      const res = await movieApi.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=tt1201607&Plot=full`)

      console.log('movie', res.data)
    }
    response()
}, [])*/

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
