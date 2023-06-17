import React, {useRef, useState} from 'react';
import Image from 'next/image'
import duaLipa from "./img/dua.jpg"
import sticker from "./img/sticker.png"
import Link from 'next/link';


type CarouselItem = {
  src: string;
  alt: string;
};

export default function Home(){

  return (
    <div className='w-full'>

      {/* HERO */}
      <div className="bg-neutral py-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mb-8">The Line FAN</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 text-white">
              <h2 className="text-2xl font-bold mb-4">Asegura tu boleto con nosotros</h2>
              <p className="text-lg">Gana NFTs por medio de nuestras dinámicas y sé premiado con la oportunidad de comprar en preventa.</p>
            </div>
            <div className="md:w-1/3">
              <Image width={300} height={300} src={sticker} alt="Imagen ilustrativa" className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* CONCIERTOS */}
      <div className='flex flex-col items-center justify-center mt-40 text-center'>
        <h1 className='text-6xl'>Próximos conciertos</h1>
      </div>
      <div className='flex columns-3 grid-rows-2 px-3 items-center justify-center mt-40 '>
        <div className='flex px-3 container mx-auto'>
          <div className="card w-96 bg-secondary shadow-xl ">
            <figure><Image width={400} height={500}  src={duaLipa} alt="duaLipa" /></figure>
            <div className="card-body">
              <h2 className="card-title">Dua Lipa CDMX</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <Link href="/artista" legacyBehavior>
                <a>Compra</a>
              </Link>
            </div>
          </div>
        </div>

        <div className='px-3 container mx-auto'>
          <div className="card w-96 bg-secondary shadow-xl ">
            <figure><Image width={400} height={500}  src={duaLipa} alt="duaLipa" /></figure>
            <div className="card-body">
              <h2 className="card-title">Dua Lipa CDMX</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <Link href="/artista" legacyBehavior>
                <a>Compra</a>
              </Link>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => redirect('/artista')}>Buy Now</button>
              </div> */}
            </div>
          </div>
        </div>

        <div className='px-3 container mx-auto'>
          <div className="card w-96 bg-secondary shadow-xl ">
            <figure><Image width={400} height={500}  src={duaLipa} alt="duaLipa" /></figure>
            <div className="card-body">
              <h2 className="card-title">Dua Lipa CDMX</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <Link href="/artista" legacyBehavior>
                <a>Compra</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
