import { Button } from '../ui/button'

const NewTask = () => {
  return (
    <>
      <div className="bg-emerald-500  h-full  w-[24%]   rounded-xl  flex-shrink-0 max-[629px]:w-[90%]">
       <div className="flex justify-between items-center p-5">
        <h1 className="text-sm bg-emerald-700 px-2 py-1 rounded-lg font-medium">High</h1>
        <p className="text-sm">2/dec/2024</p>
       </div>
       <h2 className="text-xl px-5 uppercase font-semibold">Make a Web Page for a Company</h2>
       <p className="text-sm px-5 mt-5 mb-5 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id earum perspiciatis velit eligendi. Consectetur?</p>
       <div className='text-sm font-light text-black flex justify-start mb-5 ml-4'>
       <Button className='bg-blue-600 text-black hover:bg-blue-700 hover:font-semibold transition-all duration-500'>Accepted</Button>
       </div>
      </div>
    </>
  )
}

export default NewTask

{/* <Button className='bg-green-600 text-black hover:bg-green-700 hover:font-semibold transition-all duration-500'>Mark as compleqted</Button>
<Button className='bg-red-600 text-black hover:bg-red-700 hover:font-semibold transition-all duration-500'>Falied</Button> */}  