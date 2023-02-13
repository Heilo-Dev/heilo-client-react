
import React,{useState} from 'react'
import { Button } from '../button';
import { Link } from 'react-router-dom';

export default function Login() {
    const [toggle, setToggle] = useState(false)
    
    const showHidePassword = () => {
        console.log(toggle);
      toggle?setToggle(false):setToggle(true)
        
    }
  return (
      <>
      {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">Log in</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg text-primaryDark  pb-16">WELCOME BACK </h3>
                  <div>
                      <label htmlFor="phone" className='  text-primaryDark '>Phone Number</label>
                      <input id='phone'className='w-full mb-4 block border-b focus:border-b-2 outline-none border-green-400' type="text" />
                  </div>
                  <div>
                      <label htmlFor="password" className='  text-primaryDark '>Password</label>
                      <div  className='w-full border-b  border-green-400 mb-8'>
                          <input id='password' className='w-10/12   outline-none focus:border-b-2 border-green-400' type={toggle?"text":"password"} /> 
                          {toggle ? <i className='  p-1 cursor-pointer' onClick={() => showHidePassword()}>Hide</i> :
                         <i className='cursor-pointer  p-1' onClick={()=>showHidePassword()}>show</i>}
                      </div>
                     
                  </div>
                  
                
                  
                 <div className='flex justify-center'> <Button label="Log in" className="shadow-lg hover:bg-primaryDark text-center font-bold bg-primaryLight p-3   rounded-lg text-white active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out mb-4"></Button></div>


                  <div className='flex
                   flex-col items-center underline'>
                      
                  <Link to="#"><p>Create an Account</p> </Link>
                  <Link to="#"><p>Forget Password?</p></Link>
</div>

  </div>
</div>
      </>
  )
}
