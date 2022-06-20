import Link from "next/link";

interface NavLinkProps{
    children: string
    href: string;
}

export function Navlink({ children, href }: NavLinkProps ) {
    return (
        <Link href={href}>
            <a className='text-base text-neutral-200 font-medium hover:text-sun-500 focus:outline-none focus:text-sun-500 focus:underline focus:underline-offset-4 transition-all duration-200'>
                {children}
            </a>
        </Link>
    );
}