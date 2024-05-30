import {motion } from "framer-motion";

type Props = {
  currentPage: string
}

const variants = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 0.2,
    }
  }
}

const Navbar = ({currentPage} : Props) => {
  
  const links = ["Home", "Skills", "Projects", "About", "Contact"]
  return (
    <motion.div className="gap-20 m-auto w-fit sm:bg-white py-1 px-2 rounded-3xl fixed top-4 left-0 right-0 sm:flex bg-transparent z-20" variants={variants} initial="initial" animate="animate">
        {
            links.map((link) => (
                <a href={`#${link}`} className={`text-secondary font-poppins font-semibold transition ease-in-out py-1 px-1 sm:block ${currentPage === link ? "bg-secondary rounded-lg text-white border-white border-4 sm:border-0" : "hidden"}`}>{link}</a>
            ))
        }
    </motion.div>
  )
}

export default Navbar