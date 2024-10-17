
const Header = () => {
  return (
    <>
    <header className="flex justify-between items-center p-8">
        <h1 className="text-3xl font-medium text-white">Hi 👋 <br /><span className="text-3xl font-semibold"> Muhammad Inam</span></h1>
        <button className="text-lg font-semibold  bg-red-500 p-2 rounded-xl hover:bg-red-800 transition-all">Log Out</button>
    </header>
    </>
  )
}

export default Header
