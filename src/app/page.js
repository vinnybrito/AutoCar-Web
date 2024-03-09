"use client"

import Image from 'next/image'
import Login from '../assets/imageLogin.jpg'
import InputText from '@/components/input-text'
import Button from '@/components/button'
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

export default function Home() {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm()
  const { login } = useContext(AuthContext)

  const onSubmit = async (data) => {
    const resp = await login(data.email, data.senha)

    if (resp?.error) {
      toast.error(resp.error)
      return
    }

    push("/dashboard")
  }

  return (
    <>
      <div className='h-screen flex'>

        <aside className='hidden lg:flex'>
          <Image className='h-auto w-auto object-cover' src={Login}/>
        </aside>

        <main className='flex mt-10 mx-auto rounded p-4'>
          <h2>AutoCar</h2>

          <form className='flex flex-col gap-4 p-4 m-auto' onSubmit={handleSubmit(onSubmit)}>
            <InputText Label="E-mail" register={register} name="email"/>
            <InputText Label="Senha" register={register} name="senha" type="password"/>
            <Button type='button'>Entrar</Button>
          </form>
        </main>
        
      </div>
    </>
  )
}
