"use server"

import { revalidatePath } from "next/cache"
const url = "http://localhost:8080/anunciar"

export async function create(data) {

    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) {
        const messages = await resp.json()
        return {
            error: "Erro ao cadastrar",
            messages
        }
    }

    revalidatePath("/anunciar")
}

export async function destroy(id) {

    const options = {
        method: "DELETE",
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 204) {
        return { error: "Erro ao pagar Anuncio"}
    }

    revalidatePath("/anunciar")

}

export async function get(id) {
    const resp = await fetch(url + "/" + id)

    if (resp.status !== 200) {
        return { error: "Anuncio não encontrado"}
    }

    return await resp.json()

}

export async function update(anuncio) {
    
    const options = {
        method: "PUT",
        body: JSON.stringify(anuncio),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url + "/" + anuncio.id, options)

    if (resp.status !== 200) {
        return {error: "Erro ao atualizar anuncio"}
    }

    revalidatePath("/anunciar")
}