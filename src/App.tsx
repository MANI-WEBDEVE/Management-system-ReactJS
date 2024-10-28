// import Login from "./components/Auth/Login";
// import { useEffect } from "react";
import { useState } from "react";
import Login from "./components/Auth/Login";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import { setLocalStorageData} from "./utils/localStorage";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { toast } from "sonner";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { useEffect } from "react";
// interface AdminType{
//   id?:number;
//   email:string;
//   password:string;
// }
// interface EmployeesTypes {
//   id?:number,
//   email:string,
//   password:string,
//   tasks: []
// }

// type TypesAppData  = AdminType | EmployeesTypes;

function App() {
  const [user, setUser] = useState<null | string>(null);
  const [loggedInUserData, setLoggedInUserData] = useState()
  const authData = useContext(AuthContext);


  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser") as string);
  //     if (loggedInUser) {
  //       const role = loggedInUser.role
  //       setUser(role);
  //     }
  //   }
  // },[authData])

  console.log(loggedInUserData)


  const handleLoginFun = (email: string, password: string) => {
   
    authData.admin.map((items) => {
      if (email == items.email && password == items.password) {
        setUser("admin");
        toast("Login Successful");
        localStorage.setItem("LoggedInUser", JSON.stringify({role: "admin"}));
      } 
    })
    authData.employees.map((items:any) => {
      if (email == items.email && password == items.password) {
        setUser("employee");
        setLoggedInUserData(items);
        toast("Login Successful");
        localStorage.setItem("LoggedInUser", JSON.stringify({role: "employee"}));
      } else{
        toast("Login Failed");
      }
  })
  };

  return (
    <>
      {!user ? <Login handleLoginFun={handleLoginFun} /> : ""}
      {user == "admin" && <AdminDashboard />}
      {user == "employee" && <EmployeeDashboard dataEmployee={loggedInUserData}/>}
    </>
  );
}

export default App;
