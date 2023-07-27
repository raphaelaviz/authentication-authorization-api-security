'use client'

import Link from 'next/link'
import React from 'react'
import { signIn, signOut } from "next-auth/react";
import { useSession } from 'next-auth/react'

const Navbar = () => {

  const {data: session } = useSession()


  return (
    <nav className='navbar'>
        <div className='flex space-x-4'>
            <Link href={'/'} className='nav-button'>Register Page</Link>
            <Link href={'/user'} className='nav-button'>User Page</Link>
            <Link href={'admin'} className='nav-button'>Admin-Only Page</Link>
        </div>
        <div>

          { session && session.user
            ? <div className='flex space-x-4 text-center'>
                  <p className='mt-3'>Hello, {session.user.name}!</p>
                  <button className='nav-button' onClick={()=>signOut({callbackUrl: '/'})}>Sign out</button>
              </div>
              
            : <button className='nav-button' onClick={()=>signIn()}>Sign in</button>
          }

        </div>
    </nav>
  )
}

export default Navbar