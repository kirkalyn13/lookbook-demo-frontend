import { PRODUCTS_URL } from "../config/config"
import { buildUri } from "../utils/uriBuilder"
import { revalidate } from "../utils/constants"

const getProductEndpoint = (id: string = "", path: string = ""): string => PRODUCTS_URL + "/products" + path + `${id !== "" ? "/" + id : ""}`

export const getProductByID = async (id: string) => {
    try {
        const res = await fetch(buildUri(getProductEndpoint(id)), revalidate)  
        return await res.json() 
    } catch (err) {
        console.error(err)
    }
}