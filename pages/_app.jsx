import "../styles/global.css"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

    const router = useRouter()
    return (
        <>
            <div>
                <h1>Programming Pickup Lines</h1>
                <nav className="header-navish">
                    <ul>
                        <li>
                            <Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link>


                        </li>
                        <li>
                            <Link className={router.pathname == "/about" ? "active" : ""} href="/about">About the author</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/blog" ? "active" : ""} href="/blog">Blog stuff</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/Testimonials" ? "active" : ""} href="/Testimonials">Testimonials</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/weather" ? "active" : ""} href="/weather">weather</Link>
                        </li>
                    </ul>

                </nav>
            </div>
            <Component{...pageProps} />
            <p className="">Footer</p>
        </>

    )

}