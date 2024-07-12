import { animate,motion} from 'framer-motion'
import React from 'react'

const stairAnimation ={
  initial:{
    top:"0%"
  },
  animate:{
    top:"300%"
  },
  exit:{
    top:["400%","0%"]
  },
}
const reverseIndex = (index) =>{
  const totalSteps = 6;
  return totalSteps - index -1;
}

const Stairs = () => {
  return (
    <>
    
    {[...Array(6)].map((_,index)=>(
      <motion.div
      key={index}
      variants={stairAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration:0.6,
        ease:"easeInOut",
        delay:reverseIndex(index)*0.1
      }}
      className='h-full w-full bg-white relative'
      />
    ))}
    </>
  )
}

export default Stairs