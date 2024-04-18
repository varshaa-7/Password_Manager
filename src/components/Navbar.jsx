import React from 'react'

const Navbar=()=> {
  return (
    <>
    <nav className='bg-black-200 text-white'>
        <div className='mycontainer flex justify-around items-center px-4 py-5 h-14'>
        <div className='logo font-bold text-2xl'>
            <span className='text-blue-800'> &lt;</span>Pass<span className='text-blue-800'>OO/&gt;</span>
        </div>
        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href='/'>Home</a>
                <a className='hover:font-bold' href='#'>About</a>
                <a className='hover:font-bold' href='*'>Contact</a>

            </li>
        </ul>
        </div>
    </nav>
    
</>
  )
}

export default Navbar
