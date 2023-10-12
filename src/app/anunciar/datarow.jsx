"use client"

import Image from 'next/image';
import Car from "@/assets/carro.png";
import React, { useState } from 'react';
import { images } from "@/app/anunciar/imagens-anuncios"
import { destroy } from '@/actions/anuncios';
import { useRouter } from 'next/navigation';

export default function DataRow({ anuncio, id }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { push } = useRouter()

    const handleDelete = () => {
        setAnchorEl(null);
        destroy(id)
    }

    const handleEdit = () => {
        push("/anunciar/" + id)
    }

    return (
        <div id="data-row" className="flex p-4 border border-gray-300 bg-stone-100 rounded-md ml-5 mr-5">

            <div className="flex flex-col md:flex-row justify-between w-full">

                <div className="md:w-1/3">
                    <Image src={Car} 
                    alt="Carro" 
                    width={224} 
                    height={144} 
                    className="w-full h-auto" />

                    {images.find(img => img.name === anuncio.image)?.image}
                </div>

                <div className="md:w-2/3 md:pl-4 mt-4 md:mt-0">

                    <div className="bg-yellow-500 p-2 rounded-md">
                        <h2 className="text-black font-bold text-3xl">
                            {anuncio.marca} {anuncio.modelo}
                        </h2>
                        <h3 className="text-black font-bold text-2xl">
                            {anuncio.versao}
                        </h3>
                    </div>

                    <div className="mt-2">
                        <button 
                        onClick={handleEdit} 
                        className="bg-sky-600 text-white px-2 py-1 rounded-md">
                            Editar
                        </button>

                        <button 
                        onClick={handleDelete} 
                        className="bg-red-600 text-white px-2 py-1 rounded-md">
                            Excluir
                        </button>

                    </div>
                </div>

            </div>

        </div>

        
    )
}
