import { color } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { NavLink , Link} from 'react-router-dom'
const Login = () => {



  //USER ENTERNING STORAGE
  //to store data entered by user temperorly in frontend we use states
  const [data,setData]=useState({
    //access ke liye data, change ke liye setdata
    email:"",

  })

  useEffect(()=>{
    console.log(data);
  },[data])

  // 2-WAY DATA BINDING
  //handle change
  const handleChange=(event)=>{
    setData({...data,email:event.target.value})
    
  }

  //submitting the form
  const submitForm =async () => {
  
  
    //data validation
    const myData= {
      //dynamic email
      
      data
    }
  
    const result = await fetch('http://localhost:8080/otp/step1',{
      method: 'POST',
      headers :
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  
    const resultInJson =await result;
    console.log(resultInJson);
  
    //call server api for sending data using axios
   /*  login(data).then((resp)=>{
      console.log(resp)
      console.log("sucess")
    }).catch((error)=>{
      console.log("error")
    }) */



  }



  return (
    <>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="lg_color_wt mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  className="space-y-6" action="#" method="POST" onSubmit={submitForm}>
            <div>
              <label htmlFor="email" className="lg_color_wt block text-sm font-medium leading-6 ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e)=> handleChange(e)}
                  
                  placeholder='Enter your Email'
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <NavLink
              onClick={submitForm}
                to='/login/Otp'
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </NavLink>
            </div>
          </form>
        </div>
      </div> 



    </>
  )
}

export default Login;