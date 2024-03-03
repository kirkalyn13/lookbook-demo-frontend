import { getArticlesByPath } from '@/app/services/articleService'
import Image from 'next/image'
import Content from './Content/Content'
import ImageContent from './Content/ImageContent'

const LOOKBOOK_PATH = "/lookbook"

const Lookbook: React.FC = async () => {
    const lookbookArticle = await getArticlesByPath(LOOKBOOK_PATH)

    return (
        <div className="my-16">
            <Content article={lookbookArticle[0]} />
            <ImageContent article={lookbookArticle[1]} />
            <Content article={lookbookArticle[2]} hasHeader={false} isReverse={true}    />
            <Content article={lookbookArticle[3]} hasHeader={false}/>
        </div>
    )
}

export default Lookbook