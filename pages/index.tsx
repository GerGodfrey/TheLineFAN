import React, {useRef, useState} from 'react';
import SearchBox from './components/SearchBox';
import Image from 'next/image'
import duaLipa from "./img/dua.jpg"
import sticker from "./img/sticker.png"

type CarouselItem = {
  src: string;
  alt: string;
};

export default function Home(){

  return (
    <div className='w-full'>
      {/* NAVBAR */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Español MX</a></li>
                  <li><a>English US</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">LineFAN</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
        <SearchBox />
      </div>

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
      <div className='flex columns-3 grid-rows-2 px-3 items-center justify-center mt-40 sm:flex-col'>
        <div className='flex px-3 container mx-auto'>
          <div className="card w-96 md:w-32 bg-secondary shadow-xl ">
            <figure><Image width={400} height={500}  src={duaLipa} alt="duaLipa" /></figure>
            <div className="card-body">
              <h2 className="card-title">Dua Lipa CDMX</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='px-3 container mx-auto'>
          <div className="card w-96 bg-secondary shadow-xl ">
            <figure><Image width={400} height={500}  src={duaLipa} alt="duaLipa" /></figure>
            <div className="card-body">
              <h2 className="card-title">Dua Lipa CDMX</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className='px-3 container mx-auto'>
          <div className="card w-96 bg-secondary shadow-xl ">
            <figure><Image width={400} height={500}  src={duaLipa} alt="duaLipa" /></figure>
            <div className="card-body">
              <h2 className="card-title">Dua Lipa CDMX</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
