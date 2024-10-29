import AllTask from "../UI-Components/AllTask";
import CreateTask from "../UI-Components/CreateTask";
import Header from "../UI-Components/Header";

const AdminDashboard = ({dataAdmin, changeUser}: {dataAdmin: any, changeUser: any}) => {
  const {name} = dataAdmin
  return (
    <div className="h-full w-full bg-[#1C1C1C] ">
      <Header headerData={name} changeUser={changeUser}/>
      <CreateTask/>
      <AllTask/>
       </div>
  );
};

export default AdminDashboard;
