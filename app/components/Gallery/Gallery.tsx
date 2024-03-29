import { getProducts } from '@/app/services/productService'
import GalleryItem from './GalleryItem/GalleryItem'
import SearchBar from '../SearchBar/SearchBar'


const NO_ITEMS = "Sorry, we couldn't find any matching items. 😞"

interface GalleryProps {
  search: string
  title: string
}

const Gallery: React.FC<GalleryProps> = async ({ search, title }) => {
  const products = await getProducts(search, 0, 30) ?? { content: [] }

  const noItemsFound = () => {
    return <p className='w-full h-auto text-center mt-24 text-2xl'>{NO_ITEMS}</p>
  }

  return (
    <section className="w-full flex flex-col">
      <div className='w-full flex justify-center md:justify-end align-center md:right-0'>
        <SearchBar page="products" />
      </div>
      <h2 className="text-4xl text-blue-900 mb-16">{title}</h2>
      { products.content.length > 0 ? 
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 space-y-4">
          {products.content.map((product: Product) => <GalleryItem 
              key={product.id}
              src={product.thumbnail}
              title={product.title}
              description={product.description}
              />)}
      </div> : noItemsFound() }
    </section>
  )
}

export default Gallery