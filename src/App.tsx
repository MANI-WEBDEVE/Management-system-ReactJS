import { useState } from "react";
import Login from "./components/Auth/Login";
import { toast } from "sonner";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState<null | string>(null);
  const [loggedInUserData, setLoggedInUserData] = useState();
  const authData = useContext(AuthContext);

  useEffect(() => {
    // localStorage.clear()  
    if (authData) {
      const loggedInUser = JSON.parse(
        localStorage.getItem("LoggedInUser") as string
      );
      if (loggedInUser) {
        const role = loggedInUser.role;

        setUser(role);
        setLoggedInUserData(loggedInUser.data);
      }
    }
  }, [authData, loggedInUserData, user]);

  const handleLoginFun = (email: string, password: string) => {
    authData.admin.map((items) => {
      if (email == items.email && password == items.password) {
        setUser("admin");
        setLoggedInUserData(items as any)
        toast("Login Successful");
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "admin", data: items })
        );
      }
    });
    authData.employees.map((items: any) => {
      if (email == items.email && password == items.password) {
        setUser("employees");
        setLoggedInUserData(items);
        toast("Login Successful");
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employees", data: items })
        );
      } 
    });
  };

  return (
    <>
      {!user ? <Login handleLoginFun={handleLoginFun} /> : ""}
      {user == "admin" && <AdminDashboard dataAdmin={loggedInUserData} />}
      {user == "employees" && (
        <EmployeeDashboard dataEmployee={loggedInUserData} />
      )}
    </>
  );
}

export default App;
