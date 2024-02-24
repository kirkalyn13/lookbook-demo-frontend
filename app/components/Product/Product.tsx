import Image from 'next/image'

interface ImageProps {
    src: string,
    description: string
}

const ALT_TEXT = "product"
const LAYOUT = "responsive"

const Product: React.FC<ImageProps> = ({ src, description }) => {
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

export default Product