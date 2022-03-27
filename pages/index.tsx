import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStartedButton } from '../src/GetStartedButton'
import { GlobalCSS } from '../src/GlobalCSS'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Dhamma Gong</title>
        <meta
          name="description"
          content="Automated gong for Dhamma.org courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>Welcome to Dhamma Gong!</h1>

        <GetStartedButton />
      </main>

      <style jsx>{`
        .container {
          padding: 0 2rem;
          background: rgb(2, 0, 36);
          background: linear-gradient(
            152deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(9, 9, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          color: hsla(0, 0%, 100%, 0.9);
        }

        main {
          min-height: 100vh;
          padding: 4rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-size: 2.5rem;
          text-align: center;
        }
      `}</style>
      <GlobalCSS />
    </div>
  )
}

export default Home
