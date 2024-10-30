
const TaskList = ({data} : {data:any}) => {
   
    const { newTask, completed , active, failed } = data
  return (
    <div className="flex mt-10 justify-between gap-10 w-screen">
      <div className="w-screen ml-4 flex justify-evenly max-[579px]:flex-col max-[579px]:gap-3 gap-10">
        <div className="rounded-xl w-[95%] py-5 px-12  bg-yellow-400 max-[579px]:w-[90%] ">
          <h2 className="text-5xl font-bold">{newTask}</h2>
          <h3 className="text-xl font-semibold mt-6">New Task</h3>
        </div>
        <div className="rounded-xl w-[95%] py-5 px-12  bg-blue-400 max-[579px]:w-[90%] ">
          <h2 className="text-5xl font-bold">{completed}</h2>
          <h3 className="text-xl font-semibold mt-6">Completed</h3>
        </div>
      </div>
      <div className="w-screen mr-5 flex justify-evenly max-[579px]:flex-col max-[579px]:gap-3 max-[579px]:mr-2 gap-10">
        <div className="rounded-xl w-[95%] py-5 px-12  bg-emerald-400 max-[579px]:w-[90%] ">
          <h2 className="text-5xl font-bold">{active}</h2>
          <h3 className="text-xl font-semibold mt-6">Active</h3>
        </div>
        <div className="max-[579px]:w rounded-xl w-[90%] py-5 px-12  bg-red-400 ">
          <h2 className="text-5xl font-bold">{failed}</h2>
          <h3 className="text-xl font-semibold mt-6">Failed</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
