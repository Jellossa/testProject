import Link from 'next/link';

export default function Home() {


    return (
        <>
            <h1>Welcome to Programming pickup lines</h1>
            <p>A website devoted to composing pickup lines based on programming</p>
            <Link href="/about">About the author</Link>
        </>)
}


// export async function getStaticProps() {
//     const resp = await fetch("")


// }