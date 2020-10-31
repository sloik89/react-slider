
import React, { useState, useEffect } from 'react';
import data from './data'
import './App.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

function App() {
  const [index,setIndex] = useState(0)
  const [people,setPeople] = useState(data)
  useEffect(()=>{
    if(index < 0){
      setIndex(people.length - 1)
    }
    if(index > people.length -1){
      setIndex(0)
    }
    let interval = setInterval(()=>{
      setIndex(index+1)
    },3000)
    return ()=>{
      clearInterval(interval)
    }
  },[index,people])
  return (
    <section className="section">
      <div className="section-title">
        <h1><span>our</span>reviews</h1>
        <div className="underline"></div>
      </div>
      <div className="articles-container">
        {
          people.map((elem,elemIndex)=>{
            const {id,image,title,quote,name} = elem
            let nameClass = 'nextSlide'
            if(index === elemIndex){
              nameClass = 'activeSlide'
            }
            if(elemIndex === index -1 || 
              index === 0 && elemIndex === people.length - 1){
                nameClass = 'lastSlide'
              }
            return <article className = {nameClass} key={id}>
              <img className ='article-img' src={image} alt=""/>
              <div className="person-info">
              <p className="name">{name}</p>
              <p className="job">{title}</p>
          <p className="text">{quote}</p>
              </div>
              <FaQuoteRight className='icon' />
            </article>
          })
        }
        <button className="prev" onClick ={()=>setIndex(index-1)}>
          <FiChevronLeft/>
        </button>
        <button className="next" onClick = {()=>setIndex(index+1)}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  )
}

export default App;
