import Image from 'next/image'
import Link  from 'next/link'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
    
  return (
    
   <div className='bg-darker-500 flex'>
        <div className='container mx-auto p-5 md:p-10'>
            <div className='grid  grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
                <div className='text-sm leading-5 text-darker-50'>
                    <h6 className='mb-4 text-lg text-darker-200 font-semibold'>Address</h6>
                    <p className='mb-2'>Polarity Partnerships</p>
                    <p className='mb-2'>Sacramento | Washington, DC </p>
                    <p className='mb-2'>Grand Rapids | Colorado Springs</p>
                </div>
                <div className='text-sm  text-darker-50'>
                    <h6 className='mb-4 text-lg text-darker-200 font-semibold'>Contact</h6>
                    <ul>
                        <li className='mb-2'><a href='#'>(916) 793-5400</a></li>
                        <li className='mb-2'><a href='#'>operations@polaritypartnerships.com</a></li>
                    </ul>
                </div> 
                <div className='text-sm  text-darker-50'>
                    <h6 className='mb-4 text-lg text-darker-200 font-semibold'>Links</h6>
                    <ul>
                        <li className='mb-2'><a href='#'>Polarity Resource Portal</a></li>
                        <li className='mb-2'><a href='#'>Consulting Services</a></li>
                        <li className='mb-2'><a href='#'>Book Store</a></li>
                        <li className='mb-2'><a href='#'>Contact us</a></li>
                    </ul>
                </div> 
            </div>
            <div className='sm:flex sm:justify-between pt-10 text-darker-200 text-sm border-t border-darker-300'>
                <p>© Copyright 2020 Polarity Partnerships, LLC, All Rights Reserved</p>
                <ul className='flex justify-end items-center'>
                    <li className='mr-5'><a href='#'><FontAwesomeIcon icon={faFacebook} className='text-slate-300 h-10 w-10 hover:text-slate-100' /> </a></li>
                    <li><a href='#'> <FontAwesomeIcon icon={faLinkedin} className='text-slate-300 h-10 w-10  hover:text-slate-100' /> </a></li>
                </ul>
            </div>
        </div>
   </div>
  )
}
