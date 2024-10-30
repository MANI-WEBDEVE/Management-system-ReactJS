import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import AllTaskList from "./AllTaskList";

const AllTask = () => {
  const [userData, setUserData]: any = useContext(AuthContext);

  const randomColor = () => {
    const firstColor = `#${Math.floor(Math.random() * 19712215).toString(16)}`;
    const secondColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return { firstColor, secondColor };
  };
  const color = randomColor();
  const employee = userData.employees;
  console.log(employee.map((item) => item))
  return (
    <>
      <div className="p-5 bg-[#2b2a2acb] mt-4 rounded-lg w-[95%] flex flex-col gap-10 items-start mb-10 mx-auto text-white">
        <div className="w-full p-6 bg-emerald-600 rounded-lg flex items-center justify-between">
          <h1 className="font-medium text-xl">Name</h1>
          <h1 className="font-medium text-xl">New Task</h1>
          <h1 className="font-medium text-xl">Active</h1>
          <h1 className="font-medium text-xl">Completed</h1>
          <h1 className="font-medium text-xl">Failed</h1>
        </div>

      {employee.map((item: any, idx:number) => {
       const name = item.name
          
            return <AllTaskList data={item} name={name}/>;
        
          // return (
          //   <div

          //   //   style={{
          //   //     border: "1px solid",
          //   //     borderColor: Math.random() > 0.5 ? color.firstColor : color.secondColor,
          //   //   }}
          //     className="flex w-full  h-screen p-4 rounded-lg justify-between"
          //   >
          //     <div  className="flex  justify-between w-full items-center">
          //       {/* <h1 className="w-[10%] font-semibold text-xl">{data.name}</h1> */}
        
          //       <div className="font-medium uppercase text-xl w-1/6 text-center m-3 text-blue-500">
          //         {newTask}
          //       </div>
          //       <div className="font-medium uppercase text-xl text-center w-[%] m-3 text-green-500">
          //         { elem.taskCount.active}
          //       </div>
          //       <div className="font-medium uppercase text-xl w-1/6 text-end m-3 text-yellow-500">
          //         {completed}
          //       </div>
          //       <div className="font-medium uppercase text-xl w-1/6 text-end m-3 text-red-500">
          //         {failed}
          //       </div>
          //     </div>
          //   </div>
          // )
    
        // console.log(item)
      })}
          </div>
    </>
  );
};

export default AllTask;
