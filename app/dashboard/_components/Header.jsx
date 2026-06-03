"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/logo.svg'} width={60} height={40} alt='logo' />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold trasnsition-all 
            cursor-pointer
            ${path=='/dashboard'&&'text-primary font-bold'}
            `}
            
            > Dashboard</li>
            <li  className={`hover:text-primary hover:font-bold trasnsition-all 
            cursor-pointer
            ${path=='/dashboard/question'&&'text-primary font-bold'}
            `}>Question</li>
            <li  className={`hover:text-primary hover:font-bold trasnsition-all 
            cursor-pointer
            ${path=='/dashboard/Upgrade'&&'text-primary font-bold'}
            `}>Upgrade</li>
            <li  className={`hover:text-primary hover:font-bold trasnsition-all 
            cursor-pointer
            ${path=='/dashboard/How it works'&&'text-primary font-bold'}
            `}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}
