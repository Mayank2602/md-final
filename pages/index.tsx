import Head from 'next/head'
import Link from 'next/link';
import Header from '../Components/Header'
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import styles from "./style.module.css"
interface Props{
  posts: [Post];
}

export default function Home({ posts }: Props) {

  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Mailer Daemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0 mt-4 mb-5">
   
     <header className="mb-16 group">
  <h1 className="max-w-xl font-serif text-4xl md:text-6xl">
    <span className="inline-flex h-20 pt-2 pl-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change">
      Mailer Daemon
    </span>
    <span className={`${styles.cursor} box-border inline-block w-1 h-10  -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change`}></span>
  </h1>
  <div className="text-xl  p-2  md:text-1.5xl"> It's easy and free to post your thinking on any topic and connect
            with millions of readers.</div>
</header>
        <img
          className="hidden h-32 md:inline-flex lg:h-full bg-inherit"
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/medium-3324353-2768644.png"
          alt=""
        />
      </div>
      {/* posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map(post => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="" />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">{post.description} by {post.author.name}</p>
                  </div>
                  <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  //turns a homepage into server side rendering
  const query = `*[_type == "post"]| order(_createdAt desc){
    _id,
    title,
    author -> {
      name,
      image
    },
      description,
      slug,
      mainImage
  }`

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  }

}