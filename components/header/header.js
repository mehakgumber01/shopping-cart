// import React, { useState } from "react";
// // import '../../styles/header.scss';
// // import "../../styles/Layout.scss";
// import Model from "../model";
// import Link hrefom '../shared/Link/hrefnk'href// import Button from '../shared/Button/Button';
// import Image from 'next/image';
// //import "font-awesome/css/font-awesome.min.css";
import React, { useState } from "react";
import Link from 'next/link'
import Model from '../cart/CartModal'
import styles from '../../styles/Header.module.css';
import Image from 'next/image';
// import styles from 'styles-components';
import {useWindowResize } from './useWindowResize';
function Header(props) {
    // const { cartProducts } = props;
     const [show, setModel] = useState(false);
    const {width} = useWindowResize();
    let showModal = () => {
        setModel(true);
    };

    let hideModal = () => {
        console.log('handle close clicked');
        setModel(false);
    };

  // function showMobileMenu(e) {
  //   if (display === "block") {
  //     setDisplay('none');
  // } else {
  //     setDisplay('block');
  // }
 // }
 function handleIncrement(e,obj){

 props.handleIncrement(obj);
}
function handleDecrement(e,obj){
  console.log("2222")

 props.handleDecrement(obj);
}
  
      return (
      <div>
      <header className={styles.header}>
      <div className={styles.desktop}>
        <div className={`${styles.flexContainer} ${styles.webApp}`}>
          <div className={`${styles.flexItem}  ${styles.flexCenter}
           ${styles.itemCenter} ${styles.logo}`}>
            
              <Image src="/assets/images/logo.png"className={styles.logoImage} width="200" height="100" alt="sabka-bazar-logo" />
          </div>
          <nav role="navigation" aria-label="header navigation" className={`${styles.navBar} ${styles.headerNav}`}>
            <ul role="menu">
              <li role="menuitem">
                <Link href="/" aria-label="Home Menu Item" title="Home">Home</Link>             
                </li>
              <li role="menuitem">
                <Link href="/products/all" aria-label="Products Menu Item" title="Products">Products</Link>              </li>
            </ul>
          </nav>
          <div className={styles.flexItem} >
          <nav aria-label="site navigation" className={styles.topNav}>
            <ul role="menu" className={`${styles.flexTop} ${styles.flexContainer} ${styles.flexCenter}`}>
              <li role="menuitem">
                <Link href="/login" aria-label="SignIn Menu Item" title="SignIn">SignIn</Link>             </li>
              <li role="menuitem">
                <Link href="/Register" aria-label="Register Menu Item" title="Register">Register</Link>  
                          </li>
            </ul>
            </nav>
            <div className={`${styles.flexCart} ${styles.cartIcon} ${styles.flexContainer} ${styles.flexCenter} ${styles.flexEnd}`}>
              {/* <Button className={styles.btn-cart" aria-label={`${cartProducts ? cartProducts.length : 0} items cart`} onClick={showModal}> */}
              <Image src="/assets/images/cart.svg" width="30px" height="30px" alt="cart-logo" onClick={showModal}/>
              <span className={styles.headerCartIcon}>{props.cartProducts ? props.cartProducts.length>0 ? props.cartProducts.length : ""  : ""} {props.cartProducts ? props.cartProducts.length!==0 ? props.cartProducts.length === 1 ? 
              'item' : 'items' : "" : ""}</span>
              {/* </Button> */}
            </div>
            </div>
        </div>
        </div>
      </header>
      <Model show={show} cartProducts={props.cartProducts} handleIncrement={handleIncrement} 
      handleDecrement={handleDecrement} handleClose={hideModal} />

  </div>
      );
      
  }

export default Header;

// const NavBarStyling= styles.nav`
//     flex: 1;


// `;


// export default function Header() {

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Image src="/assets/images/logo.png"width="150" height="60" alt="sabka-bazar-logo" />
//       </div>

//       <NavBarStyling>
//         <ul>
//           <li>
//             <Link href='/events' >
//               <a className={styles.menuItem" >Events</a>
//             </Link>
//           </li>
         
//             <>
//               <li>
//                 <Link href='/events/add'>
//                   <a className={styles.menuItem">Add Event</a>
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={() => logout()}
//                   className='btn-secondary btn-icon'
//                 >
//                   Logout
//                 </button>
//               </li>
//             </>
//         </ul>
//       </NavBarStyling>
//     </header>
//   )
  
// }