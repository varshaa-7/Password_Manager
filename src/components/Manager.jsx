import React from 'react'

const Manager = () => {
  return (
<>
<div className="absolute inset-0 -z-10 h-full w-full items-center bg-blue-400 px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
<div className='mx-auto max-w-4xl'>
    <h1 className='text-white text-4xl font-bold text-center'>
        <span className='text-blue-800'> &lt;</span>Pass<span className='text-blue-800'>OO/&gt;</span></h1>
    <p className='text-blue-800 text-center'>Your own Password Manager</p>
    <div className='text-white flex flex-col p-4 gap-4 items-center'>
        <input className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='' id=''/>
        <div className='flex text-color w-full justify-between'>
        <input className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='' id=''/>
        <input className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='' id=''/>

        </div>
        <button className='flex justify-center items-center bg-blue-700 hover:bg-blue-500 rounded-full gap-4 px-8 py-2 w-fit'>
        <lord-icon
        src="https://cdn.lordicon.com/jgnvfzqg.json"
        trigger="hover"
        colors="primary:#ffffff"
        >
    </lord-icon>
            Add Password
        </button>
        
    </div>
</div>
</>
  )
}

export default Manager
