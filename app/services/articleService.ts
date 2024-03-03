import { API_URL } from "../config/config"
import { buildUri } from "../utils/uriBuilder"
import { revalidate } from "../utils/constants"

const getArticlesEndpoint = (path: string = ""): string => API_URL + "/articles" + path

export const getArticlesByPath = async (path: string) => {
    try {
        const res = await fetch(buildUri(getArticlesEndpoint(path), revalidate))
        return await res.json() 
    } catch (err) {
        console.error(err)
    }
}