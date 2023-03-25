import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom"
import { CardBlock } from '../CardBlock/CardBlock.jsx';



import "./Header.css"
export const Header=({isLogged,setIsLogged,userName,setName})=>{
  const handleClick = () => {
    setName("")
    alert("Вы покинули учетную")
  }
  return (
  <>
  <AppBar className='bar' color={`transparent`} position="static">
      <Toolbar>
        <Grid color={`white`} fontSize={`19px`} container> 
      <Link to="/">Search for books
      </Link>
        </Grid>
        
    <Grid container className='card' justifyContent={`flex-end`}>
    <CardBlock />
    </Grid>
      </Toolbar>
    </AppBar>
  
    </>
  
  )

}
