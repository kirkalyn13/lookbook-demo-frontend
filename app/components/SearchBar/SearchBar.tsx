'use client'
import { FaSearch } from "react-icons/fa"
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";

interface SearchBarProps {
    page: string
}

const SearchBar: React.FC<SearchBarProps> = ({page = ""}) => {
    const router = useRouter();
    const searchParams = useSearchParams();  
    const [ q, setQ ] = useState("")
    
    useEffect(() => {
        router.replace(`/${page}?q=${q}`)
    },[ page, q, router ])

    return (
        <div
            className="bg-white my-8 md:mt-0 border border-black rounded-sm
                flex align-center justify-start
                hover:border-2 hover:border-orange-600">
            <FaSearch className="text-xl m-2 text-black"/>
            <input 
                className="text-xl focus:outline-none text-blue-900"
                type="text"
                placeholder="Type to search..."
                value={searchParams.get("q") ?? ""}
                onChange={(e) => setQ(e.target.value)}
                />
        </div>
    )
}

export default SearchBar