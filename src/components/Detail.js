import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import db from '../firebase';
import { getDoc, doc} from 'firebase/firestore/lite';


function Detail() {
  const { id }= useParams();
  const [detailData, setDetailData] = useState({});

  
   useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const docRef = doc(db, "Movies", id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        if (docSnap.exists()) {
          setDetailData(docSnap.data());
          
        } else {
          console.log("No such document in Firebase 🔥");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchMovieData();
  }, [id]);
  
  return (
    <Container>
        <Bg>
           <img src={detailData.BackgroundImg
} alt='movie'/>
        </Bg>
        <ImgTitle>
        <img src={detailData.TitleImg} alt='img'/>
        </ImgTitle>
        <Controls>
          <Playbtn>
            <img src='./images/play-icon-black.png'/>
            <span>Play</span>
          </Playbtn>
          <Trailerbtn>
          <img src='./images/play-icon-white.png' alt='img'/>
            <span>Trailer</span>
          </Trailerbtn>
          <Addbtn>
          <span>+</span>
          </Addbtn>
          <Groupwbtn>
          <img src='./images/group-icon.png'/>
          </Groupwbtn>
        </Controls>
        <Title>
        {detailData.Title} 
        <br/>
        <p style={{marginTop:'1rem'}}>{detailData.Genres}</p>
        </Title>
        <SubTitle>
        {detailData.Description}
        </SubTitle>
    </Container>
  )
}

export default Detail
const Container= styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    position: relative;
    

`
const Bg= styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.8;
        img {
            width: 100%;
            height: 100%;
            object-fit:cover;


        }

`
const ImgTitle= styled.div`
width: 35vw;
min-width: 200px;
margin-top: 16px;
img {
  width: 100%;
  height:100%;
  object-fit: contain;
}


`
const Controls= styled.div`
display: flex;
align-items: center;
margin-top: 16px;

`
const Playbtn= styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
letter-spacing: 1.8px;
cursor: pointer;
border: none;
padding: 0 24px;
margin-right: 22px;
text-transform: uppercase;
&:hover {
  background: rgb(199, 199, 199);
  
}



`
const Trailerbtn= styled(Playbtn)`
background: rgb(0, 0, 0, 0.3);
border: 1px solid rgb(199, 199, 199);
color: rgb(199, 199, 199);
text-transform: uppercase;


`
const Addbtn= styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgb(0, 0, 0, 0.3);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }



`
const Groupwbtn= styled(Addbtn)`
background-color: rgb(0, 0, 0);


`
const Title= styled.div`
margin: 16px 0;
color: rgb(249, 249, 249);
font-size: 15px

`
const SubTitle= styled.div`
color: rgb(249, 249, 249);
line-height: 1.4;
`