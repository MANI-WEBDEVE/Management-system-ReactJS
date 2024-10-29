import { useState } from "react";


interface CreateTaskProps {
  taskTitle: string;
  description: string;
  Date: string;
  Assign: string;
  companyName: string;
}

const CreateTask = () => {

  const [CreateTask, setCreateTask] = useState<CreateTaskProps>({
     taskTitle: "",
     description: "",
     Date: "",
     Assign: "",
     companyName: ""
  });
  const [setTask, setSetTask] = useState<any>([]);

  const handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("create task complete");
    console.log(CreateTask);
    if(setTask.length > 0){
      const data = setSetTask([...setTask, {...CreateTask , CreateTask}]);
    } else {
      const data = setSetTask([...setTask, CreateTask]);
    }
    console.log(setTask);


    setCreateTask({ taskTitle: "", description: "", Date: "", Assign: "", companyName: "" });
  }



  return (
    <>
      <div className="w-full bg-[#28262654] mx-auto ">
        <h3 className="text-4xl font-bold text-blue-500 text-center">
          Create Task
        </h3>
        <div className=" h-full flex flex-col ">
          <form onSubmit={handleSubmitTask} className="w-full flex justify-center items-center gap-10 max-[1200px]:flex-col">
            <div className="w-[20%] flex items-center justify-start m-3 flex-col">
              <label
                htmlFor="title"
                className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
              >
                Task
                <input
                  type="text"
                  placeholder="Enter Your Task Title"
                  name="title"
                  value={CreateTask.taskTitle}
                  onChange={(e) => setCreateTask({...CreateTask, taskTitle: e.target.value})}
                  className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
                />
              </label>
              <label
                htmlFor="desctiption"
                className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
              >
                Description
                <textarea
                  name="desctiption"
                  id="desctiption"
                  placeholder="Enter Your Task Description"
                  rows={4}
                  cols={22}
                  value={CreateTask.description}
                  onChange={(e) => setCreateTask({...CreateTask, description: e.target.value})}
                  className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
                ></textarea>
              </label>
            </div>
            <div className="w-[30%] flex items-center justify-start mt-6 flex-col">
              
                <input
                  type="date"
                  placeholder="Enter Your Task Date"
                  value={CreateTask.Date}
                  onChange={(e) => setCreateTask({...CreateTask, Date: e.target.value})}
                  className="pr-20 pl-3 py-2  text-white rounded-lg bg-transparent border-blue-500 border-[1px]"
                />
              <label
                htmlFor="Asign"
                className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
              >
                Asign
                <input
                  type="text"
                  placeholder="Enter Your Task Asign"
                  value={CreateTask.Assign}
                  onChange={(e) => setCreateTask({...CreateTask, Assign: e.target.value})}
                  className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
                />
              </label>
              <label
                htmlFor="Company"
                className="text-white flex flex-col justify-center items-start gap-3 font-semibold  "
              >
                Company
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={CreateTask.companyName}
                  onChange={(e) => setCreateTask({...CreateTask, companyName: e.target.value})}
                  className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
                />
              </label>
            </div>
          <div className="flex justify-center">
            <button type="submit" className="px-10 py-2 bg-blue-600 font-semibold text-xl mb-10 mt-4 rounded-lg hover:bg-blue-900 hover:text-gray-400 translate-all duration-500">
              Create Task
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
