"use client"

import Image from 'next/image'
import Login from '../assets/imageLogin.jpg'
import InputText from '@/components/input-text'
import Button from '@/components/button'
import { useForm } from "react-hook-form"

export default function Home() {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
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
