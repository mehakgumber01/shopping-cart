import Page from '../components/Page';
import Home from '../components/home/index';
import categories from '../server/categories/index.get.json';
import banners from '../server/banners/index.get.json';

function IndexPage() {
  return  <Home categories={categories} banners={banners}/>
}
  
  export default IndexPage