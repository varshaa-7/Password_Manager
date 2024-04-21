// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useRef,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref=useRef()
  const passwordRef=useRef()
  const [form, setform] =useState({site:"", username:"",password:""})
  const [passwordArray, setPasswordArray]=useState([])

  useEffect(()=>{
    let passwords=localStorage.getItem("passwords");
    
    if(passwords){
      setPasswordArray(JSON.parse(passwords))
    }
  },[])

  const copyText = (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
    navigator.clipboard.writeText(text)
  }

  const showPassword = () =>{
    passwordRef.current.type="text"
    
    console.log(ref.current.src)
    if(ref.current.src.includes('icons/eyecross.png')){
      ref.current.src="icons/eye.png"
      passwordRef.current.type="text"

    }else{
      ref.current.src = "icons/eyecross.png"
      passwordRef.current.type="password"

    }
  }

  const savePassword =()=>{
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
      setPasswordArray([...passwordArray, {...form, id:uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]))
      console.log(...passwordArray)
      setform({site:"", username:"",password:""})
      toast('Password saved successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }else{
      toast('Error: Password not saved', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }
      
    
  }
  const deletePassword =(id)=>{
    console.log("Deleting password with id ",id)
    let c=confirm("Do you want to delete this password?")
    if(c){
      setPasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
      toast('Password successfully deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }
    
  }
   const editPassword =(id)=>{
    console.log("Editing password with id ",id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))

  }


  const handleChange = (e)=>{
    setform({...form, [e.target.name]:e.target.value})
  }
  return (
    <>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= "Bounce"
/>
{/* Same as */}
<ToastContainer />

   
<div className="fixed inset-0 z-[-10] h-screen w-screen flex items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
<div className='p-2 md:p-0 md:mycontainer'>
    <h1 className='text-white text-4xl font-bold text-center'>
        <span className='text-blue-800'> &lt;</span>Pass<span className='text-blue-800'>OO/&gt;</span></h1>
    <p className='text-blue-800 text-center'>Your own Password Manager</p>
    <div className='text-white flex flex-col p-4 gap-4 items-center'>
        <input value={form.site} placeholder='Enter wbesite URL' onChange={handleChange} className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='site' id='site'/>
        <div className='flex flex-col md:flex-row text-color w-full justify-between'>
        <input value={form.username} placeholder='Enter Username' onChange={handleChange} className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='text' name='username' id='username'/>
        <div className='relative'>
        <input ref={passwordRef} value={form.password} placeholder='Enter password' onChange={handleChange} className='rounded-full border-2 border-blue-500 border-solid w-full p-4 py-1 text-black' type='password' name='password' id='password'/>
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
      <table className="table-fixed text-white w-full rounded-md overflow-hidden mb-10">
  <thead className='bg-blue-700'>
    <tr className='border border-white'>
      <th className='py-2'>Site</th>
      <th className='py-2'>Username</th>
      <th className='py-2'>Password</th>
      <th className='py-2'>Actions</th>

    </tr>
  </thead>
  <tbody>
    {passwordArray.map((item,index)=>{
      return <tr key={index}>
      <td className='text-white py-2 border border-white text-center flex justify-center'><a href={item.site} target='_blank'>{item.site}</a>
      <div className='size-7 cursor-pointer' onClick={()=>{copyText(item.site)}}>
      <lord-icon className='text-white'
      style={{"width":"25px", "heigth":"25px"}}
    src="https://cdn.lordicon.com/vdjwmfqs.json"
    trigger="hover"
    colors="primary:#ffffff"
    >
</lord-icon>
</div>
      </td>
      <td className='py-2 border border-white text-center w-32'>
      <div className='flex items-center justify-center'>
        <span>{item.username}</span>
        
      <div className='size-7 cursor-pointer' onClick={()=>{copyText(item.username)}}>
      <lord-icon className='text-white'
      style={{"width":"25px", "heigth":"25px"}}
    src="https://cdn.lordicon.com/vdjwmfqs.json"
    trigger="hover"
    colors="primary:#ffffff"
    >
</lord-icon>
</div></div>
      </td>
      
      <td className='py-2 border border-white text-center w-32'>
        <div className='flex items-center justify-center'>
        <span>{item.password}</span>

      <div className='lordiconcopy size-7 cursor-pointer' onClick={()=>{copyText(item.password)}}>
      <lord-icon className='text-white'
      style={{"width":"25px", "heigth":"25px"}}
    src="https://cdn.lordicon.com/vdjwmfqs.json"
    trigger="hover"
    colors="primary:#ffffff"
    >
</lord-icon>
</div>
</div>
      </td>
      <td className='py-2 border border-white text-center w-32'>
        <span className='cursor-pointer mx-1'onClick={()=>{editPassword(item.id)}}>
        <lord-icon
          src="https://cdn.lordicon.com/lyrrgrsl.json"
          trigger="hover"
          colors="primary:#ffffff"
          style={{"width":"25px","height":"25px"}}>
      </lord-icon>
        </span>
        <span className='cursor-pointer mx-1' onClick={()=>{deletePassword(item.id)}}>
        <lord-icon
          src="https://cdn.lordicon.com/wpyrrmcq.json"
          trigger="hover"
          colors="primary:#ffffff"
          style={{"width":"25px","height":"25px"}}>
      </lord-icon>
        </span>
      </td>
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
