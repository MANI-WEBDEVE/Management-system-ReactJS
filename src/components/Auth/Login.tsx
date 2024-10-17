
const Login = () => {
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
        <div className="border-2 border-blue-600 w-[300px] h-[400px] flex items-center justify-center">
          <form className="flex flex-col items-center justify-center w-full gap-4 ">
                <input type="email" placeholder="Enter Your Email" className="px-11 py-2 border-blue-600 border-2 rounded-full" />
                <input type="password" placeholder="Enter Your Password" className="px-11 py-2 border-blue-600 border-2  rounded-full" />
                <button>Login</button>
          </form>
        </div>
    </div>
    </>
  )
}

export default Login