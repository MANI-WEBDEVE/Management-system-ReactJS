import { AuthContext } from "@/context/AuthProvider";
import { setLocalStorageData } from "@/utils/localStorage";
import { useContext, useState } from "react";
import { toast } from "sonner";

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
    companyName: "",
  });
  const [setTask, setSetTask] = useState<any>();
  const [userData, setUserData]: any = useContext(AuthContext);
  const handleSubmit = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value }: any = event.target;
    setCreateTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { taskTitle, description, Date, Assign, companyName } = CreateTask;
    setSetTask({
      taskTitle,
      description,
      Date,
      Assign,
      companyName,
      active: false,
      falied: false,
      newTask: true,
      completed: false,
      status: false,
    });

    userData.employees.forEach((item: any) => {
      if (item.name === Assign) {
        //  item.tasks.push(setTask)
        if (setTask === undefined) {
          toast("Task Not Assign", { icon: "❌" });
  
        } else {
          const su = item.tasks.push(setTask);
          item.taskCount.newTask = item.taskCount.newTask + 1;
          setUserData((prevData: any) => ({
            ...prevData,
            employees: prevData.employees.map((user: any) =>
              user.name === Assign ? item : user
            ),
            localStorage
          }))
          toast("Task Assign Successfully", { icon: "✅" });
        }
      }
    });

    setCreateTask({
      taskTitle: "",
      description: "",
      Date: "",
      Assign: "",
      companyName: "",
    });
  };

  return (
    <>
      <div className="w-full bg-[#28262654] mx-auto ">
        <h3 className="text-4xl font-bold text-blue-500 text-center">
          Create Task
        </h3>
        <div className=" h-full flex flex-col ">
          <form
            onSubmit={handleSubmitTask}
            className="w-full flex justify-center items-center gap-10 max-[1200px]:flex-col"
          >
            <div className="w-[20%] flex items-center justify-start m-3 flex-col">
              <label
                htmlFor="title"
                className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
              >
                Task
                <input
                  type="text"
                  placeholder="Enter Your Task Title"
                  name="taskTitle"
                  value={CreateTask.taskTitle}
                  onChange={handleSubmit}
                  className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
                />
              </label>
              <label
                htmlFor="desctiption"
                className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
              >
                Description
                <textarea
                  name="description"
                  id="desctiption"
                  placeholder="Enter Your Task Description"
                  rows={4}
                  cols={22}
                  value={CreateTask.description}
                  onChange={handleSubmit}
                  className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
                ></textarea>
              </label>
            </div>
            <div className="w-[30%] flex items-center justify-start mt-6 flex-col">
              <input
                type="date"
                placeholder="Enter Your Task Date"
                name="Date"
                value={CreateTask.Date}
                onChange={handleSubmit}
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
                  name="Assign"
                  value={CreateTask.Assign}
                  onChange={handleSubmit}
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
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={CreateTask.companyName}
                  onChange={handleSubmit}
                  className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-10 py-2 bg-blue-600 font-semibold text-xl mb-10 mt-4 rounded-lg hover:bg-blue-900 hover:text-gray-400 translate-all duration-500"
              >
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
