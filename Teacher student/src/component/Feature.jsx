import React from 'react'
import Data from '../Data';

function Feature() {

  const data = Data; 

  

  return (
    <>
    <div className=" flex justify-center mb-10 ">
      <div className="  md:w-[60vw] mb-5 ">
        <h1 className='text-black text-center font-semibold pt-2 text-3xl'> Set a Time Scheduling App Features </h1>

        <div className="mt-10 flex flex-wrap justify-center  gap-20">
          {
            data.map((data, index )=>{
              return (
                        <div key={index} className=" flex justify-center flex-col bg-slate-20  items-center w-40  ">
            <img src= {data.image} className='w-20 ' alt="" />
             <p className='font-semibold text-white  mt-5'> {data.title} </p>
            <p className='font-medium mt-6 text-white '> 
              {data.desc}
            </p>
          </div>
              )

            })
          } 

        </div>
        

      </div>

    </div>
  


    </>
  )
}

export default Feature
