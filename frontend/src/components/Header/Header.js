import React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';




function Header() {
  return (
    <div className="header">
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Button variant="outlined" color="primary">
              Webshop
            </Button>
          </Link>

          <div className="grow" />

          <Link to="/order" className="margin__right">
            <Button variant="outlined" color="primary">
              Order
            </Button>
          </Link>
          <Link to='/checkout' className="margin__right">
            <Button variant="outlined" color="primary">
              Checkout
            </Button>
          </Link>
          <IconButton aria-label="show 17 new notifications" color="primary">
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default Header
