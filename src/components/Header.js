import * as React from 'react'
import { MyContext } from './context-api/MyContext';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './headerHoverMenu/menu';

function Header() {
  const { setAnchorElNav, anchorElNav } = useContext(MyContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="headerContainer"  >
      <Container maxWidth="xl" className='headerContainer--container' >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <div>
              <NavLink to="/" id='anasayfa'>
                {/* <img src={require("./images/Logo.png")} alt="..." width={120} height={62} /> */}
                LOGO
              </NavLink>
            </div>

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }} className='headerContainer--container__mobile' >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className='headerContainer--container__mobile--burgerbtn'>
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
              <div className='headerContainer--container__mobile--inhalt'>
                <NavLink to="/"  >
                  Homepage
                </NavLink>
                <NavLink to="/form-page">
                  Form Page
                </NavLink >
                <DropdownMenu />
                <NavLink to="/" >
                  Page
                </NavLink>
                <NavLink to="/">
                  Page
                </NavLink>

                <Button variant="outlined">
                  <NavLink to="/" className='headerContainer--container__mobile--inhalt--mobilePlatform'>
                    Page
                  </NavLink>
                </Button>
              </div>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "end" }}>
            <div>
              <NavLink to="/" >
                Homepage
              </NavLink>
              <NavLink to="/form-page">
                Form Page
              </NavLink >
              <DropdownMenu />
              <NavLink to="/" >
                Page
              </NavLink>
              <NavLink to="/" >
                Page
              </NavLink>

              <NavLink to="/">
                <Button variant="outlined">Page</Button>
              </NavLink>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header