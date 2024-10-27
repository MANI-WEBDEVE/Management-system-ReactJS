// import Login from "./components/Auth/Login";
// import { useEffect } from "react";
import { JSXElementConstructor, useState } from "react";
import Login from "./components/Auth/Login";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import { setLocalStorageData} from "./utils/localStorage";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";


function App() {
  const [user, setUser] = useState<null | string>(null)
  
  const handleLoginFun = (email:string, password:string) => {
      if (email === "Inam@com" && password === "123") {
        console.log("is Admin")
      } else if (email === "user.com" && password === "234") {
        console.log("is User")
      } else {
        console.log("Invalid")
        alert("not found")
      }
  }



  return (
   <>
    {!user ? <Login handleLoginFun={handleLoginFun} /> : ""}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
   </>
  );
}

export default App;
