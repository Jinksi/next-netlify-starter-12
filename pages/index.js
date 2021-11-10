import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({ time }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>{time}<p>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const time = new Date().toString()
  return {
    props: { time }, // will be passed to the page component as props
  }
}
