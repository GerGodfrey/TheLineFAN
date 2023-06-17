import { useState } from 'react';
import Image from 'next/image';
import duaLipa from "./img/dua.jpg"

  export default function Mint(){
  const [imageInfo, setImageInfo] = useState({
    imageUrl: duaLipa,
    attributes: [
      { name: 'Día', value: '24 Nov' },
      { name: 'Lugar', value: 'Palacio de los Deportes' }
    ],
  });

  const handleMintNFT = () => {
    // Lógica para mintear el NFT
    console.log('Minting NFT:', imageInfo);
  };

  const handleCancel = () => {
    // Lógica para cancelar la operación de minteo
    setImageInfo({ imageUrl: '', attributes: [] });
  };

  return (
    <div className='w-full'>

      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          {imageInfo.imageUrl ? (
            <div className="w-32 h-32 relative">
              <Image src={duaLipa} alt="NFT Image" layout="fill" className="rounded-lg" />
            </div>
          ) : (
            <div className="w-32 h-32 bg-gray-100 rounded-lg"></div>
          )}
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">Dua Lipa</h2>
          <p className="text-gray-600">CDMX 24-Nov-2022</p>
        </div>
        <div className="my-4">
          {imageInfo.attributes.map((attribute, index) => (
            <div key={index} className="flex justify-between">
              <span className="font-medium">{attribute.name}:</span>
              <span>{attribute.value}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleMintNFT}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Comprar
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
    
  );
};

