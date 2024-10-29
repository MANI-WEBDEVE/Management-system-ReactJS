import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const AllTask = () => {
  const data = useContext(AuthContext);
  //    console.log(data)
  const randomColor = () => {
    const firstColor = `#${Math.floor(Math.random() * 19712215).toString(16)}`;
    const secondColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return { firstColor, secondColor };
  };
  const color = randomColor();
  return (
    <div className="p-5 bg-[#2b2a2acb] mt-4 rounded-lg w-[95%] flex flex-col gap-10 items-start mb-10 mx-auto text-white">
      <div className="w-full p-6 bg-emerald-600 rounded-lg flex items-center justify-between">
        <h1 className="font-medium text-xl">Name</h1>
        <h1 className="font-medium text-xl">New Task</h1>
        <h1 className="font-medium text-xl">Active</h1>
        <h1 className="font-medium text-xl">Completed</h1>
        <h1 className="font-medium text-xl">Failed</h1>
      </div>
      {data.employees.map((item: any, idx: any) => {
        const { name } = item;

        return (
          <div
            key={idx}
            style={{
              border: "1px solid",
              borderColor:
                Math.random() > 0.5 ? color.firstColor : color.secondColor,
            }}
            className="flex w-full p-4 rounded-lg justify-between"
          >
            <div key={idx} className="flex  justify-between w-full items-center">
              <h1 className="w-[10%] font-semibold text-xl">{name}</h1>

              <div className="font-medium uppercase text-xl w-1/6 text-center m-3">
                {item.taskCount.newTask}
              </div>
              <div className="font-medium uppercase text-xl text-center w-[%] m-3">
                {item.taskCount.active}
              </div>
              <div className="font-medium uppercase text-xl w-1/6 text-end m-3">
                {item.taskCount.completed}
              </div>
              <div className="font-medium uppercase text-xl w-1/6 text-end m-3">
                {item.taskCount.failed}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
