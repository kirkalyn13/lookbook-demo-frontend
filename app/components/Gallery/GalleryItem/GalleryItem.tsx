import Image from 'next/image'

interface GalleryItemProps {
    src: string,
    title: string,
    description: string
}

const ALT_TEXT = "gallery-item"

const GalleryItem: React.FC<GalleryItemProps> = ({ src, title, description}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden pb-4">
        <Image
            src={src}
            alt={ALT_TEXT}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
        />
        <div className="mx-4 mt-4">
          <span className="text-xl font-semibold mb-2">{title}</span>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>
    </div>
  )
}

export default GalleryItem