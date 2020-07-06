import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:"black",
      marginTop:"60px",
      color:"white",
      fontSize:"50px",
      fontFamily:"Times New Roman",
      padding:'30px',
      
    },
    info: {
        fontSize:"18px",
        textAlign:"center",
        paddingBottom:'400px'

    }
   
  }));
  
export default function Jumbotron(){
    const style=useStyles()
    return(
        
        <div className={style.root}>
            <p><br></br>
                <strong>VacTrac</strong> helps you to keep a track of your vaccines and immunization shots.
                <br></br>
                <hr></hr>
            </p>
            <div className={style.info}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>

    )
}