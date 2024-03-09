"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_API_URL + "/anunciar"
const token = cookies().get('AutoCar_jwt')?.value

// --------------- Função CREATE --------------- //

export async function create(data) {

    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
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

// --------------- Função DESTROY --------------- //

export async function destroy(id) {

    const options = {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 204) {
        return { error: "Erro ao pagar Anuncio" }
    }

    revalidatePath("/anunciar")

}

// -------------- Função GET(ID) -------------- //

export async function get(id) {
    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 200) {
        return { error: "Anuncio não encontrado" }
    }

    return await resp.json()

}

// --------------- Função UPDATE --------------- //

export async function update(anuncio) {

    const options = {
        method: "PUT",
        body: JSON.stringify(anuncio),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url + "/" + anuncio.id, options)

    if (resp.status !== 200) {
        return { error: "Erro ao atualizar anuncio" }
    }

    revalidatePath("/anunciar")
}

// ----------- Função CARREGARDADOS ----------- //

export async function carregarDados() {
    const options = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 200) {
        throw new Error(`Falha ao carregar dados da categoria (${resp.status})`)
    }

    return await resp.json()

}