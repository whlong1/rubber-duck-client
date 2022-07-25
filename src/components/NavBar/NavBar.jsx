import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = ({ user, handleLogout }) => {
  const [navBar, setNavBar]= useState(true)

  const toggleNavBar=()=>{
    setNavBar(!navBar)
  }

  return (
    <>
      {navBar ?
        <nav className='navBar'>
          <ul>
            <button onClick={toggleNavBar} style={{background: 'transparent', color:'white'}}>•••</button>
          </ul>
        </nav>
      :
        <nav>
          {user ?
            <ul>
             <li>Welcome, {user?.name}</li>
             <li><Link to="/profiles">Profiles</Link></li>
             <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
             <li><Link to="/changePassword">Change Password</Link></li>
             <li><Link to="/login">Log In</Link></li>
             <li><Link to="/signup">Sign Up</Link></li>
           </ul>
          :
          
          <ul>
          <li>Welcome, {user?.name}</li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
          }
        </nav>
      }
    </>
  )
}

export default NavBar
