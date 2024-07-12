'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'

const page = () => {
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+880) 1312 110 827"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "rakibkazi2222@gmail.com"
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      description: "Dhaka , Bangladesh"
    },
  ]
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap[30px] '>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3> Let's work together</h3>
              <p className='text-white/60'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequuntur fuga eaque optio illo aspernatur vel nesciunt maiores, porro aut numquam asperiores quisquam nihil cupiditate, laboriosam deleniti!
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <Input type="text" placeholder='First-Name' />
                <Input type="text" placeholder='Last-Name' />
                <Input type="email" placeholder='Email' />
                <Input type="number" placeholder='Phone Number' />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder=" Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectGroup>
                    <SelectLabel> Select a Service </SelectLabel>
                    <SelectItem vlue="est"> Web Development </SelectItem>
                    <SelectItem vlue="cst"> UI/UX Design </SelectItem>
                    <SelectItem vlue="mst"> App Development </SelectItem>
                    {/* <SelectItem vlue="pst"> SEO Service </SelectItem> */}
                  {/* </SelectGroup> */} 

                </SelectContent>
              </Select>
              <Textarea className="h-[200px] " placeholder="Type your message here" />
              <Button size="md" className="max-w-40 h-10"> Send Message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {
                info.map((item, i) => {
                  return(
                    <li key={i} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[53px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center' >
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                    <p className='text-white/60'>{item.title} </p>
                    <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>


    </motion.section>
  )
}

export default page