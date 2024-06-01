import { motion } from 'framer-motion'
import {
  languages, tools, frontend, backend
} from './list'

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  }
}


const Skills = () => {
  return (
    <motion.div variants={variants} initial= "initial" whileInView="animate" viewport={{once:true}}
    className="flex flex-col gap-10 justify-center h-full text-[#F8F4E1] font-roboto mt-2">
      <motion.div variants={variants} className='flex flex-col gap-6'>
        <h1 className="text-3xl font-poppins w-fit m-auto">Languages</h1>
        <motion.div variants={variants} className='flex gap-x-10 sm:gap-x-20 gap-y-2 justify-center flex-wrap'>
          {
            languages.map((item) => (
              <motion.div variants={variants} key={item.name} className="flex flex-col items-center gap-2">
                <img src={item.location} alt="" className='w-10 h-10' />
                <h2 className='w-fit'>{item.name}</h2>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
      <motion.div variants={variants} className='flex flex-col gap-6'>
        <h1 className="text-3xl font-poppins w-fit m-auto">Front End</h1>
        <motion.div variants={variants} className='flex gap-x-10 sm:gap-x-20 gap-y-2 justify-center flex-wrap'>
          {
            frontend.map((item) => (
              <motion.div variants={variants} key={item.name} className="flex flex-col items-center gap-2">
                <img src={item.location} alt="" className='w-10 h-10' />
                <h2 className='w-fit'>{item.name}</h2>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
      <motion.div variants={variants} className='flex flex-col gap-6'>
        <h1 className="text-3xl font-poppins w-fit m-auto">Back End</h1>
        <motion.div variants={variants} className='flex gap-x-10 sm:gap-x-20 gap-y-2 justify-center flex-wrap'>
          {
            backend.map((item) => (
              <motion.div variants={variants} key={item.name} className="flex flex-col items-center gap-2">
                <img src={item.location} alt="" className='w-10 h-10 object-cover' />
                <h2 className='w-fit'>{item.name}</h2>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
      <motion.div variants={variants} className='flex flex-col gap-6'>
        <h1 className="text-3xl font-poppins w-fit m-auto">Tools</h1>
        <motion.div variants={variants} className='flex gap-x-10 sm:gap-x-20 gap-y-2 justify-center flex-wrap'>
          {
            tools.map((item) => (
              <motion.div variants={variants} key={item.name} className="flex flex-col items-center gap-2">
                <img src={item.location} alt="" className='w-10 h-10' />
                <h2 className='w-fit'>{item.name}</h2>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills