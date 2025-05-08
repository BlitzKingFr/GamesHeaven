import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
        <div>
            <ul>
                <li><Link href="/NavElements/Home">Home</Link> </li>
                <li><Link href="/NavElements/Contact">Contact</Link> </li>
                <li><Link href="/NavElements/About">About us</Link> </li>
                <li><Link href="/NavElements/FAQ">FAQ</Link> </li>
                <button><Link href="#">Login</Link></button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar