import { CONTENT_URL } from "../config/config"
import { buildUri } from "../utils/uriBuilder"
import { revalidate } from "../utils/constants"

const getContentEndpoint = (id: string = "", path: string = ""): string => CONTENT_URL + "/content" + path + `${id !== "" ? "/" + id : ""}`

export const getContentByID = async (id: string) => {
    try {
        const res = await fetch(buildUri(getContentEndpoint(id)), revalidate)  
        return await res.json() 
    } catch (err) {
        console.error(err)
    }
}