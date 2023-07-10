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
      <h1 className='font-bold text-center text-4xl text-white py-8'>Courses</h1>
    </div>
    </div>
    </div>

    <div className='bg-white'>
    <div className='flex md:container justify-center lg:justify-end mx-auto px-5 md:px-10'>
    <button className=' rounded-full border bg-secondary-500 hover:bg-secondary-300 text-white text-md  my-6 px-6 h-14'>Import Scrom Course</button>
    <button className=' ml-6 rounded-full border bg-secondary-500 hover:bg-secondary-300 text-white text-md  my-6 px-6 h-14'>Add Course</button>
 
    </div>
    </div>
  <section>
  <div className='md:container mx-auto p-5 pb-0 md:p-10'>
    <div className='pb-6'>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden bg-white shadow-sm">
        <table class="min-w-full text-center text-sm font-light">
          <thead
            class="border-b bg-darker-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" class=" px-6 text-left py-4">ID</th>
              <th scope="col" class=" px-6 text-left py-4">Course Title </th>
              <th scope="col" class=" px-6 text-left py-4">Category </th>
              <th scope="col" class=" px-6 text-center py-4">Purchase Count </th>
              <th scope="col" class=" px-6 text-center py-4">Price </th>
              <th scope="col" class=" px-6 text-center py-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-darker-100">
              <td class="whitespace-nowrap text-left px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap text-left px-6 py-4">July 2023 Foundations and Professional ...</td>
              <td class="whitespace-nowrap text-left  px-6 py-4">Web Development</td>
              <td class="whitespace-nowrap text-center  px-6 py-4">10</td>
              <td class="whitespace-nowrap text-center px-6 py-4">$100</td>
              <td class="whitespace-nowrap  px-6 py-4"></td>
            </tr>
            <tr class="border-b dark:border-darker-100">
              <td class="whitespace-nowrap text-left px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap text-left px-6 py-4">July 2023 Foundations and Professional ...</td>
              <td class="whitespace-nowrap text-left  px-6 py-4">Web Development</td>
              <td class="whitespace-nowrap text-center  px-6 py-4">10</td>
              <td class="whitespace-nowrap text-center px-6 py-4">$100</td>
              <td class="whitespace-nowrap  px-6 py-4"></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
      <div className='flex justify-end'>
      <nav class="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">        
       
        <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-secondary-500 px-4 py-2 text-sm  mx-1 font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full">1</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  mx-1 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-full">2</a>
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 mx-1 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex rounded-full">3</a>
        
        <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 mx-1 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex rounded-full">8</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 mx-1 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-full">9</a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 mx-1 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-full">10</a>
       
      </nav>
    </div>
    </div>
  </section>  
  <Footer/>
    </main>
  )
}
