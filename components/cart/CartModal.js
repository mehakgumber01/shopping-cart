import React from "react";
import Footer from '../footer/index';
import styles from '../../styles/Modal.module.css';
import Image from 'next/image';

function Cart(props) {
  console.log("cartProducts", props.cartProducts)
    // let groupedProducts = [];
    // const { cartProducts } = props;

    // function plusProduct(product) {
    //     props.requestAddProduct(product);
    // }

    // function minusProduct(product) {
    //     props.requestMinusProduct(product);
    // }
    const hideModal=()=>{
          props.handleClose();
     }

    // let totalCheckoutPrice = 0;

    // if (cartProducts) {
    //     groupedProducts = groupBy(cartProducts, 'id');
    // }
  //  const handleIncrement=(prod)=>{
  //    props.handleIncrement(prod);
  //  }
  //   const handleDecrement=(prod)=>{
  //   console.log("11111")

  //   props.handleDecrement(prod);
  //  }


    return (
    <div id="myModal" className={props.show ? styles.modalOpen : styles.modalClose}>
    
    <div className={styles.modalContent}>
      <div style={{background: '#383737', padding: '9px'}}>
    <h4 style={{color: 'white'}}>My Cart</h4>
      <span className={styles.close}  onClick={hideModal}>&times;</span>
      </div>
      <div className={styles.cartContent}>
      {  props.cartProducts  && (props.cartProducts[0]===undefined || props.cartProducts.length===0) ? 
        "No items in the bag"
        :
       props.cartProducts && props.cartProducts.length>0 && props.cartProducts.map((prod, i)=>{
                 return ( 
                   <div key={i} className={styles.cartItem}>
                        <div className={styles.cartImage}>
                          <Image src={prod.imageURL}width="80" height="78" alt={prod.name}></Image>
                        </div>
                        <div className={styles.cartProductText}>
                          <div style={{'marginTop': '5px'}}>{prod.name} </div>
                          <div className={styles.updateCartItem}>
                          <div className={styles.btn} onClick={(e)=> props.handleDecrement(e,prod)}>-</div>
                          <span className={styles.noOfItems}>{prod.count>0 && prod.count}</span>
                       <div className={styles.btn} onClick={(e)=> props.handleIncrement(e, prod)}>+</div>
                       <span className={styles.prodPriceCalculation}>X {prod.count*prod.price}</span>
                       <span className={styles.prodPrice}>Rs. {prod.count*prod.price}</span>
                       </div>
                         
                         </div>  
       
                   </div>
                 
                 );      
        })
      }
      </div>
     
      <Footer cartModal={true} text="Start Shopping" />
      </div>
    
    </div>
  
 
    )
}

export default Cart;