
import Link from 'next/link'
import {FaFacebook , FaGithub, FaYoutube, FaTwitter,FaLinkedinIn} from 'react-icons/fa'

const socials = [
    {icon:<FaFacebook/>, path:""},
    {icon:<FaGithub/>, path:""},
    {icon:<FaYoutube/>, path:""},
    {icon:<FaTwitter/>, path:""},
    {icon:<FaLinkedinIn/>, path:""},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item,i)=>(
        <Link href={item.path} key={i} className={iconStyles}>
        {item.icon}
        </Link>
    ))} 
    </div>
  )
}

export default Socials