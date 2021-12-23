import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import parse from 'html-react-parser'

const data = [
  {
    label: "Documentation &rarr;",
    description: "Find in-depth information about Next.js features and API.",
    href: "https://nextjs.org/docs"
  },
  {
    label: "Learn &rarr;",
    description: "Learn about Next.js in an interactive course with quizzes!",
    href: "https://nextjs.org/learn"
  },
  {
    label: "Examples &rarr;",
    description: "Discover and deploy boilerplate example Next.js projects.",
    href: "https://github.com/vercel/next.js/tree/master/examples"
  },
  {
    label: "Deploy &rarr;",
    description: "Instantly deploy your Next.js site to a public URL with Vercel.",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  }
]

const Home: NextPage = () => {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-16 py-0 flex flex-col justify-center items-center">
        <h1 className="m-0 leading-5 text-6xl">
          Welcome to <a className="text-blue-600 no-underline hover:underline focus:underline active:underline" href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="mx-0 my-16 leading-6 text-2xl">
          Get started by editing{' '}
          <code className="bg-gray-100 rounded-md p-3 text-base font-mono">pages/index.tsx</code>
        </p>

        <div className="grid sm:grid-cols-2">
          {data?.map((datum, idx) => (
          <a key={idx} href={datum.href} className="m-4 p-6 text-left no-underline rounded-lg max-w-xs border border-gray-200 hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600 active:text-blue-600 active:border-blue-600 ">
            <h2 className='mb-4 text-2xl'>{parse(datum.label)}</h2>
            <p className='m-0 text-xl leading-6'>{datum.description}</p>
          </a>
          ))}
        </div>
      </main>

      <footer className="flex justify-center items-center border-t border-gray-200 px-8 py-2">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className='flex flex-grow justify-center items-center'
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home