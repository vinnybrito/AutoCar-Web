"use client"

import { create } from "@/actions/anuncios"
import Button from "@/components/button";
import InputText from "@/components/input-text";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from 'next/image'
import componente from '@/assets/componente.png'
import ComboBoxImgAnuncio from "@/components/combobox-img-anuncio";
import { useState } from "react";
import Footer from "@/components/footer";

export default function AnuncioNew() {

    const { push } = useRouter()
    const [messages, setMessages] = useState([])

    async function onSubmit(formData) {
        const resp = await create(formData)

        if (resp?.error) {
            toast.error(resp.error)
            setMessages(resp.messages)
            return
        }

        push("/anunciar")
    }

    return (
        <>
            <NavBar />

            <main className="flex-col flex items-center justify-center">

                <div className="mt-24">
                    <Image src={componente} alt="Ford" width={800} />
                </div>


                <h1 className="text-4xl font-semibold text-center mb-4 text-white mt-14">
                    Vamos começar o seu <br />
                    anúncio?
                </h1>

                <div className=" w-96 mt-5">

                    <form action={onSubmit}>

                        <InputText name="marca" Label="Marca" />
                        <span
                            className="text-red-400">{messages.find(m => m.field === "marca")?.message}
                        </span>

                        <InputText name="modelo" Label="Modelo" />
                        <span
                            className="text-red-400">{messages.find(m => m.field === "modelo")?.message}
                        </span>

                        <InputText name="anoModelo" Label="Ano do Modelo" />
                        <span
                            className="text-red-400">{messages.find(m => m.field === "anoModelo")?.message}
                        </span>

                        <InputText name="anoFabricacao" Label="Ano de Fabricação" />
                        <span
                            className="text-red-400">{messages.find(m => m.field === "anoFabricacao")?.message}
                        </span>

                        <InputText name="versao" Label="Versão" />
                        <span
                            className="text-red-400">{messages.find(m => m.field === "versao")?.message}
                        </span>

                        <InputText name="cor" Label="Cor" />
                        <span
                            className="text-red-400">{messages.find(m => m.field === "cor")?.message}
                        </span>

                        <div className="mt-10">
                            <ComboBoxImgAnuncio />
                        </div>

                        <div className="flex justify-around">
                            <Button type="button">VOLTAR</Button>
                            <Button type="button">PUBLICAR</Button>
                        </div>
                    </form>

                </div>

            </main>

            <Footer />

        </>
    )
}