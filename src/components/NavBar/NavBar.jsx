import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo-icon.svg'

import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

const NavBar = ({ user, handleLogout }) => {
  const { pathname } = useLocation()
  
  const pages = [
    { name: 'Browse', link: '/browse' },
    { name: 'New Post', link: '/posts/new' },
  ]
  const logOutSettings = [
    { name: 'My Profile', link: `/profiles/${user?.profile}` },
    { name: 'Profiles', link: `/profiles` },
    { name: 'Logout', link: '' },
  ]
  const logInSettings = [
    { name: 'Login', link: '/login' },
    { name: 'Signup', link: '/signup' }
  ]
  
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [toggleNav, setToggleNav] = useState(true)
  
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
  
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight-1) {
      setToggleNav(false)
    }
  }
  
  return (
    toggleNav ?
      <></>
      :
      user ?
      <AppBar style={{ position:'sticky', backgroundColor: '#121212', padding: '0px 20px 0px 20px' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ marginRight: '1rem' }}>
                <Link to='/' hidden={pathname === '/'}>
                  <img
                    src={logo}
                    height='24px'
                    alt='rubber duck'
                    style={{ opacity: '.85' }}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                  />
                </Link>
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
        :
        <AppBar position="sticky" style={{ backgroundColor: '#121212', padding: '0px 20px 0px 20px' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ marginRight: '1rem' }}>
                <Link to='/' hidden={pathname === '/'}>
                  <img
                    src={logo}
                    height='24px'
                    alt='rubber duck'
                    style={{ opacity: '.85' }}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                  />
                </Link>
              </Box>
              <Box sx={{ flexGrow: 0 }} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
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
  )
}

export default NavBar

