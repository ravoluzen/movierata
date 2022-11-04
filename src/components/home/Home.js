import React, { useEffect } from 'react'
import MovieListing from '../movie-listing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'Harry'
  const friends = 'friends'

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(friends))
  }, [dispatch])

  return (
    <div className='banner-img'>
      <MovieListing />
    </div>
  )
}

export default Home