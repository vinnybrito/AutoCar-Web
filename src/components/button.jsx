import Link from "next/link";

export default function Button({ children }) {
    return (
        <Link href="#" className="bg-black px-5 py-3 rounded mt-8" >
            {children}
        </Link>
    )
}