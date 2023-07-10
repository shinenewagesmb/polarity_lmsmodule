import Image from 'next/image'
import Header from './component/header'
import Footer from './component/footer'
export default function Home() {
  return (
    <main >
      <div className=" bg-primary-500  bg-[url('/lady-with-laptop.jpg')] bg-blend-soft-light bg-no-repeat bg-center bg-cover">
      <div className='md:container mx-auto p-5 pb-0 md:p-10 md:pb-0'>
      <Header/>
      <div className='text-white text-center flex  items-center justify-center' style={{height:600}}>
      <div className='max-w-lg'>
        <h1 className='text-3xl font-bold'>Start Learning With Us Now!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      </div>
      <div className='bg-secondary-50 rounded-t-lg p-6 px-10'>
      <div className='md:flex items-center flex-wrap'>
        <h2 className='text-xl font-bold md:w-4/12 lg:w-3/12 xl:w-3/12 md:border-r-2 border-secondary-500'>Welcome To Online
Polarity Class</h2>
<p className='md:px-10 md:w-8/12 lg:w-5/12 xl:w-6/12 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
<button className='lg:ml-auto rounded-full bg-secondary-500 text-white font-bold text-xs px-6 h-10'>Go to Dashboard</button>
      </div>
      </div>
      </div>
      </div>
      <div className='md:container mx-auto px-5 md:px-10'>
      <div className='bg-white rounded-b-lg p-6 px-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-6'>
            <div className='flex items-center'>
              <div className='rounded-full bg-secondary-50 p-6'>
              <img className='' src='./ic_Students Learning.png' alt='Polarity Partnerships'/>
              </div>
              <div className='ml-4'>
                <p className='text-3xl font-bold'>16M+</p>
                <p className='text-xs'>Students Learning</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-secondary-50 p-6'>
              <img className='' src='./ic_Total course.png' alt='Polarity Partnerships'/>
              </div>
              <div className='ml-4'>
                <p className='text-3xl font-bold'>25K+</p>
                <p className='text-xs'>Total course</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-secondary-50 p-6'>
              <img className='' src='./ic_Quality Teachers.png' alt='Polarity Partnerships'/>
              </div>
              <div className='ml-4'>
                <p className='text-3xl font-bold'>551+</p>
                <p className='text-xs'>Quality Teachers</p>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-secondary-50 p-6'>
              <img className='' src='./ic_Course Subjects.png' alt='Polarity Partnerships'/>
              </div>
              <div className='ml-4'>
                <p className='text-3xl font-bold'>150+</p>
                <p className='text-xs'>Course Subjects</p>
              </div>
            </div>
          </div>
      </div>

      <div className='py-2 md:flex justify-center items-center md:justify-between text-center md:text-inherit'>
        <h2 className='text-3xl font-semibold text-darker-500 py-3 sub-header'>Top Category Courses</h2>
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

            <div className='bg-white rounded-lg p-3 video-wrapper'>
            <img className="rounded-md mb-5 video-thumb object-contain" src="/video.jpg" alt=""/>
            <p className='text-sm text-secondary-500 mb-2'>Jul 5, 2023 – Jul 13, 2023</p>
            <h6 className='text-base font-semibold mb-4'>July 2023 Foundations and 
    Professional Applications ...</h6>
            <div className='flex items-center'>
            <p className='text-green-500 font-bold justify-between'>FREE</p>
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
      <div className='bg-white'>
      <div className='md:container mx-auto px-5 md:px-10'>
      <div className='lg:flex justify-between items-center pt-20'>
        <div>
        <h2 className='text-3xl font-bold'>What We Provide To You</h2>
        <p className='mt-5 md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 mt-10 md:mt-20'>
          <div className='flex'>
          <img className='icon-60' src='./ic_lecture.png' alt='Skilled Lecturers'/>
          <div className='ml-5'>
              <h6 className='font-bold'>Skilled Lecturers</h6>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
          </div>
          </div>
          <div className='flex'>
          <img className='icon-60' src='./ic_library.png' alt='Book Library'/>
          <div className='ml-5'>
              <h6 className='font-bold'>Book Library</h6>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
          </div>
          </div>
          <div className='flex'>
          <img className='icon-60' src='./ic_onlineclass.png' alt='Online Classes'/>
          <div className='ml-5'>
              <h6 className='font-bold'>Online Classes</h6>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
          </div>
          </div>
          <div className='flex'>
          <img className='icon-60' src='./ic_support.png' alt='24x7 Support'/>
          <div className='ml-5'>
              <h6 className='font-bold'>24x7 Support</h6>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
          </div>
          </div>
        </div>
        </div>
        <img className='we-provide' src='./we_provide.png' alt='What We Provide To You'/>
      </div>
      </div>  
      </div>
      <div className='bg-primary-500 text-white'>
        <div className='container mx-auto px-5 md:px-10'>
          <div className='flex flex-col lg:flex-row justify-between py-16'>
            <div className='text-center lg:text-start'>
              <h2 className='font-bod text-3xl'>Join Our Community</h2>
              <p className='mt-1 lg:w-3/4 '>Enter your email address to register to our newsletter subscription delivered on regular basis!</p>
            </div>
            <div className=' flex flex-col justify-center py-3'>
            <label class="inline-block relative">  
  <input type="email" name="email" class="subscribe-email p-4 bg-white border-none  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
  <button className='absolute subscribe-button lg:ml-auto rounded-full bg-secondary-500 text-white font-bold text-base px-6 h-10'>Subscribe</button>
</label>
          </div>
          </div>
          
        </div>
      </div>
      <div className='bg-white py-20'>
      <div className='container mx-auto px-5 md:px-10'>
       <div className='flex flex-col items-center'>
       <div className='text-center lg:w-8/12'>
          <h2 className='text-3xl font-bold'>What our clients say </h2>
          <p className='text-center mt-2'>Many of our clients have developed good partnerships with us, and we are grateful for that. And we've developed real friendships with them in addition to business connections. This is what people have to say about us</p>
        </div>
       </div>
       <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10'>
          <div className='text-center flex flex-col justify-center  items-center'>
          <img className="rounded-full h-24 w-24 " src="/user.jpg" alt=""/>
            <p className='font-bold mt-6'>Peter Madison</p>
            <p className='w-64 mt-1'>Lorem ipsum dolor sit amet, consectetur dipiscing elit...</p>
          </div>
          <div className='text-center flex flex-col justify-center  items-center'>
          <img className="rounded-full h-24 w-24 " src="/user.jpg" alt=""/>
            <p className='font-bold mt-6'>Peter Madison</p>
            <p className='w-64 mt-1'>Lorem ipsum dolor sit amet, consectetur dipiscing elit...</p>
          </div>
          <div className='text-center flex flex-col justify-center  items-center'>
          <img className="rounded-full h-24 w-24 " src="/user.jpg" alt=""/>
            <p className='font-bold mt-6'>Peter Madison</p>
            <p className='w-64 mt-1'>Lorem ipsum dolor sit amet, consectetur dipiscing elit...</p>
          </div>
          <div className='text-center flex flex-col justify-center  items-center'>
          <img className="rounded-full h-24 w-24 " src="/user.jpg" alt=""/>
            <p className='font-bold mt-6'>Peter Madison</p>
            <p className='w-64 mt-1'>Lorem ipsum dolor sit amet, consectetur dipiscing elit...</p>
          </div>
       </div>
      </div>
      </div>
     <Footer/>
    </main>
  )
}
