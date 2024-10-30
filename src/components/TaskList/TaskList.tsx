import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FaliedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ tasks }: { tasks: any }) => {
  
  return (
    <div className=" w-full h-full mt-10 flex  p-2 justify-center gap-10 max-[629px]:flex-col overflow-x-auto  flex-wrap">
      {tasks.map((task: any, idx: any) => {
       
        if (task.taskCount.active) {
          return <AcceptTask key={idx} data={task}/>
        }
        if (task.taskCount.completed) {
          return <CompletedTask key={idx} data={task}/>
        } 
        if(task.taskCount.newTask){
          return <NewTask key={idx} data={task}/>
        }
        if(task.taskCount.failed){
          return <FaliedTask key={idx} data={task}/>
        }
      })}
     
      {/* <NewTask />
      <CompletedTask />
      <FaliedTask /> */}
    </div>
  );
};

export default TaskList;
