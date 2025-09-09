'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BrandLogo from '../BrandLogo';
import CardSlider from './slider';

const leftAnimation = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
  transition: { duration: 0.6 },
};

const rightAnimation = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
  transition: { duration: 0.6 },
};

const Hero = () => {
  return (
    <section className="relative py-24 pt-48 overflow-hidden z-1" id="main-banner">
      <div className="container">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Left: Text */}
          <motion.div {...leftAnimation} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <div className="py-1.5 px-4 bg-primary/10 rounded-full border border-white/10">
                  <span className="text-primary font-medium">
                    Web & Mobile Development + AI
                  </span>
                </div>
              </div>

              <h1 className="font-medium xl:text-[72px] lg:text-6xl md:text-54 sm:text-5xl text-4xl md:text-start text-center text-white">
                Crafting Beautiful & Responsive<br /> Digital Experiences
              </h1>

              <p className="text-white md:max-w-[560px] md:mx-0 mx-auto">
                We design and ship high-quality websites and mobile apps, and add AI features like
                chatbots, text-to-speech, smart analytics, and personalization—tailored to your
                business.
              </p>
            </div>

            <div className="flex items-center md:justify-start justify-center gap-4">
              <Link
                href="/#services"
                className="bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-darkmode py-3 px-7 cursor-pointer"
              >
                See Services
                <Image src="/images/icons/icon-arrow.svg" alt="arrow-icon" width={20} height={20} />
              </Link>

<Link
  href="/contact"
  className="border border-white/20 hover:border-primary text-white hover:text-primary rounded-lg font-semibold py-3 px-7 cursor-pointer"
>
  Contact Us
</Link>

            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div {...rightAnimation}>
            <div className="w-full h-full">
              <Image
              src='/images/hero/HeroImage.png'
                alt="Hand holding a smartphone with modern app UI and AI widgets"
                width={584}
                height={582}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* logos & slider (بدون أسعار) */}
        <BrandLogo />
        <CardSlider />
      </div>
    </section>
  );
};

export default Hero;
