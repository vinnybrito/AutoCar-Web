"use client"

import { create } from "@/actions/anuncios"
import Button from "@/components/button";
import InputText from "@/components/input-text";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AnuncioNew() {

    const { push } = useRouter()

    async function onSubmit(formData) {
        const resp = await create(formData)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/anunciar")
    }

    return (
        <>
            <NavBar />

            <main className="flex-col flex items-center justify-center">
                <h2>Vamos começar o seu anúncio?</h2>

                <div className="p-8 rounded-lg shadow-lg w-96 bg-yellow-400">

                    <form action={onSubmit}>
                        <InputText name="marca" Label="Marca" />
                        <InputText name="modelo" Label="Modelo" />
                        <InputText name="anoModelo" Label="Ano do Modelo" />
                        <InputText name="anoFabricacao" Label="Ano de Fabricação" />
                        <InputText name="versao" Label="Versão" />
                        <InputText name="cor" Label="Cor" />
                        <Button type="button">Publicar</Button>
                    </form>

                </div>
            </main>
        </>
    )
}