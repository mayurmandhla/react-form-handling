 //form handling using useref

// import React, { useRef } from 'react';

// function App() {
   
//  const name = useRef(null);
//  const age = useRef(null);
//  const handleSubmit = (detail) =>{
//    detail.preventDefault();
//    console.log(name.current.value, age.current.value)

//  }
//   return (
//     <div className='p-4'>
//       <form action="" onSubmit={handleSubmit}>
//         <input className='border-2' ref={name} type="text" placeholder='name' />
//         <input className='border-2' ref={age} type="text" placeholder='age' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App


// form handling using controlled components

// import React, { useState } from 'react';

// function App() {
//   const [val, setVal] = useState({name:"", age:""});

//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(val)
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="text" onChange={(event)=>setVal({...val, name:event.target.value})} placeholder='name' />
//         <input type="text" onChange={(event)=>setVal({...val, name:event.target.value})} placeholder='age' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App

// form handling using react hook

import { data } from 'autoprefixer';
import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
 const {register, handleSubmit} = useForm();
 
  return (
    <div>
      <form action="" onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register("name")} type="text" placeholder='name' />
        <input {...register("email")} type="email" placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App

