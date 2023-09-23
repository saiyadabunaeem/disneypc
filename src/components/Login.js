import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  return (
    <Container>
        <CTA>
            <CTAone src='/images/cta-logo-one.svg'></CTAone>
            <Signup>Get All There</Signup>
            <Description>
            Filmgoers will need to remind themselves that the characters were created by a computer -- not exactly a medium we associate with this kind of love, tenderness and care.
            </Description>
            <CTAtwo src='/images/cta-logo-two.png'></CTAtwo>
        </CTA>
    </Container>
  )
}

export default Login
const Container= styled.div`
display: flex;
align-items: top;
justify-content: center;
position: relative;
height: calc(100vh - 70px);
padding: 0 calc(3.5vw - 5px);
&:before {
        position: absolute;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        background-image: url('/images/login-background.jpg');
        z-index: -1;
}

`
const CTA= styled.div`
max-width: 650px;
padding: 80px 40px;
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`
const CTAone= styled.img`

`
const Signup= styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
text-transform: uppercase;
text-align: center;
padding: 17px 0;
color: #f9f9f9;
border-radius: 5px;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
margin: 13px 0;
&:hover {
    background: #0483ee;


}



`
const Description= styled.div`
font-size: 11px;
line-height:1.5;
text-align: center;
letter-spacing: 1.5px

`
const CTAtwo= styled.img`
width: 100%;

`