// import axios from "axios";
// import Head from "next/head";

import { useState } from "react";


import { toast } from 'react-hot-toast';
import { Button } from 'shared/components';
import { Toaster } from "react-hot-toast";

 import { 

  InputBox,
  
  SelectBox,
} from "shared/components";






const RatingReview = ( ) => {



  const [topic, setTopic] = useState('');
  const [date, setDate] = useState("");
  
  const [subject, setSubject] = useState("");

  const options = [
    {value: "bangla", label:"Bangla"},
    {value: "english", label:"English"},
    {value: "math", label:"Math"},
  ]

  const handleTutor = () => {
    if (!topic || !date || !subject) {
      toast.error("Fill up all fields")
      return;
    }
    toast.loading("waiting for response")
}



  return (
    <>
      
      <div className="flex justify-center items-center h-screen relative overflow-hidden">
        <div className="phase2-wave absolute top-0 flex flex-wrap justify-center items-center ">
        
          <div className="form-modal min-w-xs z-20 -mt-8 select-none">
            
           <h1 className="text-right font-bold text-error cursor-pointer">X</h1>
            <h1 className="text-primaryDark text-xl mx-4">Submit Review</h1>
            <div className="mx-9 my-4 flex flex-col items-center min-w-xs">
              
            
                          <h1> Thanks of using our service</h1>
                          <p>Now it’s tinme for your valueable feedback!</p>


                          
             <p>Give your feedback here!</p>
              <InputBox
                onChange={(e) => setTopic(e.target.value)}
                type="text"
                placeholder="Topic"
                          />
                          
                          <input type="radio" name="recommend" id="recommend" />
                          <label htmlFor="recommend"> I would recommend this teacher!</label>
              
           
             
              
                <Button icon='uil uil-check-circle' onClick={handleTutor}
                className="drop-shadow-md mt-4  p-2 mb-4 text-white bg-primaryDark border rounded-lg"
                label='Submit '
               > 
               
                
              </Button>
               <Toaster position="bottom-right" reverseOrder={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingReview;
