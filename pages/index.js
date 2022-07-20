import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Projects from '../src/components/projects.tsx'
import Blog from '../src/components/blog.js'
import Carousel from '../src/components/carousel.js'
import ActiveItem from '../src/components/carousel.js'
import InactiveItem from '../src/components/carousel.js'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>The Portfolio</title>
        <meta name="description" content="Da One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row items-center justify-center h-screen">
        <h1 className="no-underline m-0 leading-normal text-6xl text-left">
          I am
          <span className="block typewriter">Next.js!</span>
        </h1>

        <div className={styles.grid}>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>About &rarr;</h2>
            <p>Social media links and Resume</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Professional Work &rarr;</h2>
            <p>
              Stuff that I do for the moneys $$.
            </p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Personal Projects &rarr;</h2>
            <p>Long term stuff that I do in my free time</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Where I try to make my thoughts more cohesive</p>
          </a>
        </div>
      </main>

      <article id="car" className="flex flex-row">
        <div id="car_left" className="bg-white flex-1" />

        <div id="proj_work_grp" className="bg-black">
          <div id="personal" className="">
            <h1 className="my-8 text-5xl text-center">
              Personal
            </h1>

            <Projects className="projectsppp" />
            <Blog />

            <div id="work" className="hidden">

            </div>
          </div>
        </div>

        <div id="car_right" className="bg-white flex-1" />
      </article>


      <article id="about" className="flex bg-gray-400 " style={{ height: '25vh' }}></article>
      <footer className="p-8">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Father Time
        </a>
      </footer>
    </div>
  )
}
