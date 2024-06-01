import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const items = [{
  icon: <FaLinkedinIn className="w-8 h-8"/>,
  link: "https://www.linkedin.com/in/upadhyay-shashank",
},
{
  icon: <FaGithub className="w-8 h-8"/>,
  link: "https://github.com/U-Shashank",
},
{
  icon: <FaTwitter className="w-8 h-8"/>,
  link: "https://x.com/ShashankUp46820",
},
{
  icon: <IoIosDocument className="w-8 h-8"/>,
  link: "https://drive.google.com/file/d/1L6v0rfv58IBKob9vk7gUZo_rPYQEjnf_/view?usp=sharing",

},]

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
    }
  }
};

const Hero = () => {
  return (
    <motion.div className="flex flex-col gap-10 w-3/4 m-auto sm:flex-row max-w-[1000px]" variants={variants} initial="initial" animate="animate">
      <motion.div className="w-60 max-w-[400px] aspect-square rounded-full m-auto border-2 border-secondary flex-1" variants={variants}>
        <img src="/shashank.jpg" alt="" className="w-full h-full object-cover rounded-full" />
      </motion.div>
      <motion.div className="w-fit m-auto flex-1" variants={variants}>
      <motion.h1 className="font-playfair text-4xl text-center lg:text-6xl w-fit m-auto" variants={variants}>Hi, I'm <span className="text-secondary font-bold">Shashank.</span></motion.h1>
      <motion.h1 className="font-playfair text-3xl w-fit m-auto lg:text-4xl text-center" variants={variants}>I'm a full stack developer.</motion.h1>
      <motion.div className="flex gap-4 w-fit m-auto mt-4" variants={variants}>
        {
          items.map((item) => (
            <a href={item.link} key={item.link} target="_blank" className="text-secondary transition ease-in-out hover:-translate-y-1">{item.icon}</a>
          ))
        }
      </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Hero