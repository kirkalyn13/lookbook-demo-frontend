import Image from 'next/image'

interface GalleryItemProps {
    src: string,
    title: string,
    description: string
}

const ALT_TEXT = "gallery-item"

const GalleryItem: React.FC<GalleryItemProps> = ({ src, title, description}) => {
  return (
    <div className="bg-gray-200 h-192 overflow-hidden pb-4
          flex flex-col justify-center align-center opacity-0 animate-fade-in">
        <Image
            src={src}
            alt={ALT_TEXT}
            width={500}
            height={500}
            className="w-full h-80 object-cover border-b-8 border-orange-600"
            placeholder="empty"
        />
        <div className="mx-4 mt-4 h-32 space-y-4">
          <span className="text-2xl text-blue-900 font-semibold mb-2">{title}</span>
          <p className="text-black text-xl line-clamp-2">{description}</p>
        </div>
    </div>
  )
}

export default GalleryItem