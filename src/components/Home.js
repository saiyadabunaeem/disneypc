import React from 'react';
import styled from 'styled-components';
import ImageSlider from './imageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setmovies } from '../features/movie/movieslice';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore/lite";
import { useEffect } from 'react';
import { getFirestore, getDocs } from 'firebase/firestore/lite';
function Home() {
  const dispatch= useDispatch();
  useEffect(()=>{
    async function getCities(db) {
      const moviesCol = collection(db, 'Movies');
      const movieSnapshot = await getDocs(moviesCol);
      const movieList = movieSnapshot.docs.map(doc => {
        
        return {id: doc.id, ...doc.data()}
      });
      dispatch(setmovies(movieList));
    
    }
  const func = getCities(db);

            
            
  


  },[]);
  return (
    <Container>
         <ImageSlider/>
         <Viewers/>
        <Movies/>
    </Container>
  )
}

export default Home
const Container= styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    position: relative;
    overflow-x: hidden;
    &:before {
        background: url('./images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        
    }
`