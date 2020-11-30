import React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
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
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Tooltip title="Login">
            <IconButton color="primary">
              <LockIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton color="primary">
              <LockOpenIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton color="primary">
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default Header
