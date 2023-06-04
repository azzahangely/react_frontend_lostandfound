function Homepage() {
    return (
      <div className="flex bg-[#F9F3E6] w-screen h-screen">
        <div className="grid grid-cols-2 flex-grow -mt-[20px] -ml-[90px]">
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
        </div>
      </div>
    );
  }
  
  export default Homepage;
  