import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useEffect} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type FormValues = {
  from_name: string,
  reply_to: string,
  message: string
}

const text = "Say Hi !".split(" ");

const Contact = () => {

  const form = useForm<FormValues>()
  const { register, handleSubmit, formState, } = form
  const { errors, isSubmitting } = formState

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    })
  }, [])

  const sendEmail: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, data)
      if(res.status === 200) toast.success("Message sent")
    } catch (error) {
      console.log(error)  
      toast.error("Error")
    }

  }

  return (
    <div className="flex flex-col md:flex-row md:m-auto items-center gap-10">
      <div className="flex">
        {text.map((el, i) => (
          <motion.span className='text-7xl font-playfair tracking-wide'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: i / 3,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <div className='flex flex-col justify-center gap-4 py-2 px-4 w-full max-w-[500px] m-auto md:w-[500px] px-12 font-roboto'>

        <input className="py-2 px-4 outline-none border-secondary border rounded-md bg-secondary/40 placeholder:text-secondary " placeholder="Name" type="text" {
          ...register("from_name", {
            required: {
              value: true,
              message: "Please enter your name"
            }
          })
        } />
        {
          errors.from_name &&
          <p className='text-red-500'>{errors.from_name.message}</p>
        }
        <input className="py-2 px-4 outline-none border-secondary border rounded-md bg-secondary/40 placeholder:text-secondary" placeholder="Email" type="email" {
          ...register("reply_to", {
            required: {
              value: true,
              message: "Please enter your email"
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })
        } />
        {
          errors.reply_to &&
          <p className='text-red-500'>{errors.reply_to.message}</p>
        }
        <textarea className="py-2 px-4 outline-none border-secondary border rounded-md bg-secondary/40 h-64 placeholder:text-secondary" placeholder="Message" {
          ...register("message", {
            required: {
              value: true,
              message: "Please enter a message"
            }
          })
        }></textarea>
        {
          errors.message &&
          <p className='text-red-500'>{errors.message.message}</p>
        }
        <button className={`px-5 py-2 w-fit rounded-md mx-auto bg-secondary text-white font-semibold ${isSubmitting ? "opacity-60" : ""}`} type='submit' onClick={handleSubmit(sendEmail)}
          disabled={isSubmitting}>
          {isSubmitting ? "..." : "Submit"}</button>
      </div>
    </div>
  )
}

export default Contact