import { FeatureGrid } from "../components/home/FeatureGrid"
import { ProductGrid } from "../components/home/ProductGrid"
import { Brands } from "../components/home/Brands"
import { prepareProducts } from "../helpers"
import { popularCelulares, recentCelulares } from '../data/initialData';

export const HomePage = () => {

  const preparedRecentProducts = prepareProducts(recentCelulares);
  const preparedPopularProducts = prepareProducts(popularCelulares);



  return (
    <div>
      <FeatureGrid/>

      <ProductGrid
      title= "Nuevos Productos"
      products={preparedRecentProducts}
      />

      <ProductGrid
      title= "Productos Destacados"
      products={preparedPopularProducts}
      />

      <Brands/>
    </div>
  )
}

