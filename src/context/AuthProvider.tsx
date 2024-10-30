import { getLocalStorageData } from "@/utils/localStorage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
interface AdminType{
  id?:number;
  email:string;
  password:string;
}
// interface EmployeesTypes {
//   id?:number,
//   email:string,
//   password:string,
//   tasks: []
// }

// type TypesAppData  = AdminType | EmployeesTypes;

export const AuthContext = createContext({admin:[{} as AdminType], employees:[] as any, setUserData: ():any => {} });

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<{admin:[{id:number, email: string, password:string}], employees:[]}>({admin:[{id:0, email:"null", password:"passcode"}], employees:[]});

  useEffect(() => {
    const { employees, admin } = getLocalStorageData();
    setUserData({ employees, admin });
  }, []);
  return (
    <>
      <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
