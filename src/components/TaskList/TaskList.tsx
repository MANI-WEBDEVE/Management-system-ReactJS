import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FaliedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({tasks}: {tasks: any}) => {
  return (
    <div className="h-[55%] w-full mt-10 flex items-center p-4 gap-3 max-[629px]:flex-col overflow-x-auto flex-shrink">
      {tasks.map((task: any) => (
        <h1>Jel</h1>
      ))}
      <AcceptTask/>
      <NewTask/>
      <CompletedTask/>
      <FaliedTask/>
    </div>
  );
};

export default TaskList;
