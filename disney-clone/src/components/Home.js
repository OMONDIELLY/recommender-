import styled  from "styled-components";
import ImgSlider from "./ImgSlider";

const Home = (props) =>{
    return(
    <Container>
       <ImgSlider />
    </Container>
    );

};

const Container = styled.main`
  position: relative;
  background: url('/images/home-background.png');
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  top: 72px;
  display : block;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background : url('/images/home-background.png') center 
    center /cover no repeat fixed;
    content : '';
    position: absolute;
    inset:  0 px;
    opacity: 1;
    z-index: -1;


  }
`;

export default Home;
