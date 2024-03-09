"use client"

import Image from 'next/image';
import Car from "@/assets/carro.png";
import EditIcon from "@/assets/editIcon.png";
import DeleteIcon from "@/assets/deleteIcon.png";
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
        <div id="data-row" 
        className="flex p-4 border border-gray-300 bg-stone-100 rounded-md ml-5 mr-5">

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

                    <div className=" p-4 rounded-md">
                        <h2 className="text-black font-bold text-3xl">
                            {anuncio.marca} {anuncio.modelo}
                        </h2>
                        <h3 className="text-black font-bold text-2xl">
                            {anuncio.versao}
                        </h3>
                    </div>

                    <div className="mt-2 flex space-x-4">
                        <button
                            onClick={handleEdit}
                            className="text-black px-2 py-1 rounded-md flex space-x-4 justify-center">
                            <div className='justify-center items-center'>
                                <Image className='mt-0' 
                                    src={EditIcon}
                                    alt='DeleteIcon'
                                    height={30}
                                    width={30}
                                />
                                </div>
                            <div className='text-2xl'>
                                Editar
                            </div>
                        </button>

                        <button
                            onClick={handleDelete}
                            className=" text-black px-2 py-1 rounded-md flex space-x-4">
                                <div className='justify-center items-center'>
                                    <Image className='mt-0' 
                                        src={DeleteIcon}
                                        alt='DeleteIcon'
                                        height={25}
                                        width={25}
                                    />
                                </div>
                                <div className='text-2xl'>
                                    Excluir
                                </div>
                        </button>

                    </div>
                </div>

            </div>

        </div>

    )
}
