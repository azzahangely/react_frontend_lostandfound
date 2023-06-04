import React, {useEffect, useState} from 'react';


function Homepage() {
    return (
      <div className="flex bg-[#F9F3E6] w-screen h-screen overflow-y-scroll">
        <div className="grid grid-cols-2 flex-grow mt-4 -ml-[90px]">
          <div className="flex flex-col justify-center items-center">
            <img src="../src/assets/homepageLeft.png" alt="Image 1" className="ml-[20px] w-[520px]" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="../src/assets/title.png" alt="Image 2" className="-mt-[40px] -ml-[100px] w-[580px] h-[200px]" />
            <p className="text-gray-500 italic -ml-[120px] align-middle mt-12 pl-4 pr-4 font-serif max-w-[600px]">
            "Lost and Found is your go-to platform for reporting lost or found items within the University of Indonesia campus. 
            We understand how frustrating it can be to misplace something valuable
            or come across a lost item without knowing how to help. 
            That motivates us to create a centralized hub where you can easily report your checkpoints and access vital information."
            </p>
          </div>
          <div className="mt-12 col-span-2 bg-[#444C5C] h-screen">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[430px] h-[460px] bg-[#3E4A58] rounded-xl mt-[60px] -ml-[600px] shadow-md shadow-gray-900 border-[#CF9D95] border-[1px] ">
              <div className="flex flex-col items-center gap-7">
                <img src="../src/assets/topper.png" alt="Image 3" className="w-1/2" />
                <input type="text" placeholder="Item Lost" className="mt-6 px-4 py-2 border border-gray-300 rounded-full w-full" />
                <input type="password" placeholder="Place" className="mt-6 mb-4 px-4 py-2 border border-gray-300 rounded-full w-full" />
                <div>
                  <button className="flex bg-[#CF9D95] p-4 w-[300px] rounded-full items-center justify-center border border-black">
                    I lost an Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="mt-12 col-span-2 bg-[#F9F3E6] h-screen">
            
          </div>
          <div className="mt-12 col-span-2 bg-[#C2D4D8] h-[400px]">
            
            </div>
        </div>
      </div>



    );
  }
  
  export default Homepage;
  