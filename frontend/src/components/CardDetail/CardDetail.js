import React, { useState, useEffect } from 'react'
import { Container, Slide } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import './CardDetail.css'
import logo from '../../assets/images/blog-1.jpg';


const Arrow = (props) => {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />;

  return <div onClick={clickFunction}>{icon}</div>;
}

const SLIDE_INFO = [
  { backgroundImage: `url(${logo})`, title: 'Slide 1' },
  { backgroundImage: `url(${logo})`, title: 'Slide 2' },
  { backgroundImage: `url(${logo})`, title: 'Slide 3' },
  { backgroundImage: `url(${logo})`, title: 'Slide 4' },
  { backgroundImage: `url(${logo})`, title: 'Slide 5' },
];


function CardDetail() {
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 700);
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        onArrowClick('right');
      }
      if (e.keyCode === 37) {
        onArrowClick('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });


  return (
    <Container>
      <div className="card_details">
        <div className="card_details__flex">
          <div className="card_details__bilders">
            <div className="slider_images">
              <img className="slider_img" src={logo} />
              <img className="slider_img" src={logo} />
              <img className="slider_img" src={logo} />
              <img className="slider_img" src={logo} />
            </div>

            <div className="card_details__arrows">
              <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
              />

              <Slide in={slideIn} direction={slideDirection}>
                <div>
                  <CarouselSlide content={content} />
                </div>
              </Slide>

              <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
              />
            </div>
          </div>

          <div className="card_details__texts">
            <h2>Product Title</h2>
            <p>Price</p>
            <p className="description">Product Description</p>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default CardDetail
