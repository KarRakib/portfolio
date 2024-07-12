'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const links =[
    {
        name:"Home",
        path:'/'
    },
    {
        name:"Service",
        path:'/service'
    },
    {
        name:"Resume",
        path:'/resume'
    },
    {
        name:"Project",
        path:'/project'
    },
    {
        name:"Contact",
        path:'/contact'
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <nav className="flex gap-8">
        {links.map((link,i)=>(
            <Link 
            href={link.path}
            key={i}
            className={`${
                link.path=== pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            >
            {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav