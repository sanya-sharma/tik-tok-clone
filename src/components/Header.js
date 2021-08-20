import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <div className="upload" />
          </Link>
          <img className="personal" src="https://media-exp1.licdn.com/dms/image/C5603AQGtDOSyB8b6bQ/profile-displayphoto-shrink_200_200/0/1593001925334?e=1632960000&v=beta&t=99xSD2RB70Kq60e18nTMN_1_29brgUbX5Pt5-6BZ0o0" alt="personal dp"/>
        </div>
      </div>
    </div>
  )  
}
  
export default Header
