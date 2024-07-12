'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider, TooltipContent, Tooltip, TooltipTrigger } from "@/components/ui/tooltip"
import { TabsContent } from "@radix-ui/react-tabs"
import { motion } from "framer-motion"
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"


const about = {
  title: "About me",
  description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum minus dolores dolore neque corporis esse praesentium! ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kar Rakib"
    },
    {
      fieldName: "Experince",
      fieldValue: " 3 years "
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1312-110827 "
    },
    {
      fieldName: "Email",
      fieldValue: "rakibkazi2222@gmail.com"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladesh"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Bangla"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Bangla"
    },
  ]
}
const experince = {
  icon: "/assets/resume/badge.svg",
  title: "My Experiance",
  description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia adipisci odio maxime. Aliquid aut repellat laboriosam alias minus? ",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "1/2/2021 - 31/10/2021 "
    },
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "1/2/2021 - 31/10/2021 "
    },
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "1/2/2021 - 31/10/2021 "
    },
  ]
}
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quia adipisci odio maxime. Aliquid aut repellat laboriosam alias minus? ",
  items: [
    {
      institution: "Programming Hero",
      position: "Full Stack Developer",
      duration: "1/2/2021 - 31/10/2021 "
    },
    {
      institution: "Python io",
      position: "Full Stack Developer",
      duration: "1/2/2021 - 31/10/2021 "
    },
    {
      institution: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "1/2/2021 - 31/10/2021 "
    },
  ]
}
const skills = {
  title: "My Skills",
  description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta et unde ipsam aliquid! Odit autem commodi numquam quaerat! ",
  skillist: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },

    {
      icon: <FaFigma />,
      name: "Figma"
    },
  ]
}
const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experince"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experince">Experince</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experince" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experince.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experince.description} </p>

                <ScrollArea className="w-[515px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {
                      experince.items.map((item, i) => (
                        <li key={i}
                          className="bg-[#232329] h-[184px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-6">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60"> {item.company}</p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description} </p>

                <ScrollArea className="w-[515px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {
                      education.items.map((item, i) => (
                        <li key={i}
                          className="bg-[#232329] h-[184px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-6">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60"> {item.institution}</p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillist.map((item, i) => (
                    <li key={i}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>

                      </TooltipProvider>

                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.info.map((item, i) => (
                      <li key={i}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default page