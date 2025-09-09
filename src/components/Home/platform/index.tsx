
//our services 
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Platform = () => {
  return (
    <section className='md:pt-44 sm:pt-24 pt-12 relative z-1'>
      <div className='container px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-section/10 px-16 py-14 rounded-3xl border-2 border-section/20 grid grid-cols-12 items-center relative overflow-hidden before:content-[''] before:absolute before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-6 lg:before:right-0 before:-z-1 before:opacity-10"
        >
          <div className='lg:col-span-8 col-span-12'>
            <h2 className='text-white sm:text-40 text-30 mb-6'>
              Empowering Your Business with Innovative Software Solutions
            </h2>
            <p className='text-muted/60 text-18'>
              We create custom websites, mobile apps, and software solutions tailored to your business needs.
            </p>
          </div>
          <div className='lg:col-span-4 col-span-12'>
            <div className='flex lg:justify-end lg:mt-0 mt-7 justify-center'>
              <Link
                href='/contact'
                className='flex items-center gap-2.5 text-darkmode bg-primary hover:bg-primary/80 border border-primary py-3 px-5 rounded-lg sm:text-21 text-18 font-medium'>
                Get a Free Consultation
                <Image 
                  src={"/images/icons/icon-arrow.svg"} 
                  alt="arrow icon" 
                  width={20} 
                  height={20} 
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Platform
