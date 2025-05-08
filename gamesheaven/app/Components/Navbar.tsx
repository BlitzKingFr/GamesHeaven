import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
        <div>
            <ul>
                <li><Link href="">Home</Link> </li>
                <li><Link href="">Contact</Link> </li>
                <li><Link href="">About us</Link> </li>
                <li><Link href="">FAQ</Link> </li>
                <button><Link href="#">Login</Link></button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar