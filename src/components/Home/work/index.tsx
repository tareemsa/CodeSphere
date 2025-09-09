'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLaptopCode, FaMobileAlt, FaBrain, FaPaintBrush } from 'react-icons/fa'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const services = [
    {
      icon: <FaLaptopCode size={28} className="text-primary" />,
      text: 'Custom web application development',
    },
    {
      icon: <FaMobileAlt size={28} className="text-primary" />,
      text: 'Mobile app development for Android & iOS',
    },
    {
      icon: <FaBrain size={28} className="text-primary" />,
      text: 'AI-powered solutions to boost your business',
    },
    {
      icon: <FaPaintBrush size={28} className="text-primary" />,
      text: 'Creative Graphic Design services',
    },
  ]

  return (
    <section className='' id='work'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl)'>
        <div ref={ref} className='grid grid-cols-12 items-center'>
          <motion.div {...bottomAnimation} className='lg:col-span-7 col-span-12'>
            <div className='flex flex-col gap-3'>
              <p className="text-white font-medium">
               What Makes Our App <span className='text-primary'>Stand Out</span>
              </p>
              <h2 className='sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium'>
                Features of our custom web & mobile development services
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-7 mt-11'>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className='flex items-center gap-5'>
                  <div className='p-3 bg-light_grey/30 rounded-full'>
                    {service.icon}
                  </div>
                  <p className='text-white font-medium'>{service.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...TopAnimation} className='lg:col-span-5 col-span-12'>
            <div className='2xl:-mr-40 mt-9 flex justify-center'>
              <img
                src='/images/work/transparent_fixed (1).png'
                alt='image'
                width={600}
                height={425}
                className='lg:w-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
