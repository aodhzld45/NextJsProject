import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>현석이의 포트폴리오</title>
        <meta name="description" content="오늘부터 다시 시작합니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
    <h1>안녕하세요</h1>

    </Layout>
  )
}
