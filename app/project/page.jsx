'use client'

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react"
import "swiper/css";

import { BsArrowRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, autem. Tenetur, est laborum. Dolorum maxime tempora alias! ",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "React" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: ""

  },
  {
    num: "02",
    category: "Full-Stack",
    title: "Project 2",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, autem. Tenetur, est laborum. Dolorum maxime tempora alias! ",
    stack: [{ name: "React" }, { name: "Tailwind.css" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""

  },
  {
    num: "03",
    category: "Back-end",
    title: "Project 1",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, autem. Tenetur, est laborum. Dolorum maxime tempora alias! ",
    stack: [{ name: "Node.js" }, { name: "MongoDB" }, { name: "JavaScript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: ""

  }
]

const page = () => {
  const [project, setProject] = useState(projects[0])
  const handleSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,
        transition:{delay:2.4, duration:0.4, ease:"easeIn"}
       }}
    >
      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"> {project.category} Project</h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {
                  project.stack.map((item, i) => (
                    <li className="text-xl text-accent" key={i}>
                      {item.name}
                      {i !== project.stack.length - 1 && ","}
                    </li>
                  ))
                }
              </ul>
              <div className="border border-white/60" /></div>
            <div className="flex items-center gap-4">
              {/* Live Link */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github Link */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Githhub Repo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSliderChange}
            >
              {
                projects.map((item, i) => (
                  <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] w-full relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="name"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
             dsalfajldfjalsfj
             <WorkSliderBtns className="text-white" containerStyles="flex gap-2 absolute right-0 bottom-[cale(50%_-_22px)] 
             xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
             btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
             />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default page