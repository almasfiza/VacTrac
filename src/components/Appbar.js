import React from 'react';
import {Form} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"black",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight:900,
    left:"50%",
    fontSize:"30px"
  },
  textbox: {
    height:"30px",
    width:"150px",
    borderRadius:"2px",
    marginLeft:"10px"
    

}
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: 'black', border:"1px solid white", elevation:'10 em'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            VacTrac
          </Typography>
          <Form.Group controlId="formGroupEmail">
            
          <Form.Control className={classes.textbox} type="email" placeholder="email@gmail.com" required />
          </Form.Group>
          <Form.Group>
          <Form.Control className={classes.textbox} type="password" placeholder="******" required />
          </Form.Group>
            
          <Button color="inherit" style={{fontFamily:"monospace"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}