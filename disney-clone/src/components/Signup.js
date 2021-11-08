import React from 'react';
import './Signup.css';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Axios from 'axios'

const Signup = (props)=> {
    
   

    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [RegistrationNumber, setRegistrationNumber] = useState('')
    const [userName, setuserName] = useState('')
    

    const submitRegistration = ()=>{
        Axios.post(" http://localhost:3001/api/insert", {

            Email:Email,
            password:password,
            RegistrationNumber:RegistrationNumber,
            userName: userName,

        }).then(()=> {
            alert('Success')
        });
    };
    return (
            <Container>
               <div className = "Signup">
           <Link to = '/'>
            <img 
            className ='Signup_logo'
            src = ''/>
            
            </Link>
               <Background/>
          
            <div className ='Signup_container'>
            <h1>Register</h1>
                
               <form>
                  <h5>Email</h5>
                  <input type = 'text' onChange = {(e)=>{
                     setEmail(e.target.value)
                  }}/>


                  <h5>Password</h5>
                  <input type = 'password' onChange = {(e)=>{
                     setPassword(e.target.value)
                  }}/>

                  
                  <h5>Registration Number</h5>
                  <input type = 'text' onChange = {(e)=>{
                     setRegistrationNumber(e.target.value)
                  }}/>

                  <h5>Username</h5>
                  <input type = 'text'onChange = {(e)=>{
                     setuserName(e.target.value)
                  }}/>

                  <button className ='register' onClick ={submitRegistration}>Sign up</button>
               </form>
            </div>
            
            

        </div>
        </Container>
    );
};



const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Background= styled.div`
height: 50%;
width: 50%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;

z-index: -1
`;

export default Signup








