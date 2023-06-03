

function loginUser() {
    

    return (
      <>
      <div className="background h-screen w-screen flex-col">
        <img src="../src/assets/LP.png" alt="loginUserPage" className="flex top-0 left-0 w-screen h-screen object-cover"/>
        <button className="absolute top-5 right-10 px-4 py-2 bg-pink-900 hover:bg-gray-400 text-white rounded-full">Explore More</button>
        <div className="container absolute top-48 left-[90px] w-96 h-96 bg-blue-200 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-serif mb-6 text-center">LOGIN</h2>
      <input type="text" placeholder="Username" className="mb-4 px-4 py-2 border border-gray-300 rounded-full w-full text-center"/>
      <input type="password" placeholder="Password" className="mb-4 px-4 py-2 border border-gray-300 rounded-full w-full text-center"/>
      <p className="text-justify mb-4">Don't have an account? <a href="register.html" className="text-gray-700">Register Here</a></p>
      <button type="submit" className="px-2 py-2 bg-gray-700 hover:bg-gray-400 text-white rounded-full w-full">LOGIN NOW</button>
      <p className="text-center mt-4">Login as <a href="loginAdmin.html" className="text-gray-700">Admin</a></p>

          </div>

      </div>
      

      </>
    )
  }
  

  export default loginUser