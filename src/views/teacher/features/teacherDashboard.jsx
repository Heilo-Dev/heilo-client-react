import React, { useEffect, useState } from "react";

import DashboardCard from './../../../shared/components/dashboard-card/dashboardCard';

import { CircleCheckIcon } from './../../../shared/components/icons/teacher-dashboard/circle-check-icon';
import { CircleCrossIcon } from './../../../shared/components/icons/teacher-dashboard/circle-cross-icon';
import Image from './../../../shared/components/image/image';
import teacherDp from "../../../assets/img/women.png"








const TeacherDashboard = () => {
 
  
  return <div>
    
      <div className="grid grid-cols-4   xs:flex xs:grid-cols-1 xs:overflow-hidden  xs:max-w-xs sm:grid-cols-2 md:grid-cols-4 py-4 justify-items-center xs:overflow-x-auto  ">
      
        <DashboardCard className=" xs:min-w-sm" color1="primaryDark" color2="primaryLight" cardName="Tution Request" amount
        ="03" 
      />
        <DashboardCard className=" xs:min-w-sm" color1="primaryDark" color2="primaryLight" cardName="Tution Request" amount
        ="03" 
      />
       
        <DashboardCard className=" xs:min-w-sm" color1="primaryDark" color2="primaryLight" cardName="Tution Request" amount
        ="03" 
      />
      
         {/* overflow: hidden;
    max-width: 320px;
    display: flex;
    overflow-x: auto; */}
      
      </div>
      
    <div className="grid grid-cols-2 justify-items-center mb-2 ">
      
        <div className="bg-cyan-50 flex flex-col max-h-96 border rounded-md justify-center overflow-auto p-4">
<h2 className="font-bold">Turtion Request</h2>
   
        <div className="flex w-full gap-2 p-1 flex-row mt-12   ">
        <div className="w-1/6" >
            <Image className="w-full"src={teacherDp} alt="teacher Profile picture" /></div>
        <div>
          <h2>Ruhul Tusar</h2>
          <p>Class-10</p>
        </div>
        <div>
          <h2>Date : 10-22 -2021   I   5:30 pm</h2>
          <p> Polygons I Gerometry I Maths B</p>
        </div>
        <div>
          <CircleCrossIcon className=" mx-auto w-5 pb-2"/>
          <CircleCheckIcon/>
        </div>
        
        </div>
       
   

       
       

      </div>
    

      <div> <h1>notification</h1></div>
    </div>
  </div>;
};

export default TeacherDashboard;
