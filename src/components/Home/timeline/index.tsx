'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaClipboardList,
  FaRegCalendarAlt,
  FaPenNib,
  FaCode,
  FaVial,
  FaCloudUploadAlt,
  FaTools,
} from 'react-icons/fa'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const timelineData = [
    { title: '1. Requirements Analysis', text: 'Gather requirements and define project scope.', icon: <FaClipboardList size={28} /> },
    { title: '2. Planning', text: 'Plan tasks, resources, and timelines.', icon: <FaRegCalendarAlt size={28} /> },
    { title: '3. Design', text: 'Craft modern and user-friendly UI/UX designs.', icon: <FaPenNib size={28} /> },
    { title: '4.Implementation', text: 'Write clean, maintainable, and scalable code.', icon: <FaCode size={28} /> },
    { title: '5. Testing', text: 'Perform unit, integration, and system testing.', icon: <FaVial size={28} /> },
    { title: '6. Deployment', text: 'Deploy the application to production environment.', icon: <FaCloudUploadAlt size={28} /> },
    { title: '7. Maintenance & Updates', text: 'Monitor, fix bugs, and add new features.', icon: <FaTools size={28} /> },
  ]

  return (
    <section className='md:pt-40 pt-12 relative' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}>
            <span className='text-white'>Software Development Lifecycle</span>
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-white/70 mt-4'>
            Step-by-step process to deliver high-quality and scalable software solutions.
          </motion.p>
        </div>

        {/* Desktop Timeline */}
        <div className='hidden md:flex justify-between relative items-stretch'>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 100 }}
              className='flex flex-col items-center flex-1 mx-2'>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className='bg-light_grey/50 backdrop-blur-xs p-4 rounded-full mb-4 text-primary'>
                {item.icon}
              </motion.div>
              <h5 className='text-white font-semibold text-center text-18 mb-2'>
                {item.title}
              </h5>
              <p className='text-white/70 text-center text-14'>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className='grid md:hidden grid-cols-1 gap-8'>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15, type: 'spring', stiffness: 100 }}
              className='flex items-center gap-4 bg-light_grey/10 p-4 rounded-lg'>
              <motion.div whileHover={{ scale: 1.2 }} className='bg-light_grey/50 backdrop-blur-xs p-4 rounded-full text-primary'>
                {item.icon}
              </motion.div>
              <div>
                <h5 className='text-white font-semibold text-16'>{item.title}</h5>
                <p className='text-white/70 text-14'>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimeLine
