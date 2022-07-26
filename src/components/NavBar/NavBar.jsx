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
import PersonIcon from '@mui/icons-material/Person';


const NavBar = ({ user, handleLogout }) => {
  const pages = [
    {name: 'Browse', link: '/browse'}, 
    {name: 'New Posts', link: '/posts/new'}, 
    
  ]
  const logOutSettings = [
    {name: 'Profile', link:`/profiles/${user?.profile}`},
    {name: 'Logout', link: ''},
    {name: 'Change Password', link:'/changePassword'},
    
  ]
  const logInSettings = [
    {name: 'Login', link: 'login'},
    {name: 'Signup', link: 'signup'}

  ]

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [toggle, setToggle] = useState (false)

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
  const handleToggle = () => {
    setToggle(true)
  }

  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      console.log('bottom');
      handleToggle()
    }
  }

  return (
    user ? 
    <>
     <AppBar position="relative" style={{ backgroundColor: '#121212' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ marginRight: '1rem'}} >
            <img 
              src={duckLogo} 
              height='50px' 
              alt='rubber duck' 
              sx={{ display: { xs: 'flex', md: 'none' } }} 
            />
          </Box>
          
              {pages.map((page, uuid) => (
                <Link to={page.link} key={uuid} style={{ textDecoration: 'none', color: 'white' }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                          {page.name}
                      </Typography>
                  </MenuItem>
                </Link>
              ))}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, uuid) => (
              <Link to={page.link} key={uuid} style={{ textDecoration: 'none', color: 'white' }}>
                <Button
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
                <Avatar alt="avatar">
                  <PersonIcon />
                </Avatar>
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
              {logOutSettings.map((setting, uuid) => (
                <Link to={setting.link} key={uuid} onClick={() => handleLogout(setting.link)}>
                  <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
    :
    <>
      <div hidden={toggle ? false : true}>
        <AppBar position="fixed" style={{ backgroundColor: '#121212' }}>
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
              </Menu>
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
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="avatar">
                      <PersonIcon />
                    </Avatar>
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
                  {logInSettings.map((setting, uuid) => (
                    <Link to={setting.link} key={uuid}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  )
}

export default NavBar
