import Image from 'next/image'
import Header from '../component/header'
import Footer from '../component/footer'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Addscromecourse() {
  return (
    
    <main >
    <div className=" bg-primary-500 bg-blend-soft-light ">
    <div className='md:container mx-auto p-5 pb-0 md:p-10 md:pb-0'>
    <Header/>
    <div>
      <h1 className='font-bold text-center text-4xl text-white py-8'>Add New Scrom Course </h1>
    </div>
    </div>
    </div>    
  <section>
  <div className='md:container mx-auto p-5 pb-0 md:p-10'>
    <div className='p-10 bg-white max-w-4xl mx-auto'>
      <div className='sm:max-w-2xl mx-auto'>      
      <div  class="mb-6">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Course Name</label>
          <div class="mt-2 sm:max-w-2xl"> <Input className='input-rounded py-7 rounded-full bg-slate-100' /></div>
      </div>
      <div  class="mb-6">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div class="mt-2 sm:max-w-2xl"> <Textarea className='textarea-rounded rounded-3xl bg-slate-100' /></div>
      </div>
      <div  class="mb-6">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
          <div class="mt-2 sm:max-w-2xl">
          <Select >
          <SelectTrigger className="select-rounded rounded-full h-14 bg-slate-100 px-6">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Web Development</SelectItem>
            <SelectItem value="dark">Android Development</SelectItem>
            <SelectItem value="system">Music</SelectItem>
          </SelectContent>
          </Select>
          </div>
        </div>
      <div  class="mb-6">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Language</label>
          <div class="mt-2 sm:max-w-2xl">
          <Select >
          <SelectTrigger className="select-rounded rounded-full h-14 bg-slate-100 px-6">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">English</SelectItem>
            <SelectItem value="dark">French</SelectItem>
            <SelectItem value="system">Chinese</SelectItem>
          </SelectContent>
          </Select>
          </div>
        </div>
      <div  class="mb-6">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <div class="mt-2 sm:max-w-2xl">
          <Select >
          <SelectTrigger className="select-rounded rounded-full h-14 bg-slate-100 px-6">
            <SelectValue placeholder="Theme"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">$ 100</SelectItem>
            <SelectItem value="dark">$ 200</SelectItem>
            <SelectItem value="system">$ 300</SelectItem>
          </SelectContent>
          </Select>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end sm:max-w-2xl'>
        <button className='rounded-full border bg-slate-500 hover:border-primary-300 text-primary-500 text-md  my-6 px-12  mr-16 h-14 text-white'>CANCEL</button>
        <button className='rounded-full border hover:border-primary-300 bg-secondary-500 text-md  my-6 px-12  h-14 w-[180px] text-white' >SAVE</button>
        </div>
      </div>
    </div>    
    </div>
  </section>  
  <Footer/>
    </main>
  )
}
