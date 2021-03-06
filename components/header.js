import { React, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  Menu, MenuItem, Box, Avatar,
} from '@material-ui/core';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function header({ user, changeUserState }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  async function handleLogout() {
    const resp = await axios.post('/api/logout');
    console.log(resp);
    changeUserState(null);
    router.push('login');
  }
  const currentPath = router.asPath;
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ height: 95, marginBottom: '5%' }}>
        <Toolbar style={{ height: 95, backgroundColor: '#194b8c' }}>
          <span>
            <Typography variant="h6" noWrap>
              {'Welcome to '}
              <Link color="inherit" href="/">
                <a style={{ textDecoration: 'none', color: 'white' }}>One Stop Startup</a>
              </Link>
              {' '}
            </Typography>
          </span>
          {currentPath !== '/' && currentPath !== '/register' && currentPath !== '/confirmYMS' && (
            <Box style={{ marginLeft: '75%' }}>
              <Button
                color="inherit"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ textTransform: 'none' }}
                startIcon={<Avatar />}
                endIcon={<ArrowDropDownIcon />}
              >
                {user}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <Link href={`/user/profile/${user}`} passHref>
                    <a href="#" style={{ textDecoration: 'none' }}>
                      Profile
                    </a>
                  </Link>
                </MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
