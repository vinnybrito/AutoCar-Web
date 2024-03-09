'use client'
import Button from '@/components/button'
import NavBar from '@/components/navbar'
import Link from 'next/link'

export default function Error({error}) {
  return (
    <>
      <NavBar />

      <main className="container bg-slate-900 mt-10 mx-auto rounded p-4 max-w-lg">
        <h2>Um erro aconteceu!</h2>
        <p>{error.message}</p>
        <Button href="/dashboard">Voltar para Home</Button>
      </main>
    </>
  )
}
