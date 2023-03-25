import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import {FaQuoteRight} from "react-icons/fa";
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import "./Employ.css"
function Employ() {
  const [people,setPeople] = useState([]);
  const [index,setIndex] = useState(0) 

  useEffect(()=>{
    async function fetchData(){
     const response = await axios.get(`https://63ceddf2fdfe2764c72c019f.mockapi.io/items/`);
   setPeople(response.data);
    
    }
    fetchData();
  },[]);

  useEffect(()=>{
      const lastIndex = people.length-1;
      if(index < 0) {
        setIndex(lastIndex)
      }else{
        if(index > lastIndex){
          setIndex(0)
        }
      }
  },[index,people]);

  useEffect(()=>{
      let slider = setInterval(()=>setIndex(prevState=>prevState+1),5000);
      return ()=>{
        clearInterval(slider)
      }
  },[index])

  return (
   <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span><div className='subtitle'>Победители Акции</div>
      </h2>
    </div>
    <div className='section-center'>
      {people.map((person,i)=>{
        const {name,avatar,id,createdAt,quoto} = person;
        let position = `nextSlide`;
        if(i === index){
          position = `activeSlide`;
        }
        if(i === index-1 || (index===0 && i ===person.length-1)){
          position = `lastSlide`
        }

        return  (
          <article className={position} key={id}>
              <img src={avatar} alt={name} className="person_img"/>
              <h4>{name}</h4>
              <div className='person_descr'>
              <p className='title'><b className='super'>Заходил</b> : {createdAt}</p>
              <p className='title'>{quoto}</p>
              </div>
              <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
        )
      })} 
      <button className='prev' onClick={()=>setIndex(prevState=>prevState-1)}>
        <FaChevronLeft />
      </button>
      <button className='next' onClick={()=>setIndex(prevState=>prevState+1)}>
        <FaChevronRight />
      </button>
    </div>  
   </section>
  );
}

export default Employ;



