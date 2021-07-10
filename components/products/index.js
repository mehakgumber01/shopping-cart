import React, { useState, useEffect, createContext } from "react";
import Header from '../header/header';
import Footer from '../footer/index';
import Image from 'next/Image';
import Select from 'react-select';
import ProductItem from './Product/ProductItem';
import { useWindowResize } from '../header/useWindowResize';
import Link from 'next/link';
import styles from '../../styles/Products.module.css';

const colourOptions=[
    {value: 'm', label: 'm'},
    {value: 'n', label: 'n'}
]
const customStyles = {
    menu: (provided, state) => ({
        ...provided,
       
        border:  "1px solid #BF2857",
        color: 'white',
        
      }),
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? 
        "1px solid #BF2857" : "1px solid #BF2857",
        backgroundColor: '#BF2857' ,
        color: 'white',
        
      }),
    option: (provided, state) => ({
      ...provided,
      border: '1px solid black',
      backgroundColor: '#BF2857' ,
      color: 'white',
    }),
    singleValue: (provided, state) => ({
        ...provided,
       
      color: 'white',
      
      })
}
export const ThemeContext = createContext();

function Plp(props) {


    const { products, categories  } = props;
    const [displayProp, setDisplayProp] = useState('');
    const { width } = useWindowResize();
   const [cartProducts, setCartProducts]= useState([]);
   const [itemCount, setItemCount]= useState(0);


    function showMenu() {
        if (width < 768) {
        if (displayProp === "block") {
            setDisplayProp('none');
        } else {
            setDisplayProp('block');
        }
     }
    }

    // useEffect(() => {
    //     props.requestProductsData({ cid: cid, categories: categories });
    // }, [cid]);
  const handleDecrement=(product)=>{
    
    console.log("product", product);

       // if(props.loggedInUser===boughtBy){
           if(cartProducts ){
               let cart=[];
            
                 let newA= cartProducts.map((item)=> { 
                     
                   
                   
                    if(item.id==product.id){
                     item.count= item.count-1;
    
    
                  } 
              
                  return item;
                }
             )
              newA.map((item)=> {
                console.log("newA", cart, item);

              if(item.count>0) {
               cart.push(item);
              }
            })
                 
               setCartProducts(cart);
           
           
           
        }
        // }

    }
    
    const handleIncrement=(product)=>{
       
      //  if(props.loggedInUser===boughtBy){
           if(cartProducts){
               if(cartProducts.length>0 && cartProducts[0]!==unde){
               let newA=[];
           
                    let duplicateItem=cartProducts.filter(item=> item.id===product.id);
            if(duplicateItem.length>0){
                let ind=duplicateItem.map(item=> item.id)
                 newA= cartProducts.map((item)=> { 
                     
                   
                   
                    if(ind==item.id){
                     item.count= item.count+1;
    
    
                  } 
                
                  return item;
                }
             )
     
               setCartProducts(newA);
                

            }   
    
    }
           
           
            else{
               
           }
        }
       //  }

    }

    const buyNow=(boughtBy, product)=>{
    if(props.loggedInUser===boughtBy){
        console.log("IIIIIIIIIII", product);
        
    //   let objIndex = cartProducts.findIndex((obj => obj.id == product.id));
       if(cartProducts  ){
          
           let newA=[];
       
                let duplicateItem=cartProducts.filter(item=> item.id===product.id);
        if(duplicateItem.length>0){
            let ind=duplicateItem.map(item=> item.id)
             newA= cartProducts.map((item)=> { 
                 
               
               
                if(ind==item.id){
                 item.count= item.count+1;


              } 
              return item;
            }
         )
 
           setCartProducts(newA);

        
       
    }
       
    
        else{
        setCartProducts([...cartProducts, {id: product.id, name: product.name, description: product.description, count: 1, 
            imageURL: product.imageURL, price: product.price}]); 
       }
    }
     }
     }
    
    
    let rows = products && products.length ? 
    (
        products && products.map((obj, i) => {
            return (
                <ProductItem key={obj.id} obj={obj}  buyNow={buyNow} />
            )
        }) 
    ):
        (
            <p className="no-items">Try again after some time.</p>
        )
    
    return       <ThemeContext.Provider cartProducts={cartProducts}>
    <div className="container">
    <Header cartProducts={cartProducts} handleIncrement={handleIncrement} 
      handleDecrement={handleDecrement}/>
        <main className={styles.productsSection}>
        {width<768 && <div className={styles.mobileDropdown}>
              <Select
                styles={customStyles}

          classNamePrefix="select"
        
          options={colourOptions}
        />
           </div> 
        }
           <div className={`${styles.productsContainer} ${width < 768 ? '' : 'productsContainer'}`}>
        
            <aside className={styles.sidebar}>   
                    <nav className="topnavside"> 
                
                        <ul className={width>768 ? "myLinks": "noLinks"} role="menu"  onClick={showMenu}>
                            <li role="menuitem" ><Link href='/products/fruits-and-veg' title="Fruits &amp; Vegetables" aria-label="Fruits &amp; Vegetables menu item"><a>Fruits &amp; Vegetables</a></Link></li>
                            <li role="menuitem"><Link href='/products/bakery-cakes-dairy' title="Bakery Cakes and dairy" aria-label="Bakery cakes and dairy menu item"><a>Bakery Cakes and Dairy</a></Link></li>
                            <li role="menuitem" ><Link href='/products/beverages' title="Beverages" aria-label="Beverages menu item"><a>Beverages</a></Link></li>
                            <li role="menuitem" ><Link href='/products/beauty-hygiene' title="Beauty and Hygiene" aria-label="Beauty and Hygiene menu item"><a>Beauty and Hygiene</a></Link></li>
                            <li role="menuitem" ><Link href='/products/baby' title="Baby Care" aria-label="Baby Care menu item"><a>Baby Care</a></Link></li>
                        </ul>
                    </nav>
            </aside>

            <div className={styles.productItems}>
            {rows}
            </div>

        </div>
        </main>

    
        <Footer  text="Copyright &copy; 2011-2018 sabka bazaar Grocery Supplies Pvt. Ltd"/>
    </div >
    </ThemeContext.Provider>
;
}

export default Plp;