import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../components/Ul/Layout';
import classes from "./Home.module.css";
import TopBrands from '../components/Home/TopBrands';
import Sample from '../components/Home/Sample';
import WhyUs from '../components/Home/WhyUs';
import Component from '../components/Home/Component';
import Steps from '../components/Home/Steps';
import ZetEffect from '../components/Home/ZetEffect';
import TopComponent from '../components/Home/TopComponent';

export default function Home() {

  return (
    <Layout>
      <TopComponent></TopComponent>
    
      <TopBrands></TopBrands>
      <Sample></Sample>
      <Component></Component>
      <ZetEffect></ZetEffect>
      <WhyUs></WhyUs>
      <Steps></Steps>
     
    </Layout>
  )
}
