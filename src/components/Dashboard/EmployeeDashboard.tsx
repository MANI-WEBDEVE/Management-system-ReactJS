
import TaskList from "../TaskList/TaskList"
import Header from "../UI-Components/Header"
import TextListCount from "../UI-Components/TextListCount"

const EmployeeDashboard = ({dataEmployee, changeUser}:{dataEmployee:any, changeUser:any}) => {

  const { tasks, name , taskCount}:{ tasks:any, name:string, taskCount:any} = dataEmployee
 
  return (
    <div className="h-full w-full bg-[#1C1C1C] ">
      <Header headerData={name} changeUser={changeUser}/>
      <TextListCount taskCount={tasks}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default EmployeeDashboard
