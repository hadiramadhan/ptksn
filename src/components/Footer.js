import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base 
    '>
        <Layout classname='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy;Landing Page Pt KSN</span>
            <div className='flex items-center lg:py-2'> 
            Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&hearts;</span>
            By&nbsp;<Link href="https://komoditassinerginusantara.com/" className='underline underline-offset-2' target='_blank'>PT KSN</Link>
            </div>
           
            <Link href="https://www.instagram.com/ksn.office/" target='_blank' >Offical PT KSN</Link>
        </Layout>
    </footer>
  )
}

export default Footer
