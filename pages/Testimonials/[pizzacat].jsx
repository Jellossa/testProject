import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/post.module.css"

export default function Testimonials({ post, pizzacat, title, }) {
    const router = useRouter()
    return (
        <>
            <p>
                <Link href="/Testimonials">
                    <small>&laquo; click to go back to Testimonials</small>

                </Link>
                <h2>{title}</h2>
                <p>{post}</p>
                <p>{pizzacat}</p>
            </p>

            <button className={styles.button} onClick={() => router.push("/Testimonials")}> Does this button go to the blog or testimonials?</button>
        </>


    )


}

export async function getStaticPaths() {
    const resp = await fetch("https://raw.githubusercontent.com/Jellossa/Jellossa.github.io/main/blogtext.json")
    const data = await resp.json()

    const thePaths = data.posts.map(test => {
        return { params: { pizzacat: test.pizzacat } }
    })

    return {
        paths: thePaths,
        fallback: false


    }

}

export async function getStaticProps(context) {
    const resp = await fetch("https://raw.githubusercontent.com/Jellossa/Jellossa.github.io/main/blogtext.json")
    const data = await resp.json()
    const theTest = data.posts.filter(post => post.pizzacat === context.params.pizzacat)[0]

    return {
        props: {
            post: theTest.content,
            title: theTest.title,
            pizzacat: theTest.pizzacat
        }

    }

}
