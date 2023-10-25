"use client"

import toast from "react-hot-toast";
import Button from "@/components/button";
import InputText from "@/components/input-text";
import ComboBoxImgAnuncio from "@/components/combobox-img-anuncio";
import { update } from '@/actions/anuncios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FormEdit({anuncio}) {
    const { push } = useRouter()
    const [ messages, setMessages ] = useState([])
    const [ anuncioEdit, setAnuncioEdit ] = useState(anuncio)

    async function onSubmit() {
        const resp = await update(anuncioEdit)

        if (resp?.error) {
            toast.error(resp.error)
            setMessages(resp.messages)
            return
        }

        push("/anunciar")
    }

    function handleFieldChange(field, value) {
        setAnuncioEdit ({
            ...anuncioEdit,
            [field]: value
        })
    }

    return (
        <main className="flex-col flex items-center justify-center">

            <h1 className="text-4xl font-semibold text-center mb-4 text-white mt-14">
                Faça a edição do seu anúncio!
            </h1>

            <div className=" w-96 mt-5">

                <form action={onSubmit}>

                    <InputText name="marca" Label="Marca" value={anuncioEdit.marca} onChange={(e) => handleFieldChange("marca", e.target.value)}/>
                    <span
                        className="text-red-400">{messages.find(m => m.field === "marca")?.message}
                    </span>

                    <InputText name="modelo" Label="Modelo" value={anuncioEdit.modelo} onChange={(e) => handleFieldChange("modelo", e.target.value)}/>
                    <span
                        className="text-red-400">{messages.find(m => m.field === "modelo")?.message}
                    </span>

                    <InputText name="anoModelo" Label="Ano do Modelo" value={anuncioEdit.anoModelo} onChange={(e) => handleFieldChange("anoModelo", e.target.value)}/>
                    <span
                        className="text-red-400">{messages.find(m => m.field === "anoModelo")?.message}
                    </span>

                    <InputText name="anoFabricacao" Label="Ano de Fabricação" value={anuncioEdit.anoFabricacao} onChange={(e) => handleFieldChange("anoFabricacao", e.target.value)}/>
                    <span
                        className="text-red-400">{messages.find(m => m.field === "anoFabricacao")?.message}
                    </span>

                    <InputText name="versao" Label="Versão" value={anuncioEdit.versao} onChange={(e) => handleFieldChange("versao", e.target.value)}/>
                    <span
                        className="text-red-400">{messages.find(m => m.field === "versao")?.message}
                    </span>

                    <InputText name="cor" Label="Cor" value={anuncioEdit.cor} onChange={(e) => handleFieldChange("cor", e.target.value)}/>
                    <span
                        className="text-red-400">{messages.find(m => m.field === "cor")?.message}
                    </span>

                    <div className="mt-10">
                        <ComboBoxImgAnuncio />
                    </div>

                    <div className="flex justify-around">
                        <Button type="button">VOLTAR</Button>
                        <Button type="button">SALVAR</Button>
                    </div>
                </form>

            </div>

        </main>
    )
}
