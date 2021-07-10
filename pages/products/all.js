import Products from '../../components/products/index';
import products from '../../server/products/index.get.json'

function ProductPage() {
  return <Products products={products}  loggedInUser="mahak.gumber"/>
}
  
  export default ProductPage

