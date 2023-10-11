import Link from "next/link";
import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function NavBar() {
    return (
        <nav className=" flex items-center justify-between bg-black p-6">

          <Link href="/" className="inline-block transition-transform transform hover:scale-110">
            <Image src={logo} alt="logo" width={75} height={30}/>
          </Link>

          <div className="w-2/3 rounded-lg overflow-hidden">
            <ul className="flex items-center justify-center gap-14 p-3 text-slate-100 bg-zinc-900">

              <li>
                <Link href="/" className="hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-yellow-500">
                  Catalogo
                </Link>
              </li>
              <li>
                <Link href="/anunciar" className="hover:text-yellow-500">
                  Anunciar
                </Link>
              </li>

            </ul>
          </div>

        <span className="hover:text-yellow-500 mr-4">
          Sign in
        </span>
      </nav>
    )
}