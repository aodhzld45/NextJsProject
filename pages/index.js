import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

import Hero from "../components/home/hero";
import Animation from "../components/home/animation";

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>현석이의 포트폴리오</title>
        <meta name="description" content="오늘부터 다시 시작합니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-grey-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>


    </Layout>
  )
}
