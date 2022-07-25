import { Link } from 'react-router-dom'
import { useState } from 'react'
import duckLogo from '../../assets/rubberDuckLogo.png'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'

const pages = [
  {name: 'Browse', link: ''}, 
  {name: 'Posts', link: '/post'}, 
  {name: 'Topics', link: ''}
]
const settings = ['Profile', 'Logout']

const NavBar = ({ user, handleLogout }) => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget)
  }
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
     <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img 
              src={duckLogo} 
              height='50px' 
              alt='rubber duck' 
              sx={{ display: { xs: 'flex', md: 'none' } }} 
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Rubber Duck
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, id) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                    <Link to={page.link} style={{ textDecoration: 'none', color: 'white' }}>
                      <Typography textAlign="center">
                          {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <img 
              src={duckLogo} 
              height='50px' 
              alt='rubber duck' 
              sx={{ display: { xs: 'flex', md: 'none' } }} 
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Rubber Duck
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, uuid) => (
              <Link to={page.link} style={{ textDecoration: 'none', color: 'white' }}>
                <Button
                  key={uuid}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>



      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/post">Test Post</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
