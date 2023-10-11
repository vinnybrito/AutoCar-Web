import Button from '@/components/button'
import NavBar from '@/components/navbar'
import DataRow from './datarow'

async function carregarDados() {
    const url = "http://localhost:8080/anunciar"
    const resp = await fetch(url)

    if (resp.status !== 200) {
      alert("Erro ao buscar dados de anuncios")
      return
    }

    return await resp.json()

}

export default async function PageAnunciar() {

  const anuncios = await carregarDados()

  return (
    <>
      <NavBar />

      <main className="h-screen">
        <div className="container mt-10 mx-auto rounded p-4">

          <h2 className=" ml-12 text-2xl">
            MEUS ANÚNCIOS
          </h2>

          <div className="flex mt-10">
            <div className="ml-12 text-xl w-48 border-b-8">
              <h2>Publicar</h2>
            </div>

            <div className="ml-20 text-xl w-48 border-b-8">
              <h2>Inativo</h2>
            </div>

            <div className="ml-20 text-xl w-48 border-b-8">
              <h2>Expirado</h2>
            </div>
          </div>

          <div className="bg-stone-500 max-w-4xl mt-8 ml-12 h-96 rounded-lg ">

            <div className="pt-10 h-24 pr-6 flex justify-between">
              <div>
                <h2>.</h2>
              </div>
              <div>
                <Button href="/anunciar/new">
                  Publicar Anúncio
                </Button>
              </div>
            </div>

            <div className="bg-red-700 space-y-2">
              {anuncios.map(anuncio => <DataRow key={anuncio.id} anuncio={anuncio}/>)}
            </div>

          </div>


        </div>
      </main>
    </>
  )
}
