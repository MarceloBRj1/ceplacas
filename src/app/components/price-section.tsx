'use client'
import React, { useEffect } from 'react'
import Image  from 'next/image'
import CardPrice from './cardprice'
import { motion } from 'framer-motion'


const PriceSection = () => {
  const animProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  }
  return (
    <motion.div id='placas' 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.5 }}

    className=' flex justify-center bg-blue-900 text-center rounded-lg container'>
    <div className="  items-center bg-blue-900">
        <h2 className="text-3xl font-semibold tracking-tight text-orange-500 mt-10">Conheça os nossos Produtos</h2>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        

        className="-mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
     <CardPrice
          modelo="Placa para Carro"
          price="280"
          Image={Image}
          imgProps={{
            src: '/placatcerto.png',
            alt: 'placa para carro',
            width: 600,
            height: 600,
           }}
           parcela='3x sem juros'
           subtitle='Particular, Aluguel e Oficial'
      />
      <CardPrice
          modelo="Placa para Moto"
          price="180"
          Image={Image}
          parcela='3x sem juros'
          subtitle='Particular, Aluguel e Oficial'
          imgProps={{
            src: '/moto2.png',
            alt: 'placa para moto',
            width: 600,
            height: 600,
           }}
      />
      <CardPrice
          modelo="Suporte para placa"
          price="20"
          Image={Image}
          imgProps={{
            src: '/suporte.png',
            alt: 'suporte para carro',
            width: 600,
            height: 600,
           }}
      />
      <CardPrice
          modelo="Lacre para Parafuso"
          price="15"
          Image={Image}
          imgProps={{
            src: '/cbm2.png',
            alt: 'lacre para parafusos',
            width: 600,
            height: 600,
           }}
      />
      </motion.div>
     
    </div>
  </div>
    </motion.div>
    
  )
}

export default PriceSection