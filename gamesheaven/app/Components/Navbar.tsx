import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  return (
    <nav className='w-full p-3 flex justify-between bg-[rgb(39,68,93)] items-center'>
        <div className='w-full flex justify-end'>
            <ul className='flex flex-row space-x-8 text-white items-center'>
                <li className='hover:bg-yellow-400 hover:text-black p-3'><Link href="/NavElements/Home">Home</Link></li>
                <li className='hover:bg-yellow-400 hover:text-black p-3'><Link href="/NavElements/Contact">Contact</Link> </li>
                <li className='hover:bg-yellow-400 hover:text-black p-3'><Link href="/NavElements/About">About us</Link> </li>
                <li className='hover:bg-yellow-400 hover:text-black p-3'><Link href="/NavElements/FAQ">FAQ</Link> </li>
                <Button><Link href="#">Login</Link></Button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar