/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { Book } from '../Book/Book'
import Loader from '../Loader/Loader';
import Employ from '../Empolyess/Employess';
import "./HomePage.css";
import axios from 'axios';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import debounce from 'lodash.debounce';
import { Footer } from '../footer/Footer';
import { PopUp } from '../PopUp/Categories.jsx';
const API_BASE = "https://www.googleapis.com/books/v1/volumes?"
const API_KEY = "AIzaSyAB_NXSpvN4JZu2EsCqL7GwBwInEigJzAo"
    export const HomePage = () => {
        const [items,setItems] = useState([]);
        const [search,setSearch] = useState("")
        const [found,setFound] = useState();
        const [isLoading,setLoading] = useState(true);
        const [error,setError] = useState(false);
        const [str,setStr] = useState("");
        const [startIndex,setStartIndex] = useState(0);
        const [category,setCategory] = useState(0);
        const searching = search ? `q=${search}` : "Programming";
        let maxResults = 12;
        const sort = category ? `${category}` : "newest";

        async function getBooks(){
            try{
                const {data} = await axios.get(API_BASE+`q=${searching}+inpublisher&orderBy=${sort}&key=${API_KEY}&startIndex=${startIndex}`+`&maxResults=${maxResults}`);
                setItems(data.items);
                setFound(data.totalItems);
                setLoading(false)
            }catch(e){
                setError(true)
            }finally{
                setLoading(false)
            }
        };
        
        const uptadeSearchValue = useCallback(
         debounce((search)=>{
         setSearch(search)
         },1000),[]);

         const onChangeInput = (event) => {
         setStr(event.target.value)
         uptadeSearchValue(event.target.value)
          };

        useEffect(()=>{
         setLoading(true)
          getBooks();
          setLoading(false)
        },[search,startIndex,uptadeSearchValue,category]);

        if(isLoading){
            return <Loader/>
        };

        if(error){
            return <ErrorPage/>
        };

       const handlePrevClick = () => {
        setStartIndex(startIndex-maxResults);
        window.scrollTo(0,0);
       };
       const handleNextClick = () => {
        setStartIndex(startIndex + maxResults);
        window.scrollTo(0,0);
       };
        return(
            <>
            <div className='parent'>
         <input className='home_input' placeholder='Поиск...' value={str} onChange={onChangeInput}></input>
        <PopUp value={category} onClickCategory={(i)=>setCategory(i)}  />
          </div>
           <div className='home_found'><p>Всего товаров : {found}</p></div>
            <div className='home'>
              {items.map((book,i)=>(
                <Book book={book} key={i}/>
              ))} 
            </div>
            <div>
            <button className='home_button-prev' onClick={handlePrevClick} disabled={startIndex===0}><b>Назад</b></button>
            <button className='home_button-next' onClick={handleNextClick}>Следующая</button>
            </div>
            <div className='employ'>
            <Employ/>
            </div>   
            <Footer/>
            </>
        )
    };
      