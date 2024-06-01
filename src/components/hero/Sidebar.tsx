import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";


const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };


const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const links = ["Home", "Skills", "Projects", "About", "Contact"]

    return (
    <motion.div className="sm:hidden flex flex-col z-10" animate={open ? "open" : "closed"}>
        <motion.div className={`flex flex-col fixed bg-white top-0 bottom-0 w-1/2 justify-center items-center m-auto ${!open ? "hidden" : ""}`} variants={variants}>
        {
            links.map((link) => (
                <a href={`#${link}`} key={link} className="text-secondary py-2 text-xl font-poppins font-semibold transition ease-in-out hover:scale-150">{link}</a>
            ))
        }
        </motion.div>
        <button className="fixed top-4 left-4 text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" onClick={() => setOpen((prev) => !prev)}>
            {
                open ? 
                <IoMdClose/> :
                <FaBars/>
            }
        </button>
    </motion.div>
  )
}

export default Sidebar