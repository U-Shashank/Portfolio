import { motion } from "framer-motion"

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5 }

  },
}

const textVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1 }

  },
}

const About = () => {

  return (
    <div className="flex flex-col h-full justify-center gap-10 md:gap-10 items-center m-3 md:flex-row m-auto">
      <motion.img
        className="h-64 hidden xs:block"
        src="/code.svg"
        alt=""
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
      />
      <motion.p
        className="py-2 px-20 md:px-8 text-2xl font-poppins text-center text-primary leading-normal"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
      >
        Currently pursuing Btech in Computer Science from IIIT Kottayam, I'm a tech and code enthusiast with a knack for quick learning and adaptation.I am passionate about full-stack development. Beyond the digital world, I am into fitness and like to watch movies. I am always ready to learn, adapt, and explore.
      </motion.p>
    </div>
  )
}

export default About
