import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  return (
    <nav className='w-full p-3 flex justify-between bg-purple-700 items-center'>
  <div className='w-full flex justify-end'>
    <ul className='flex flex-row space-x-8 text-white items-center'>
      <li className='hover:text-fuchsia-200 transition'><Link href="/NavElements/Home">Home</Link></li>
      <li className='hover:text-fuchsia-200 transition'><Link href="/NavElements/Contact">Contact</Link></li>
      <li className='hover:text-fuchsia-200 transition'><Link href="/NavElements/About">About us</Link></li>
      <li className='hover:text-fuchsia-200 transition'><Link href="/NavElements/FAQ">FAQ</Link></li>
      <li>
        <Button className="text-white bg-fuchsia-600 hover:bg-fuchsia-700 transition">
          <Link href="#">Login</Link>
        </Button>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar