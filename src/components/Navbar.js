import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

export default function Navbar() {
  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl'>
            Venkatapathi Raju
          </a>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
          <a
            href='#projects'
            className='mr-5 text-white hover:bg-gray-700 rounded text-base mt-4 md:mt-0 py-1 px-3'
          >
            Projects
          </a>
          <a
            href='#skills'
            className='mr-5 text-white hover:bg-gray-700 rounded text-base mt-4 md:mt-0 py-1 px-3'
          >
            Skills
          </a>
          <a
            href='https://techpathi.medium.com'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-5 text-white hover:bg-gray-700 rounded text-base mt-4 md:mt-0 py-1 px-3'
          >
            Blog ↗
          </a>
        </nav>
        <div className='float-none'>
          <a
            href='https://www.linkedin.com/in/gvpraju/'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-4 text-2xl hover:text-3xl'
          >
            <i class='fa fa-linkedin' style={{ color: 'whitesmoke' }}></i>
          </a>
          <a
            href='https://twitter.com/iamtechpathi'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-4 text-2xl hover:text-3xl'
          >
            <i class='fa fa-twitter' style={{ color: 'whitesmoke' }}></i>
          </a>
          <a
            href='https://www.instagram.com/iamtechpathi/'
            target='_blank'
            rel='noopener noreferrer'
            className='mr-4 text-2xl hover:text-3xl'
          >
            <i class='fa fa-instagram' style={{ color: 'whitesmoke' }}></i>
          </a>
        </div>
        <a
          href='#contact'
          className='inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
        >
          Hire Me
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </a>
      </div>
    </header>
  );
}
