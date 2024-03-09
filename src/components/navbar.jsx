"use client"

import Link from "next/link";
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function NavBar() {

  const { push } = useRouter()
  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    push("/")
  }

  return (
    <nav className=" flex items-center justify-between bg-black p-6">

      <Link href="/" className="inline-block transition-transform transform hover:scale-110">
        <Image src={logo} alt="logo" width={75} height={30} />
      </Link>

      <div className="w-2/3 rounded-lg overflow-hidden">
        <ul className="flex items-center justify-center gap-14 p-3 text-slate-100 bg-zinc-900">

          <li>
            <Link href="/dashboard" className="hover:text-yellow-500">
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

      <div>
        {user?.email}
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img src="https://github.com/vinnybrito.png" alt="avatar do usuário" />
        </div>
        <button onClick={handleLogout} className="hover:text-yellow-500 mr-4">
          Sign out
        </button>
      </div>
    </nav>
  )
}