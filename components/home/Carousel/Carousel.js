import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    Dot,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";
  import Image from 'next/Image';
  import styles from '../../../styles/Corousel.module.css';
  import {useWindowResize} from '../useWindowResize';

let index=0;
function Carousel(props){
const {width}= useWindowResize();

    const { naturalSlideWidth, naturalSlideHeight, totalSlides, isPlaying, banners } = props;
    const carouselStyle = {
       'marginTop':  '6px',
       'boxShadow': '0px 6px 5px -3px #d8d7d7',
       'paddingBottom': '51px'
    }
    const mobileCorouselStyle={
      'fontSize': '12px',
       'marginRight' : '8px',
       'position': 'relative',
       'paddingBottom': '6rem'
    }
    return (
        <>
         <CarouselProvider
            style={width<768 ? mobileCorouselStyle : carouselStyle}
            naturalSlideWidth={naturalSlideWidth}
            naturalSlideHeight={naturalSlideHeight}
            banners={banners}
            totalSlides={totalSlides}
            isPlaying={isPlaying}
          >
              <div>
                <Slider aria-label="banner deals" >
                  {banners && banners.map((item,i) => {
                   index=i;
                   console.log("((((((",i);

                    return (
                      <Slide key={item.id} index={i} >
                        <Image
                      className={styles.corouselImage} src={item.bannerImageUrl} width="1000" 
                      height="400" 
                      alt={item.bannerImageAlt}/>
                      </Slide>
                    )})}
                </Slider>

                <div className={styles.slidesDot}>
                  {banners && banners.map((item,i)=> {
                      index=i;
                    return(
                      <Dot key={item.id} slide={i} aria-label={"Show slide " + item.order + " of 5"} 
                      className={styles.dot} />
                  )})}
                </div>
                 <ButtonBack aria-label="previous" className={styles.prev}>Back</ButtonBack>
                {index<banners.length && <ButtonNext aria-label="next" className={styles.next}>Next</ButtonNext>}
              </div>
            
          </CarouselProvider>
       
        </>
    )
}

export default Carousel;