import Image from 'next/image'

interface ImageContentProps {
    article: Article
}

const ImageContent = ({ article }: ImageContentProps) => {
  return (
    <div className="flex flex-col justify-center align-center my-16 mx-2 md:mx-8">
        <h3 className="w-full text-center text-2xl text-blue-900 my-4">{article.title}</h3>
        <div className='w-full flex justify-center align-center'>
            <Image
                src={article.images[0].url}
                alt={article.images[0].name}
                width={1000}
                height={1000}
                className="w-auto h-1/3 object-cover border rounded-md"
                placeholder="empty"
            />
        </div>
        <span className='w-full text-center italic my-2'>{article.images[0].caption}</span>
    </div>
  )
}

export default ImageContent