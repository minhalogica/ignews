import { GetStaticProps }  from 'next';
import Head from 'next/head';

import styles from './home.module.scss';
import {SubscribeButton}  from './components/SubscribeButton'
import { stripe } from '../services/stripe';


interface HomeProps {
  product:{
    priceId: string;
    amount:number;
  }
}

export default function Home({ product } : HomeProps) {
  return (
    <>
    <Head><title>Home | React.Noticias</title></Head>
    <main  className={styles.contentContainer}>
     
     <section className={styles.hero}>
       
       <span>Ola, bem-vindo</span>
       
       <h1>Noticias sobre <span>React</span> no mundo.</h1>
    
     <p>
     Tenha acesso a toda a publicação <br />
       <span>por {product.amount} mes</span>
     </p>
     <SubscribeButton priceId={product.priceId} />
     </section>
  
     <img src="/images/avatar.svg" alt="Girl coding" />

    </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IaKPyH4lA7yAeSO7DP4haVX', {
    expand: ['product']
  })   
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style:'currency',
      currency:'USD'
    }).format(price.unit_amount / 100),
  }

  return {
       props:{
        product
       },
       revalidate: 60 * 60 * 24,
     }
}