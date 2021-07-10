import React from "react";
import Header from '../header/header'
import Footer from "../footer";
import Category from './Category/Category';
import Carousel from './Carousel/Carousel';
import Anchor from '../shared/Anchor/Anchor';
import styles from '../../styles/Home.module.css';
import { useWindowResize } from './useWindowResize';



function Home(props) {
  const { banners, categories, cartProducts } = props;
  const  { width } = useWindowResize();


  if(width<768){
    return (
      <div>
      <Header cartProducts={cartProducts} />
      <main >
       <Carousel
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        banners={banners}
        totalSlides={banners && banners.length}
        isPlaying={true}
      />
         
      <Category categories={categories} /> 
    hiiiii
      </main> 
      {/* <Footer /> */}
    </div>
    );
  }
  else{

  return (
    
    <div className={styles.container}>
      {/* <Anchor className="skip-main" to="#main" title="Skip to main content">Skip to main content</Anchor> */}
      <Header cartProducts={cartProducts} />
      <main className={styles.main} id="main">
      {/* <AutoRotatingCarousel
        open={handleOpen.open}
        banners={banners}
        totalSlides={banners && banners.length}
        isPlaying={true}
        style={{ position: "absolute" }}
      >  */}
      <Carousel
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        banners={banners}
        totalSlides={banners && banners.length}
        isPlaying={true}
      />
         
      <Category categories={categories} />
       
      </main>
      <Footer  text="Copyright &copy; 2011-2018 sabka bazaar Grocery Supplies Pvt. Ltd"/>
    </div>
  );
    }
}

export default Home;
