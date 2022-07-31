import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo-icon.svg'
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



const PublicNav = ({ handleOpenUserMenu, anchorElUser, pathname, handleCloseUserMenu, logInSettings, handleLogout }) => {
  return (

    <AppBar position="relative" style={{ backgroundColor: '#121212', padding: '0px 20px 0px 20px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box style={{ marginRight: '1rem' }} >
            <Link to='/' hidden={pathname === '/'}>
              <img
                src={logo}
                height='30px'
                alt='rubber duck'
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
              keepMounted
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
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

export default PublicNav