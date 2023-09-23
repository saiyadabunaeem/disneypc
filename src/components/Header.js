import React, {useEffect} from 'react';
import styled from 'styled-components';
import { selectN,selectE,selectP,login, logout } from '../features/user/userslice';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Link, Navigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
export default function Header() {
    const dispatch= useDispatch();
    const userN= useSelector(selectN);
    const userp= useSelector(selectP);
    const Navigate=useNavigate();



    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            {user && dispatch(login({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
    
    
            }));}
        })



    })
    const signIn= async ()=> {
        const sign= await signInWithPopup (auth, provider);
        let user= sign.user
        dispatch(login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL


        }));
        Navigate('/');



    }
    const signOut=  ()=> {
        auth.signOut().then(()=>{
            dispatch(logout());
            Navigate('/login');
        })
        
        



    }
    
  return (
    <Nav>
        <Logo src='./images/logo.svg'/>
        {!userN ?<Link to='/logIn' style={{textDecoration: 'none', color:'white'}}><Login onClick={signIn}>Log in</Login></Link> :
        <>
        
        
        
         <Navmenu>
            <a>
                <img src='./images/home-icon.svg'/>
                <span>Home</span>
            </a>
            <a>
                <img src='./images/search-icon.svg'/>
                <span>Search</span>
            </a>
            <a>
                <img src='./images/watchlist-icon.svg'/>
                <span>Watchlist</span>
            </a>
            <a>
                <img src='./images/original-icon.svg'/>
                <span>Original</span>
            </a>
            <a>
                <img src='./images/movie-icon.svg'/>
                <span>Movies</span>
            </a>
            <a>
                <img src='./images/series-icon.svg'/>
                <span>Series</span>
            </a>

        </Navmenu>
        <Userimg src='./images/user.png' onClick={signOut} >

        </Userimg>
        
        </>
        
        
        
        
        }
       



    </Nav>
  )
}
const Nav= styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    justify-content: space-between;
    overflow-x: hidden;


`
const Logo= styled.img`
    width: 80px;

`
const Navmenu= styled.div`
    display: flex;
    flex:1;
    margin-left: 20px;
    align-items: center;
    a {
        display:flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        
        img {
            height:20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            position: relative;
            &:after {
                content: '';
                background: #FFFFFF;
                width: 100%;
                height: 3px;
                position: absolute;
                bottom: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }

    }
`
const Userimg= styled.img`
width:48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
background:white;


`
const Login= styled.div`
border-radius: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgb(0, 0, 0, 0.6);
transition: all 0.2s ease 0s;
text-decoration: none;
&:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
    cursor: pointer;

}


`





