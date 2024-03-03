type Article = {
    id: number
    title: string
    path: string
    subtitle: string
    content: Content[]
    images: Image[]
}

type Content = {
    id: number
    header: string
    body: string
}

type Image = {
    id: number
    name: string
    url: string
    caption: string
}