import Link from 'next/link'

const TITLE = "LookBook Demo"

const Header: React.FC = () => {
    const home = {
        pathname: "/",
        query: {
          q: ""
        }
      }

    return (
        <header className="w-100 m-4 z-10 pb-4 text-black flex flex-col justify-center align-center md:flex-row md:justify-between">
            <Link href={home}>
                <h1 className="text-center mb-4 md: mb-0 md:ms-4 text-3xl">{TITLE}</h1>
            </Link>
        </header>
    )
}

export default Header