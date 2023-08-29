import Link from "next/link"

export default function Testimonials(props) {
    return (
        <>
            <h2>Testimonials</h2>
            {props.poster.posts.map((post, index) => {
                return (<div key={index}>
                    <h3>
                        <Link href={`/Testimonials/${post.pizzacat}`}>{post.title}</Link>
                    </h3>
                    <p>{post.content}</p>
                    <p>{index}</p>
                    <hr />



                </div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const resp = await fetch("https://raw.githubusercontent.com/Jellossa/Jellossa.github.io/main/blogtext.json")
    const data = await resp.json()

    return {
        props: {

            poster: data
        }
    }
}