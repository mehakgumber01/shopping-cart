import React from 'react';
import Image from 'next/Image';
import { useWindowResize } from '../../header/useWindowResize';
import styles from '../../../styles/Product.module.css';

function ProductItem(props) {

    const { buyNow, obj } = props;
    const { width } = useWindowResize();

   
    function buyItem(e){
         let boughtBy="mahak.gumber"
         console.log("objjj", obj)
       props.buyNow(boughtBy, obj);

    }
    return (
        <div key={obj.id} className={styles.productItem}>
                <h4 variant="h2">{obj.name}</h4> 
                <div className={` ${styles.productContainer} flexContainer flexRowDirection item-wrapper ${width < 768 ? '': 'flexColumnDirection'}`}>
                    <div className={styles.productImage}>
                    {width>1024 ? 
                         <Image className={styles.productItemImage} src={obj.imageURL} width="auto" height="200" alt={obj.name} /> 
                    :
                    width > 768 ?
                    <Image className={styles.productItemImage} src={obj.imageURL} width="300" height="400" alt={obj.name} /> 
                     :
                     <Image className={styles.productItemImage} src={obj.imageURL} width="350" height="300" alt={obj.name} /> 

                     }         </div>
                    <div className={styles.productContent}>
                        <p>{obj.description}</p>
                        {width>1024 && <div className={styles.productOrder}>
                        <span className={styles.priceTag}>MRP Rs.{obj.price}</span>
                          <button className={styles.buyNowBtn} onClick={buyItem} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now</button>
                    </div>
                    }
                    </div>
                </div>
                {width<1024 &&  <button className={styles.buyNowMobileBtn} onClick={e=> buyNow(e)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now @ Rs.{obj.price}</button> 
              }  </div>
    );
}

export default ProductItem;