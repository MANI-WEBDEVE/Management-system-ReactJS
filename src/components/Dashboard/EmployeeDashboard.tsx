
import TaskList from "../TaskList/TaskList"
import Header from "../UI-Components/Header"
import TextListCount from "../UI-Components/TextListCount"

const EmployeeDashboard = () => {
  return (
    <div className="h-full w-full bg-[#1C1C1C] ">
      <Header/>
      <TextListCount/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
