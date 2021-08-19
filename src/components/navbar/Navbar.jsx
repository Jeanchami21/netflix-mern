import './navbar.scss'

import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

import { useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img src='images/Netflix_Logo_RGB.png' alt='' />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>Kid</span>
          <Notifications className='icon' />

          <div className='profile'>
            <img
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
              alt=''
            />
            <ArrowDropDown className='icon arrow' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
