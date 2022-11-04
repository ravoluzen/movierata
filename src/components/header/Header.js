import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import profileIcon from '../../images/profile-icon.png'
import './Header.scss'

const Header = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    if(query === '') alert('Enter a query to search')
    e.preventDefault()
    console.log(query)
    dispatch(fetchAsyncMovies(query))
    dispatch(fetchAsyncShows(query))
    setQuery('')
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to='/'></Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={query}
            placeholder='Search movie or show'
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit'> 
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={profileIcon} alt="user" />
      </div>
    </div>
  )
}

export default Header