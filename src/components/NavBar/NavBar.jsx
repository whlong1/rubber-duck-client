import { Link } from 'react-router-dom'
import { useState } from 'react'
import duckLogo from '../../assets/rubberDuckLogo.png'
import MenuIcon from '@mui/icons-material/Menu'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
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
    {name: 'Login', link: '/login'},
    {name: 'Signup', link: '/signup'}
  ]

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
                <Link to={page.link} key={id}>
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
                </Link>
              ))}
          </Menu>
          </Box>
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
              {logOutSettings.map((setting, id) => (
                <Link to={setting.link} key={id} onClick={() => handleLogout(setting.link)}>
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
    <AppBar position="relative" style={{ backgroundColor: '#121212' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              {logInSettings.map((setting, id) => (
                <Link to={setting.link} key={id} onClick={() => handleLogout(setting.link)}>
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
  )
}

export default NavBar
