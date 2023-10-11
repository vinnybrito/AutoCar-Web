import Link from "next/link";

export default function Button({children, type="link", ...props}) {
    return (
        (type === "link") ?
            <Link href="#" {...props} className="bg-black px-4 py-2 rounded mt-8" >
                {children}
            </Link>
            :
            <button {...props} className="bg-black px-4 py-2 rounded mt-8" >
                {children}
            </button>
    )
}