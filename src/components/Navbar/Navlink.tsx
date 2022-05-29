
interface NavLinkProps{
    children: string
    href: string;
}

export function Navlink({ children }: NavLinkProps ) {
    return (
        <a href="#" className='text-base text-neutral-200 font-medium hover:text-sun-500 focus:outline-none focus:text-sun-500 focus:underline focus:underline-offset-4'>
            {children}
        </a>
    );
}