import projects from './projects';
import { motion } from 'framer-motion';

const variants = {
    initial: {
      x: -500,
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
const variantsX = {
    initial: {
      x: 500,
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

const Projects = () => {

    return (
      <div className='w-full h-3/4 overflow-auto snap-y snap-mandatory scroll-smooth space-y-4 p-2 font-roboto'>
          {
              projects.map((project, index) => (
                  <motion.div variants={variants} initial="initial"
                  whileInView="animate" viewport={{once:true}} className='w-full h-full flex flex-col snap-center gap-4 rounded-lg shadow-lg p-4 overflow-hidden border-y-2 border-secondary md:flex-row ' key={index}>
                    <div className='flex flex-col space-y-3 justify-start md:flex-1'>

                      <h1 className='text-3xl font-poppins font-semibold text-secondary'>{project.name}</h1>
                      <div className='flex gap-4 flex-wrap'>
                        {
                            project.tech.map((item, index) => (
                                <div className='bg-white px-2 py-1 text-sm font-semibold text-secondary border-2 border-secondary rounded-md text-nowrap' key={index}>{item}</div>
                            ))
                        }
                      </div>
                      <p className='text-lg'>{project.description}</p>
                      {
                          project.collaborators &&
                          <h2 className='font-medium'>Collaborators: {project.collaborators}</h2>
                        }
                      {
                          project.note &&
                          <h2 className='text-sm italic'>Note: {project.note}</h2>
                        }
                      <div className='space-x-4'>
                          <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href={project.code}>Code</a>
                          <a className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' href={project.link}>View Live</a>
                      </div>
                      </div>
                      <motion.div variants={variantsX} initial="initial" whileInView="animate" viewport={{once:true}} className='m-auto w-full flex-grow md:flex-1'>

                      {
                          project.video
                          ?
                          <iframe className='w-full h-full md:aspect-video rounded-lg' src={project.video}></iframe>
                          :
                          <img className='w-full rounded-lg' src={project.image} alt="" />
                        }
                        </motion.div>
                  </motion.div>
              ))
          }
      </div>
    )
  }
  

export default Projects
