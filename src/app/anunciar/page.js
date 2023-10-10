import Button from '@/components/button'
import NavBar from '@/components/navbar'

async function carregarDados() {
  const url = "http://localhost:8080/anunciar"
  const resp = await fetch(url)
}

export default function PageAnunciar() {
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

          <div className="bg-stone-500 max-w-4xl mt-8 ml-12 h-96 rounded-lg relative"> {/*m-auto*/}

            <div className="pt-10 absolute top-0 right-0 mr-4">
              <Button>Publicar Anúncio</Button>
            </div>
            
            <div>
              
            </div>
          </div>
          
        </div>
      </main>
    </>
  )
}
