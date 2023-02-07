import React from "react";
import teacherImg from "assets/img/tutor.png"
import { Button} from"shared/components/button/index"
const TeacherProfile = () => {
  return <div className="grid grid-cols-3 gap-2 p-2  md:grid-cols-3 lg:grid-cols-3  sm:grid-cols-2 xs:grid-cols-1   justify-center overflow-hidden">


    {/* .................................Left side */}
    <div className="col-span-1 min-w-xs flex flex-col items-center px-2 ">
    
      {/* PORFILE NAME AND UNIVERSITY */}
        <img className="w-32 min-h-min z-10 -mb-8 rounded-sm "  src={teacherImg} alt="" />
        <div className="min-w-full  bg-bgAccent rounded-2xl  px-4 flex flex-col justify-center ">
          <h1 className="mt-8 font-semibold  text-muted  px-2 mb-2">Sakib Abdullah</h1>
        <p className="  rounded-lg px-2 mb-2 text-muted">Bangladesh University of Professionals</p>
        <Button label="Hire Now" className="shadow-lg hover:bg-primaryDark text-center  bg-primaryLight py-1 px-3 rounded-lg text-white active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out mb-4"></Button>

        {/* HOURLY RATE */}
          <div className="flex flex-row justify-between font-bold pb-2 w-full  "><h2 className="bg-slate-200 px-5 py-1 font-bold text-muted rounded-lg">Hourly Rate</h2> <span>200 BDT</span> </div>
        <div className="flex flex-row justify-between font-bold pb-2"><h2 className="bg-slate-200 px-5 py-1 font-bold text-muted rounded-lg">Student Reffer</h2> <span>150 </span> </div>
        
        <div className="flex flex-row justify-between font-bold pb-2 ">
          <h2 className="bg-slate-200 px-5 py-1 font-bold text-muted rounded-lg">Tutions Complete</h2> <span>150 </span> 
        </div>

        {/* ABOUT */}
        <p className="text-justify mb-4">Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet conseLorem ipsum dolor, sit amet conseLorem ipsum dolor, sit amet conse consectetur adipisicing elit. Unde molestiae iusto ipsam eligendi. Aliquid, suscipit?</p>
         
       
        <hr />
        {/* ....SUBJEECT.... */}
        <div className="mt-4 mb-4 grid gap-2 grid-cols-2 grid-flow-row-dense">
          <span className="pb-2 w-full bg-slate-300 px-5 py-1 font-bold text-muted rounded-lg">Math</span>
          <span className="pb-2 w-full bg-pink-200 px-5 py-1 font-bold text-muted rounded-lg">Bangla</span>
          <span className="pb-2 w-full bg-slate-200 px-5 py-1 font-bold text-muted rounded-lg">Physics</span>
          <span className="pb-2 w-full bg-slate-200 px-5 py-1 font-bold text-muted rounded-lg">English</span>
          <span className="pb-2 w-full bg-yellow-200 px-5 py-1 font-bold text-muted rounded-lg">Bangla</span>
          <span className="pb-2 w-full bg-green-200 px-5 py-1 font-bold text-muted rounded-lg">Physics</span>
          <span className="pb-2 w-full bg-blue-100 px-5 py-1 font-bold text-muted rounded-lg">English</span>
          
        </div>
       
      </div>
         {/*..  AVAILABILITY ..*/}
        <div className="min-w-full bg-bgAccent  mt-2 p-2 rounded-2xl  ">
         <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Availability</p>
        <div className="grid gap-2 grid-cols-2 grid-flow-row-dense mt-2 ">
          <span className="pb-2  bg-blue-100 px-5 py-1 font-bold text-black rounded-lg">12 PM</span>
          <span className="pb-2  bg-blue-100 px-5 py-1 font-bold text-black rounded-lg">10 AM</span>
          <span className="pb-2  bg-blue-100 px-5 py-1 font-bold text-black rounded-lg">After 05 PM</span>
           </div>

        </div>
    </div>



{/*........................................... Right SIde................... */}
    <div className="col-span-2">

      <div className="grid grid-cols-1 gap-y-8">

         <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
         <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Basic Information</p>
        <div className="grid gap-2 grid-cols-2 grid-flow-row-dense mt-2 ">
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Address</h1>
          <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">274, sher-e-bangla road, Dhaka- 1209</p></div>
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Preferred Medium</h1>
          <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">( English/ Bangla/ Version)</p></div>
          
           </div>

        </div>

         <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
         <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Education</p>
        <div className="grid gap-2 grid-cols-2 grid-flow-row-dense mt-2 ">
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Current Instituite</h1>
              <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">North South University</p></div>
            
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Previous Institution</h1>
              <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">Notre Dame College</p></div>
            
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Subject</h1>
              <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">BBA in Finance</p></div>
            
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Medium</h1>
          <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">( Engliish/ Bangla/ Version)</p></div>
          
           </div>

        </div>
         <div className="min-w-full bg-bgAccent mt-2 p-4 rounded-2xl  ">
         <p className="py-1 mt-4 bg-primaryLight  inline px-5  font-bold text-white rounded-md text-center">Achievements</p>
        <div className="grid gap-2 grid-cols-2 grid-flow-row-dense mt-2 ">
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Address</h1>
          <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">274, sher-e-bangla road, Dhaka- 1209</p></div>
         <div> <h1 className="pb-2   px-5 py-1 font-thin  rounded-lg text-muted">Preferred Medium</h1>
          <p className="pb-2    px-5 py-1 font-bold  rounded-lg text-muted">( English/ Bangla/ Version)</p></div>
          
           </div>

        </div>
     </div>
    </div>

  </div>;
};

export default TeacherProfile;
