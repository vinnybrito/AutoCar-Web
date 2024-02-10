import NavBar from '@/components/navbar'
import Image from 'next/image';
import Car from "@/assets/ford.png";
import Button from '@/components/button';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <NavBar />

      {/* ---------- DIV DE ANÚNCIO ----------*/}

      <div className="flex items-center justify-center p-10 mt-10 rounded-xl mx-auto" style={{ maxWidth: '1000px' }}>

        <div className="w-1/2">
          <Image src={Car} alt="Carro" width={500} height={300} />
        </div>

        <div className="flex flex-col text-white text-center w-1/2 pr-10 border-r-4 border-yellow-500 justify-center h-52">
          <h1 className="text-3xl font-semibold mb-4 ml-52 text-yellow-400">
            ANUNCIE JÁ
          </h1>
          <p className="text-xl mb-2 ml-12">
            Vender e comprar nunca foi tão fácil!
          </p>
          <p className="text-xl mb-2 ml-60">
            Anuncie On-line
          </p>
          <div className="mt-10 ml-60">
            <Button>Publicar anúncio</Button>
          </div>
        </div>
      </div>

      {/*------------------------------------------------------------------*/}

      {/*-----------CAMPO DE BUSCA VEICULO -----------*/}

      <div>

        <div className="p-6 mt-16 rounded-xl mx-auto" style={{ maxWidth: '1000px' }}>
          <h1 className="text-white mb-2 text-xl">
            Procure o Modelo Ideal
          </h1>
          <h2 className="text-white mb-2 text-3xl font-bold">
            Catálogo
          </h2>
        </div>

        <div className="bg-black p-6 rounded-xl mx-auto" style={{ maxWidth: '1000px' }}>

          <div className="relative mt-6 mb-6">
            <input
              type="text"
              placeholder="Escolha seu modelo favorito"
              className="w-full h-16 bg-gray-800 text-white rounded-xl pl-6 pr-20 focus:outline-none"
            />
            <button className="absolute top-0 right-0 h-full w-40 bg-yellow-600 text-white font-bold rounded-tr-xl rounded-br-xl hover:bg-yellow-500">
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/*------------------------------------------------------------------*/}

      {/*-----------CAMPO SOBRE EMPRESAS E SERVIÇOS-----------*/}

      <Footer />
    </>
  )
}
