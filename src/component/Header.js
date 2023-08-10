import React from 'react'

import "./Header.css"

const Header = () => {
  return (
    <div className='Header'>
        <h2>Mini Blog</h2>
        <div className='menu-bar'>
            <li className='menu'><a href='/Home'>Home</a></li>
            <li className='menu'><a href='/Newpost'>New Post</a></li>
            <li className='menu'><a>Contact</a></li>
        </div>
    </div>
  )
}

export default Header