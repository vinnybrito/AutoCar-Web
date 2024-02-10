import Link from "next/link";

export default function Button({children, type="link", ...props}) {
    return (
        (type === "link") ?
            <Link href="#" {...props} className="bg-black px-5 py-3 rounded mt-8 hover:bg-stone-900" >
                {children}
            </Link>
            :
            <button {...props} className="bg-black px-5 py-2 rounded" >
                {children}
            </button>
    )
}