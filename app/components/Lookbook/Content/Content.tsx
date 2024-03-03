import Image from 'next/image'

interface ContentProps {
    article: Article,
    hasHeader?: boolean,
    isReverse?: boolean
}

const Content = ({ article, hasHeader = true, isReverse = false }: ContentProps) => {
  return (
    <div className="flex flex-col justify-center align-center mx-2 md:mx-8 my-16">
        { hasHeader && <div className='w-full start my-8'>
            <h3 className="text-3xl mb-8 text-blue-900">{article.title}</h3>
            <span>{article.subtitle}</span>
        </div> }
        <div className={`flex flex-col ${!isReverse ? 'md:flex-row' : 'md:flex-row-reverse'} 
            justify-center align-center`}>
            <Image
                src={article.images[0].url}
                alt={article.images[0].name}
                width={800}
                height={800}
                className="w-full md:w-1/2 h-80 object-cover border rounded-md"
                placeholder="empty"
            />
            <div className="w-full md:w-1/2 mx-4 md:mx-8 text-start">
                <h4 className="my-4 mx-2 text-2xl text-blue-900">{article.content[0].header}</h4>
                <p className="my-4 mx-2">{article.content[0].body}</p>
            </div>
        </div>
    </div>
  )
}

export default Content