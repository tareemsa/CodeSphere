// services.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  FaMobileAlt, 
  FaLaptopCode, 
  FaBrain, 
  FaServer, 
  FaSearch, 
  FaCloud, 
  FaPalette, 
  FaChartLine, 
  FaArrowRight 
} from 'react-icons/fa'

const servicesData = [
  {
    icon: <FaMobileAlt size={28} />,
    title: 'Mobile App Development',
    description: 'iOS & Android apps with smooth performance and sleek UI/UX.'
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: 'Website Development',
    description: 'Custom, responsive websites with modern designs.'
  },
  {
    icon: <FaBrain size={28} />,
    title: 'AI Integration',
    description: 'Smart AI features to make your apps and sites smarter.'
  },
  {
    icon: <FaServer size={28} />,
    title: 'Hosting & Maintenance',
    description: 'Reliable hosting with updates and support.'
  },
  {
    icon: <FaSearch size={28} />,
    title: 'SEO Optimization',
    description: 'Improve visibility and ranking on search engines.'
  },
  {
    icon: <FaCloud size={28} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud setup for apps and websites.'
  },
  {
    icon: <FaPalette size={28} />,
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly interfaces for web and mobile.'
  },
  {
    icon: <FaChartLine size={28} />,
    title: 'Analytics & Reporting',
    description: 'Track performance and make data-driven decisions.'
  },
]

const Services = () => {
  return (
    <section id="services" className='pt-24 md:pt-44 relative z-1 bg-darkmode'>
      <div className='container px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-white sm:text-44 text-32 font-bold mb-4'>
            Our Services
          </h2>
          <p className='text-muted/80 text-18 max-w-2xl mx-auto leading-relaxed'>
            We deliver top-notch mobile apps, websites, AI features, SEO, hosting, and more to boost your business.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group bg-section/10 p-8 rounded-3xl border border-section/20 relative overflow-hidden transition-all hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 shadow-lg hover:shadow-2xl'
            >
              <div className='flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-white'>
                {service.icon}
              </div>
              <h3 className='text-white text-xl font-semibold mb-2'>
                {service.title}
              </h3>
              <p className='text-muted/80 text-16 leading-relaxed'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='flex justify-center mt-16'
        >
          <a
            href='/contact'
            className='flex items-center gap-3 bg-primary hover:bg-primary/80 text-darkmode font-medium py-3 px-6 rounded-lg text-18 transition-all shadow-md group'
          >
            Get a Free Consultation
            <FaArrowRight className='ml-2 transition-transform duration-300 group-hover:translate-x-1' />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
