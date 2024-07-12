'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'
const services = [
  {
    num: 1,
    title: "Web Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
    href: ""
  },
  {
    num: 2,
    title: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
    href: ""
  },
  {
    num: 3,
    title: "App Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
    href: ""
  },
  {
    num: 4,
    title: "SEO Expert",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing. ",
    href: ""
  },
]
const page = () => {
  return (
    <section className="min-h-[80vh] flex-col flex justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4, duration: 0.4, ease: "easeIn"
            }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((item, i) => (
            <div key={i}
            className='flex-1 flex flex-col justify-center gap-6 group '
            >
              <div className='w-full flex justify-between'>
              <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{item.num}</div>
              <Link href={item.href}
              className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 '
              >
                <BsArrowDownRight className='text-primary text-3xl' />
              </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{item.title}</h2>
              <p className='text-white/60'>{item.description}</p>
              <div className='border border-white/20 w-full'></div>
              
            </div>

          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default page