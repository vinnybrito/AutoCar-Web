import Image from 'next/image';
import Car from "@/assets/carro.png";

export default function DataRow({ anuncio }) {
    return (
        <div id="data-row" className="flex justify-between">
            <div className="flex">
                <span>Imagem</span> {/*<Image src={Car} alt="Carro" className="w-56" />*/}
                <div>
                    <span>{anuncio.marca}</span>
                </div>
            </div>
            <span>editar</span>
        </div>
    )
}