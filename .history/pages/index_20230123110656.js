import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to my home page</h1>

        <div className={styles.grid}>
          <div className={styles.grid__container} style={{display:"grid"}}>
            <div className={styles.grid__item}>
              <ul>
                  <li>Create</li>
                  <li>Read</li>
                  <li>Update</li>
                  <li>Delete</li>
                </ul>
              </div>  
          </div>    
        </div>
        

        <a href='http://localhost:3000/about'>About Page</a>

        <a href='http://localhost:3000/grades'>Grades Page</a>

      </main>
    </>
  )
}
