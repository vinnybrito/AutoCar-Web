import NavBar from '@/components/navbar'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <NavBar />

      <main className="container bg-slate-900 mt-10 mx-auto rounded p-4 max-w-lg">
        <h2>Página não encontrada</h2>
        <Link href="/">Voltar para home</Link>
      </main>
    </>
  )
}
