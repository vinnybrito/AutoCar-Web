import { images } from "@/app/anunciar/imagens-anuncios"
import { useState } from "react";

export default function ComboBoxImgAnuncio() {

    const [value, setValue] = useState("option-one")

    return (
        <>
            <label htmlFor="img">Escolha uma imagem</label>
            <input type="hidden" name="image" value={value}/>

            <div className="flex gap-4">
                {images.map(({ name, image }) =>
                    
                        <button 
                            key={name} 
                            className={`${value===name? "hover:scale-110": ""} `}
                            onClick={() => setValue(name)}
                        >
                            {image}
                        </button>
                    
                )}
            </div>

        </>
    )
}