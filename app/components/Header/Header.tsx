"use client"
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import Link from 'next/link'

const TITLE = "LookBook"
const HOME = "HOME"
const PRODUCTS = "PRODUCTS"

const Header: React.FC = () => {
    const [ showMenu, setShowMenu ] = useState(false)
    const home = {
        pathname: "/",
      }

    const products = {
        pathname: "/products",
        query: {
          q: ""
        }
      }

    return (
        <header className="w-100 m-4 z-10 pb-4 text-black 
            flex flex-col justify-center align-center 
            md:flex-row md:justify-between">
            <div className="w-full flex flex-wrap justify-between align-center">
                <Link href={home}>
                    <h1 className="text-center items-center md:ms-4 text-3xl">{TITLE}</h1>
                </Link>

                <div className="md:hidden flex justify-center align-center">
                    <button 
                        className="text-blue-900"
                        onClick={() => setShowMenu(!showMenu)}>
                        <BiMenu className="text-4xl"/>
                    </button>
                </div>

                <ul className="hidden md:flex space-x-2 align-center items-center me-16">
                    <li><Link href={home} className="text-center mb-4 md: mb-0 md:ms-4 text-xl">{HOME}</Link></li>
                    <li><Link href={products} className="text-center mb-4 md: mb-0 md:ms-4 text-xl">{PRODUCTS}</Link></li>
                </ul>
            </div>

            { showMenu ?
                (<ul className="w-full space-y-2 text-center mt-4">
                    <li><Link href={home} className="text-center mb-4 md: mb-0 text-md">{HOME}</Link></li>
                    <li><Link href={products} className="text-center mb-4 md: mb-0 text-md">{PRODUCTS}</Link></li>
                </ul>)
            : null }

        </header>
    )
}

export default Header