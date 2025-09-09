import React, { FC } from 'react'
import Link from 'next/link'
import { headerData } from '../Header/Navigation/menuData'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-darkmode'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 pb-12'>
          
          {/* 1. Logo + About + Social */}
          <div className='flex flex-col gap-6'>
            <Logo />
            <p className='text-white/60 max-w-sm'>
              GreatSyria empowers businesses with modern digital solutions,
              building custom platforms for growth and innovation.
            </p>
            <div className='flex gap-6 items-center'>
              <Link href='https://www.facebook.com/' className='group'>
                <Icon icon='fa6-brands:facebook-f' width='22' height='22' className='text-white group-hover:text-primary'/>
              </Link>
              <Link href='https://www.instagram.com/' className='group'>
                <Icon icon='fa6-brands:instagram' width='22' height='22' className='text-white group-hover:text-primary'/>
              </Link>
              <Link href='https://www.twitter.com/' className='group'>
                <Icon icon='fa6-brands:x-twitter' width='22' height='22' className='text-white group-hover:text-primary'/>
              </Link>
            </div>
          </div>

          {/* 2. Links */}
          <div>
            <h4 className='text-white mb-4 font-medium text-20'>Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className='pb-3'>
                  <Link
                    href={item.href}
                    className='text-white/60 hover:text-primary text-16'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact */}
          <div>
            <h4 className='text-white mb-4 font-medium text-20'>Contact</h4>
            <ul className='text-white/60 space-y-3'>
              <li>
                Email:{' '}
                <a href="mailto:info@greatsyria.com" className='hover:text-primary'>
                  info@greatsyria.com
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:+963123456789" className='hover:text-primary'>
                  +963 123 456 789
                </a>
              </li>
              <li>
                Location: Damascus, Syria
              </li>
            </ul>
          </div>
        </div>

        <p className='text-white/40 text-center py-6 border-t border-white/20 text-sm'>
          © {new Date().getFullYear()} GreatSyria. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
