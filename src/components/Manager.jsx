import React, { useEffect } from 'react'
import { useRef,useState } from 'react';



const Manager = () => {
  const ref=useRef()
  const [form, setform] =useState({site:"", username:"",password:""})
  const [passwordArray, setPasswordArray]=useState([])

  useEffect(()=>{
    let passwords=localStorage.getItem("passwords");
    
    if(passwords){
      setPasswordArray(JSON.parse(passwords))
    }
  },[])

  const showPassword = () =>{
    alert("Show the password");
    console.log(ref.current.src)
    if(ref.current.src.includes('icons/eyecross.png')){
      ref.current.src="icons/eye.png"
    }else{
      ref.current.src = "icons/eyecross.png"
    }
  }

  const savePassword =()=>{
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray,form]))
    console.log(...passwordArray)
  }

  const handleChange = (e)=>{
    setform({...form, [e.target.name]:e.target.value})
  }
  return (
    <>
   
<div className="absolute inset-0 -z-10 h-full w-full items-center bg-blue-400 px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
<div className='mx-auto max-w-4xl'>
    <h1 className='text-white text-4xl font-bold text-center'>
        <span className='text-blue-800'> &lt;</span>Pass<span className='text-blue-800'>OO/&gt;</span></h1>
    <p className='text-blue-800 text-center'>Your own Password Manager</p>
    <div className='text-white flex flex-col p-4 gap-4 items-center'>
        <input value={form.site} placeholder='Enter wbesite URL' onChange={handleChange} className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='site' id=''/>
        <div className='flex text-color w-full justify-between'>
        <input value={form.username} placeholder='Enter Username' onChange={handleChange} className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='username' id=''/>
        <div className='relative'>
        <input value={form.password} placeholder='Enter password' onChange={handleChange} className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='password' id=''/>
        <span className='absolute right-[3px] top-[4px] text-black cursor-pointer' onClick={showPassword}><img ref={ref} className='p-1' width={26} src='icons/eye.png' alt='eye'/></span>
        </div>
        </div>
        <button className='flex justify-center items-center bg-blue-700 hover:bg-blue-500 rounded-full gap-4 px-8 py-2 w-fit' onClick={savePassword}>  
        <lord-icon
        src="https://cdn.lordicon.com/jgnvfzqg.json"
        trigger="hover"
        colors="primary:#ffffff"
        >
    </lord-icon>
            Add Password
        </button>       
    </div>
    <div className='passwords'>
      <h2 className='text-white text-2xl py-4 flex justify-center font-bold '>Your Passwords</h2>
      {passwordArray.length === 0 && <div className='text-white font-bold flex justify-center'>No passwords to show</div>}
      {passwordArray.length != 0 && 
      <table className="table-fixed text-white w-full rounded-md overflow-hidden">
  <thead className='bg-blue-700'>
    <tr className='border border-white'>
      <th className='py-2'>Site</th>
      <th className='py-2'>Username</th>
      <th className='py-2'>Password</th>
    </tr>
  </thead>
  <tbody>
    {passwordArray.map((item,index)=>{
      return <tr key={index}>
      <td className='py-2 border border-white text-center w-32'><a href={item.site} target='_blank'>{item.site}</a></td>
      <td className='py-2 border border-white text-center w-32'>{item.username}</td>
      <td className='py-2 border border-white text-center w-32'>{item.password}</td>
    </tr>
    })}
  </tbody>
</table>
}
    </div>
</div>

</>
  )
}

export default Manager
