import React from 'react';
import Link from 'next/link';
import Image from 'next/Image';
import { useWindowResize } from '../useWindowResize';
import styles from '../../../styles/Category.module.css';

function Category(props){
    const { categories } = props;
    const { width } = useWindowResize();

    if(width<768){
       return (
           <>
             {categories && categories.map((item, i) => {
           console.log("image", item.key);
          return(
            i%2 === 0 ? 
            <div key={item.id} >
            <div ><Image  src={item.imageUrl} width="300" height="200" alt={item.key} />
            </div><div >
              <h2>{item.name}</h2>
              <p>{item.description.split('\n')}</p>
              <Link
              href={item.key}
              className="btn-title"
             
              >
                <a> Explore {item.key} </a>
                
              </Link>
            </div>
            </div>        
          : 
            <div key={item.id} >
            <div >
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <Link
              href={`${item.key}`}
              className="btn-title"
              title={item.name}
              >  
                <a>Explore {item.key}</a>
               </Link>
            </div>
              <div >  <Image src={item.imageUrl} width="500" height="300" alt={item.key} />
              </div>
            </div>
        )}) }
      

          </> 
       )

    }
    else{
    return (
        <>
         {categories && categories.map((item, i) => {
           console.log("image", item.key);
          return(
            i%2 === 0 ? 
            <div key={item.id}  className={`${styles.evenProductCard} ${styles.productCard} ${styles.productContainer}`}>
            <div className={styles.productsImage}><Image className={styles.productImage} src={item.imageUrl} width="300" height="200" alt={item.key} />
            </div><div className={styles.leftImage}>
              <h2>{item.name}</h2>
              <p>{item.description.split('\n')}</p>
              <Link
              href={item.key}
              className="btn-title"
             
              >
                <a> Explore {item.key} </a>
                
              </Link>
            </div>
            </div>        
          : 
            <div key={item.id} className={`${styles.oddProductCard} ${styles.productCard} ${styles.productContainer} ${styles.oddProductsContainer}`}>
            <div className={styles.leftText} >
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <Link
              href={`${item.key}`}
              className="btn-title"
              title={item.name}
              >  
                <a>Explore {item.key}</a>
               </Link>
            </div>
              <div className={styles.rightImage}>  <Image src={item.imageUrl} width="500" height="300" alt={item.key} />
              </div>
            </div>
        )}) }
        </>
    )
          }
}

export default Category;