import React from 'react'
import './Header.scss'
import logo from '../../netflix-logo-png-large.png'
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="" />

        <div className='anchor'>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>
        </div>

        <ImSearch />
    </nav>
  )
}

export default Header