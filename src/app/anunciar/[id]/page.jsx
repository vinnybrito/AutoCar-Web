import { get } from "@/actions/anuncios"
import NavBar from "@/components/navbar";
import FormEdit from "./form";
import Footer from "@/components/footer";

export default async function AnuncioNew({ params }) {

    const anuncio = await get(params.id)

    return (
        <>
            <NavBar />
            <FormEdit anuncio={anuncio} />
            <Footer />
        </>
    )
}