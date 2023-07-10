import Image from 'next/image'
import Header from '../component/header'
import Footer from '../component/footer'

export default function Dashboard() {
  return (
    
    <main >
    <div className=" bg-primary-500 bg-blend-soft-light ">
    <div className='md:container mx-auto p-5 pb-0 md:p-10 md:pb-0'>
    <Header/>
    <div>
      <h1 className='font-bold text-center text-4xl text-white py-8'>Dashboard</h1>
    </div>
    </div>
    </div>

    <div className='split-bg'>
    <div className='flex flex-col lg:flex-row md:container mx-auto px-5 md:px-10'>
      <div className='bg-secondary-500 w-3/5 slanding flex justify-between items-center'>
        <div className='py-5'>
        <div className='grid grid-cols-3 gap-5'>
          <a href='#' className='rounded-lg ring-1 ring-white p-3 px-5 flex items-center hover:bg-secondary-700'>
          <img className='' src='./ic_btnlibrary.png'/>
          <span className='ml-5 font-bold text-lg text-white invisible lg:visible'>Library</span>
          </a>
          <a href='#' className='rounded-lg ring-1 ring-white p-3 px-5 flex items-center hover:bg-secondary-700'>
          <img className='' src='./ic_btncourse.png'/>
          <span className='ml-5 font-bold text-lg text-white invisible lg:visible'>Courses</span>
          </a>
          <a href='#' className='rounded-lg ring-1 ring-white p-3 px-5 flex items-center hover:bg-secondary-700'>
          <img className='' src='./ic_btncommunity.png'/>
          <span className='ml-5 font-bold text-lg text-white invisible lg:visible'>Community</span>
          </a>
        </div>
        </div>
        <div className='invisible lg:visible'>
        <img className='' src='./slanding.png'/>
        </div>
      </div>
      <div className='bg-darker-500 py-6 w-2/5'>
        <div className='grid grid-cols-2 gap-5'>
          <div className='text-center text-white'>
            <p className='text-4xl font-bold'>15</p>
            <p><span className='invisible lg:visible'>Courses</span> Completed</p>
          </div>
          <div className='text-center text-white'>
            <p className='text-4xl font-bold'>08</p>
            <p><span className='invisible lg:visible'>Courses</span> In Progress</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  <section>
  <div className='md:container mx-auto p-5 pb-0 md:p-10'>
    <div className='py-2 md:flex justify-center items-center md:justify-between text-center md:text-inherit'>
        <h2 className='text-3xl font-semibold text-darker-500 py-3 sub-header'>Recent Courses</h2>
        <button className='lg:ml-auto rounded-full border border-primary-500 hover:border-primary-300 text-primary-500 text-base  my-6 px-6 h-10'>View All Courses</button>
      </div>
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-4'>
            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
    <div class="w-full bg-gray-200 max-w-sm my-4 mx-auto rounded-lg overflow-hidden border border-gray-300">
              <div class="bg-green-500 text-xs leading-none py-1" style={{width:'80%'}} ></div>
            </div>
            </div>

            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
    <div class="w-full bg-gray-200 max-w-sm my-4 mx-auto rounded-lg overflow-hidden border border-gray-300">
              <div class="bg-green-500 text-xs leading-none py-1" style={{width:'40%'}} ></div>
            </div>
            </div>

            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
    <div class="w-full bg-gray-200 max-w-sm my-4 mx-auto rounded-lg overflow-hidden border border-gray-300">
              <div class="bg-green-500 text-xs leading-none py-1" style={{width:'20%'}} ></div>
            </div>
            </div>

            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
              <div class="w-full bg-gray-200 max-w-sm my-4 mx-auto rounded-lg overflow-hidden border border-gray-300">
              <div class="bg-green-500 text-xs leading-none py-1" style={{width:'50%'}} ></div>
            </div>
            </div>
        </div>
        <div className='py-2 md:flex justify-center items-center md:justify-between text-center md:text-inherit'>
        <h2 className='text-3xl font-semibold text-darker-500 py-3 sub-header'>Suggested Courses</h2>
        <button className='lg:ml-auto rounded-full border border-primary-500 hover:border-primary-300 text-primary-500 text-base  my-6 px-6 h-10'>View All Courses</button>
      </div>
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-4'>
            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
            <div className='flex items-center justify-between'>
            <p className='text-green-500 font-bold'>FREE</p>
            <button className='lg:ml-auto rounded-full border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white text-sm px-6 h-10'>Buy Now</button>
            </div>
            </div>

            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
            <div className='flex items-center justify-between'>
            <p className='text-green-500 font-bold'>FREE</p>
            <button className='lg:ml-auto rounded-full border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white text-sm px-6 h-10'>Buy Now</button>
            </div>
            </div>

            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
            <div className='flex items-center justify-between'>
            <p className='text-green-500 font-bold'>FREE</p>
            <button className='lg:ml-auto rounded-full border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white text-sm px-6 h-10'>Buy Now</button>
            </div>
            </div>

            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
            <div className='flex items-center justify-between'>
            <p className='text-green-500 font-bold'>FREE</p>
            <button className='lg:ml-auto rounded-full border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white text-sm px-6 h-10'>Buy Now</button>
            </div>
            </div>
        </div>
    </div>
  </section>
  <section className='bg-white'>
    <div className='md:container mx-auto p-5 md:p-10 '>
    <div className='py-2 md:flex justify-center items-center md:justify-between text-center md:text-inherit mb-16'>
        <h2 className='text-3xl font-semibold text-darker-500 py-3 sub-header'>Top Categories</h2>
      </div>
      <div>
      <ul className='flex flex-wrap'>
        <li className='mr-5'>
          <a href='#' className='bg-primary-100 rounded-full px-8 py-4 hover:bg-primary-50 text-lg'>Web Development</a>
        </li>
        <li className='mr-5'>
          <a href='#' className='bg-secondary-100 rounded-full px-8 py-4 hover:bg-secondary-50 text-lg'>Design</a>
        </li>
        <li className='mr-5'>
          <a href='#' className='bg-green-100 rounded-full px-8 py-4 hover:bg-green-50 text-lg'>Marketing</a>
        </li>
        <li className='mr-5'>
          <a href='#' className='bg-orange-100 rounded-full px-8 py-4 hover:bg-orange-50 text-lg'>Business</a>
        </li>
        <li className='mr-5'>
          <a href='#' className='bg-cyan-100 rounded-full px-8 py-4 hover:bg-cyan-50 text-lg'>Music</a>
        </li>
      </ul>
    </div>
    </div>
   
  </section>
  <Footer/>
    </main>
  )
}
