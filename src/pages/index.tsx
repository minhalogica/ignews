import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head><title>Home | Ing.news</title></Head>
    <main>
     
     <section>
       <span>Hey, welcome</span>
       <h1>News about the <span>React</span> Word.</h1>
     </section>

     <img src="/images/avatar.svg" alt="Girl coding" />

     <p>
       Get acess to all the publication <br />
       <span>for $9.90 month</span>
     </p>
    </main>
    </>
  )
}
