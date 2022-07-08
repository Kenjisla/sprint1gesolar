import Link from "next/link";

export function Logo() {
    return (
        <Link href="/">
            <a>
                <img
                className="h-10 w-auto md:h-11"
                src="logo.png"
                alt=""
                />
            </a>
        </Link>
    )
}