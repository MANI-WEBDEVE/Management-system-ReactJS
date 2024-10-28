
import TaskList from "../TaskList/TaskList"
import Header from "../UI-Components/Header"
import TextListCount from "../UI-Components/TextListCount"

const EmployeeDashboard = ({dataEmployee}:{dataEmployee:any}) => {

  const { tasks, name , taskCount}:{ tasks:any, name:string, taskCount:any} = dataEmployee

  return (
    <div className="h-full w-full bg-[#1C1C1C] ">
      <Header headerData={name}/>
      <TextListCount taskCount={taskCount}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default EmployeeDashboard
