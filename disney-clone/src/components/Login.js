import styled from "styled-components";
import { auth, provider } from "../firebase";
import { Link } from "react-router-dom";
const Login = (props) =>{

    return (
    <Container>
        <Content>
            <CTA>

            <Description>
               Get premium access to Industrial Training Opportunities that match your Profile.
            </Description>
               {/* <CTALogoOne src="images/cta-logo-one.svg" alt='' /> */}
              <Link to = '/SignUp'>
                 <Signup >Sign Up</Signup>
              </Link>
              
           
{/* 
               <CTALogoTwo src = "images/cta-logo-two.png" alt='' /> */}
            </CTA>
         <BgImage/>
        </Content>
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

const Content = styled.div`
 margin-bottom: 10vw;
 width: 100%;
 position: relative;
 min-height: 160vh;
 box-sizing: border-box;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 80px  40px;
 height: 100px;

`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
background-image: url("images/front-image.jpg");
top: 0;
left: 0;
right: 0;
z-index: -1
`;


const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
width: 100%;
display:flex;
flex-direction:column;
flex-wrap: wrap;
justify-content: center;
align-items:center;
margin-top: 0;
margin-right: auto;
margin-left: auto;
text-align: center;

`;

/* const CTALogoOne = styled.img`
margin-bottom : 12px;
background-color: none;
max-width: 700px;
min-height: 60px;
display: block;
width: 100%;
 
 `; */

const Signup = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0483ee; 
margin-bottom: 12px;
width: 50%;
letter-spacing: 1.5px;
font-size: 25px;
padding: 19.5px 100;
border: 1px solid transparent;
border-radius: 4px;

display: center;
justify-content: center;
align-items: center;
height: 100px;


&:hover{
    background-color :rgb(112, 136, 139);
     margin-top: 450px;;
}
`;


const Description = styled.p`
/* color: hsla(0, 0%, 95.3%, 1);
font-size: 14px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5; */
font-weight: bold;
color: #f9f9f9;
font-size: 18px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5;
font-weight: bold;

`;

/* const CTALogoTwo = styled.img`
margin-bottom : 20px;
max-width: 700px;
min-height: 60px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`;  */
 export default Login;