/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart,removeItemFromCart, selectSome } from "../../Redux/cart/reducer.js";


import "./Book.css";
import { useNavigate } from "react-router-dom";
import { setCurrentBook } from "../../Redux/book/reducer";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";



export const Book = ({book}) => {

  const navigate = useNavigate();
const dispatch = useDispatch();

const items = useSelector(selectSome);

const isItemIn = items.some(el=>el.id === book.id);

const handleClick= (e)=>{
  e.stopPropagation();
  if(isItemIn){
    dispatch(removeItemFromCart(book.id));
  }else{
    dispatch(setItemInCart(book))
  }
}

const showFullBook=()=>{
 dispatch(setCurrentBook(book));
  navigate(`./app`)
}

const imageBook =  book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail;




  return (
    <Card style={{backgroundColor:`#8b80a80b`}} >
      <CardContent >
      <img onClick={showFullBook} className="book_image" src={imageBook}/>
        <Typography style={{color:`white`,marginBottom:8,fontSize:15.8,height:60}} variant="book2" component="h4">{book.volumeInfo.title}</Typography>
        <Typography style={{fontSize:14.1,fontFamily:"Verdana",fontWeight:700,color:`white`,maxHeight:80}} variant="subtitle2" component="h3">Издатель : {book.volumeInfo.publisher}</Typography>
  
        <Typography className="price" style={{color:`white`,fontSize:18,height:40}} variant="button text" component="h2">{book.volumeInfo.authors}</Typography>
       
        </CardContent> 
      <CardActions>
        <Button style={{marginLeft:5}} variant="contained" onClick={handleClick}>{isItemIn ? "Убрать" : "Добавить"}</Button>
      
      </CardActions>
      



    </Card>
  );
};


