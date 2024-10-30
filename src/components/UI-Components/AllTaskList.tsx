import React from "react";

const AllTaskList = ({ data, name }: { data: any, name:any }) => {
  const data2 = data;

  return (
    <>
      {data.tasks.map((task: any) => {
        const { active, failed, completed, newTask } = task.taskCount;
        return (
          <div
            //   style={{
            //     border: "1px solid",
            //     borderColor: Math.random() > 0.5 ? color.firstColor : color.secondColor,
            //   }}
            className="flex w-full p-4 rounded-lg justify-between"
          >
            <div className="flex  justify-between w-full items-center">
              <h1 className="w-[10%] font-semibold text-xl">{name}</h1>

              <div className="font-medium uppercase text-xl w-1/6 text-center m-3 text-blue-500">
                {newTask}
              </div>
              <div className="font-medium uppercase text-xl text-center w-[%] m-3 text-green-500">
                {active}
              </div>
              <div className="font-medium uppercase text-xl w-1/6 text-end m-3 text-yellow-500">
                {completed}
              </div>
              <div className="font-medium uppercase text-xl w-1/6 text-end m-3 text-red-500">
                {failed}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllTaskList;
