import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Card } from '../pages/card'
import BasicTable from '../pages/table'
import React from 'react'
import ReactDOM from "react-dom";
import Nomics from 'nomics'

const nomics = new Nomics({
  apiKey: "f78c860a4053185df1481a3f51d0ec2413c12e69"
});
{/* <Card color="#007BFF" title="Test"></Card> */}





function Home({currency_info}) {
  return (
    <BasicTable rows={currency_info}></BasicTable>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.nomics.com/v1/currencies/ticker?key=f78c860a4053185df1481a3f51d0ec2413c12e69&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&per-page=10&page=1')
  const currency_info = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      currency_info,
    },
  }
}

export default Home
