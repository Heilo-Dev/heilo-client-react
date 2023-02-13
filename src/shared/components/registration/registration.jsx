
import Button from '../../components/button/button';
import { useState,useEffect } from 'react';




const Registration = () => {
  
  const [password, setpassword] = useState('')
  const [confirmpass, setConfirmpass] = useState('')
  const [error,setError] =useState('')

  useEffect(() => {
   
    if (password !== confirmpass) { return setError("password not match") }
    else {
      setError('')
    }
 
  
  },[password,confirmpass])
  const submitFrom = (e) => {
    e.preventDefault()
  }
    return (
        <>
            <label htmlFor="my-modal-3" className="btn">Registration</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative select-none ">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className=" text-primaryDark font-normal text-3xl  pb-16">WELCOME TO HEILO </h3>
            


            <form onSubmit={(e) => {
              submitFrom(e)
            
            }} className="px-4">
              <div className=" flex justify-around mx-auto">
                 <div><input id='teacher' name="role" className='accent-gray-500' value="teacher" type="radio" />
                      <label htmlFor="teacher" className='cursor-pointer  text-primaryDark  required:'> Teacher</label></div>
                       
                <div>
                  <input id='student' name="role" className=' accent-gray-500' type="radio" value='student' />
                      <label htmlFor="student" className='cursor-pointer  text-primaryDark '> Student</label>
                       </div></div>
                  
                  <div>
                    
                      <label htmlFor="name" className='  text-primaryDark '>Name</label>
                      <input id='phone'className='w-full mb-4 block border-b focus:border-b-2 outline-none border-green-400' required type="text" />
                  </div>
                  <div>
                      <label htmlFor="email" className='  text-primaryDark '>Email</label>
                      <input id='phone'className='w-full mb-4 block border-b focus:border-b-2 outline-none border-green-400' required type="email" />
                  </div>
                  <div>
                      <label htmlFor="phone" className='  text-primaryDark '>Phone Number</label>
                      <input id='phone'className='w-full mb-4 block border-b focus:border-b-2 outline-none border-green-400' type="text" />
                  </div>
                
                  <div>
                      <label htmlFor="pass" className='  text-primaryDark '>Password</label>
                <input onBlur={(e) =>{
                  setpassword(e.target.value)
                }
                } id='phone' className='w-full mb-4 block border-b focus:border-b-2 outline-none border-green-400' type="text" />
              </div>
                  <div>
                      <label htmlFor="pass2" className='  text-primaryDark '>Confirm Password</label>
                <input onBlur={(e) => {
                  setConfirmpass(e.target.value)
                   
                }} id='phone' className='w-full mb-4 block border-b focus:border-b-2 outline-none border-green-400' type="text" />
              </div>
              <input id='terms' name='terms' className='' type="checkbox" />
              <label htmlFor="terms">   I agree to the Terms and Conditions</label>
              
                  <Button  label='Submit' disable type="submit" className="shadow-lg hover:bg-primaryDark text-center font-bold bg-primaryLight p-3   rounded-lg text-white active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out mb-4"></Button>
                 </form>
                  
            {
              error && <p className='text-red-500'>{ error}</p>
}

  </div>
</div>
            
        </>
    );
}
 
export default Registration
