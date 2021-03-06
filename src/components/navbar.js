import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  NavLink
} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));

const styles = {
  fontWeight: "bold",
  textDecoration: "none",
  color: "white"
}

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blog
           </Typography>
           <Button color="inherit"><NavLink style={styles} activeStyle={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "red"
          }} to="/register">Register</NavLink></Button>
          <Button color="inherit"><NavLink style={styles} activeStyle={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "red"
          }} to="/login">Login</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Navbar;