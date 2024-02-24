import Image from 'next/image'

interface GalleryItemProps {
    src: string,
    description: string
}

const ALT_TEXT = "gallery-item"
const LAYOUT = "responsive"

const GalleryItem: React.FC<GalleryItemProps> = ({ src, description }) => {
  return (
    <div>
        <Image
            src={src}
            alt={ALT_TEXT}
            layout={LAYOUT}
            width={300}
            height={300}
        />
        <p>{description}</p>
    </div>
  )
}

export default GalleryItem