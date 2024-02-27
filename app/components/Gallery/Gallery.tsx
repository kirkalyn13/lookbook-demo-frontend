import { getProducts } from '@/app/services/productService'
import GalleryItem from './GalleryItem/GalleryItem'

const Gallery: React.FC = async () => {
  const products = await getProducts()

  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 space-y-4 md:mx-8">
        {products.map((product: Product) => <GalleryItem 
          key={product.id}
          src={product.thumbnail}
          title={product.title}
          description={product.description}
          />)}
    </section>
  )
}

export default Gallery