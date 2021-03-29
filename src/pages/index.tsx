import { GetServerSideProps }  from 'next';
import Head from 'next/head';

import styles from './home.module.scss';
import {SubscribeButton}  from './components/SubscribeButton'
import { stripe } from '../services/stripe';

export default function Home() {
  return (
    <>
    <Head><title>Home | Ing.news</title></Head>
    <main  className={styles.contentContainer}>
     
     <section className={styles.hero}>
       
       <span>Hey, welcome</span>
       
       <h1>News about the <span>React</span> Word.</h1>
    
     <p>
       Get acess to all the publication <br />
       <span>for $9.90 month</span>
     </p>
     <SubscribeButton />
     </section>
  
     <img src="/images/avatar.svg" alt="Girl coding" />

    </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () {
  const price = await stripe.prices.retrieve('price_1IaKPyH4lA7yAeSO7DP4haVX', {
    expand: ['product']
  })   
  
  return {
       props:{
         nome:'Diego'
       }
     }
}