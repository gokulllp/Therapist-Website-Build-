import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Therapist </title>
      </Head>
      <Hero />
      <Features />
      <ContactForm />
    </>
  )
}
