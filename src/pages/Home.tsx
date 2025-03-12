import { useRef } from "react"
import Hero from "@/components/hero/Hero"
import Bento from "@/components/bento/Bento"
import { motion, useInView } from "framer-motion"

const Home = () => {
  const heroRef = useRef(null)
  const bentoRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const bentoInView = useInView(bentoRef, { once: true, amount: 0.1 })

  return (
    <div className="px-2">
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        ref={bentoRef}
        initial={{ opacity: 0, y: 30 }}
        animate={bentoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Bento />
      </motion.div>
    </div>
  )
}

export default Home
