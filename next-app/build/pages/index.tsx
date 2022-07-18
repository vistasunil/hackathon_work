import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useFeature, IfFeatureEnabled } from "@growthbook/growthbook-react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <IfFeatureEnabled feature="index-title">
          <h1 className={styles.title} style={{ color: "teal" }}>
            Hello UKrewers!! <code className={styles.code}>- Application Version</code><code className={styles.version}>2</code>
          </h1>
        </IfFeatureEnabled>
        <IfFeatureEnabled feature="subtitle">
          <h2 style={{ color: "tomato" }} className={styles.space}>
          **** Welcome to the Application ****
          </h2>
        </IfFeatureEnabled>
        <span className={styles.logo}>
          <Image src="/ukglogo.jpg" alt="UKG Logo" width={750} height={400} />
        </span>
      </main>
    </div>
  )
}

export default Home
