import Image from 'next/image'
import Link  from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header() {
  return (
   <div className='rounded-lg bg-secondary-500 flex flex-col drop-shadow-md'>
    <div className='rounded-lg bg-white flex p-3 px-5'>
    <a href="./" className='md:hidden flex-auto'><img className='' src='./polarity-logo-sm.png' alt='Polarity Partnerships'/></a>
    <a href="./" className='hidden sm:block flex-auto'><img className='' src='./polarity-logo.png' alt='Polarity Partnerships'/></a>
    <div className='flex items-center'>
        <p className='pr-2'>Thomas</p>
        <DropdownMenu>
  <DropdownMenuTrigger className='md:hidden flex justify-start items-center' > <img className="rounded-full h-12 w-12 " src="/user.jpg" alt=""/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Home</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Dashboard</DropdownMenuItem>
    <DropdownMenuItem>All Caurses</DropdownMenuItem>
    <DropdownMenuItem>My Caurses</DropdownMenuItem>    
  </DropdownMenuContent>
</DropdownMenu>   
    </div>
    </div>
    <div>
    <nav class="flex mx-3">   
    <DropdownMenu>
  <DropdownMenuTrigger className='md:hidden flex justify-start items-center' > <FontAwesomeIcon icon={faBars} className='w-6 h-6 text-darker-500 mr-2 my-3 focus:outline-0 visited:shadow' /> <span className='text-xs'>MENU</span></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Home</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Dashboard</DropdownMenuItem>
    <DropdownMenuItem>All Caurses</DropdownMenuItem>
    <DropdownMenuItem>My Caurses</DropdownMenuItem>    
  </DropdownMenuContent>
</DropdownMenu>         
            <a href="#" class="bg-secondary-600 text-white px-3 py-2 text-sm font-medium hidden md:block" aria-current="page">Home</a>
            <a href="#" class="text-white hover:bg-secondary-600 hover:text-white  px-3 py-2 text-sm font-medium hidden md:block">Dashboard</a>
            <a href="#" class="text-white hover:bg-secondary-600 hover:text-white  px-3 py-2 text-sm font-medium hidden md:block">All Caurses</a>
            <a href="#" class="text-white hover:bg-secondary-600 hover:text-white  px-3 py-2 text-sm font-medium hidden md:block">My Caurses</a>
          </nav>
    </div>
   </div>
  )
}
