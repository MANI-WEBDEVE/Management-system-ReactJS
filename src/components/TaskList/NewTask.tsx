import { toast } from 'sonner'
import { Button } from '../ui/button'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'
const NewTask = ({data}: {data:any}) => {
  
  const {title , description, date}: {title:string, description:string, date:string} = data
  
  const [userData, setUserData]: any = useContext(AuthContext)

  const handleAcceptTask = () => {
    const user = JSON.parse(localStorage.getItem("LoggedInUser") as any)
    if (user.role === 'employees') {
      userData.employees.map((items:any) => {
        if (items.name === user.data.name) {
          user.data.tasks.map((task:any) => {
            if(task.newTask === true) {
           
            // task.newTask = false
            // task.active = true
          }
         })
        }
      })



      toast("Task Accepted", { icon: "✅" })
    }
  }


  return (
    <>
      <div className="bg-indigo-600 h-1/2  w-1/5   rounded-xl  flex-shrink-0 max-[629px]:w-[90%]">
       <div className="flex justify-between items-center p-5">
        <h1 className="text-sm bg-emerald-700 px-2 py-1 rounded-lg font-medium">High</h1>
        <p className="text-sm">{date}</p>
       </div>
       <h2 className="text-xl px-5 uppercase font-semibold">{title}</h2>
       <p className="text-sm px-5 mt-5 mb-5 font-medium">{description}</p>
       <div className='text-sm font-light text-black flex justify-start mb-5 ml-4'>
       <Button onClick={handleAcceptTask} className='bg-indigo-400 text-black hover:bg-indigo-700 hover:font-semibold transition-all duration-500'>Accepted</Button>
       </div>
      </div>
    </>
  )
}

export default NewTask

{/* <Button className='bg-green-600 text-black hover:bg-green-700 hover:font-semibold transition-all duration-500'>Mark as compleqted</Button>
<Button className='bg-red-600 text-black hover:bg-red-700 hover:font-semibold transition-all duration-500'>Falied</Button> */}  