import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  Slider from 'react-slick'

const ImgSlider = (props) => {
        let settings = {
         dots: true,
         speed: 500,
         Infinite:true,
         SlidesToShow: 1,
         SlidesToScroll: 1,
         autoplay: true,

    };
    return (

        <Carousel {...settings}>

        <div>
        <h3>1</h3>
        </div>

        <div>
        <h3>2</h3>
        </div>

        <div>
        <h3>3</h3>
        </div>
        </Carousel>
    );
};

const Carousel = styled(Slider)`
margin-top: 20px;

 & > button {
    opacity: 0;
    height : 100%;
    width : 5vw;
    z-index : 1;
 
   }

`;


export default ImgSlider;