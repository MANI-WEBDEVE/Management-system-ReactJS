import React, { FormEvent, useState } from "react";
interface LoginProps {
  handleLoginFun: (email: string, password: string) => void;
}
const Login:React.FC<LoginProps> = ({handleLoginFun}) => {
  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(formValues);
    handleLoginFun(formValues.email, formValues.password);
    formValues.email = "";
    formValues.password = "";
  }; 
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="border-2 border-blue-600 w-[350px] h-[450px] flex items-center justify-center rounded-lg flex-col">
          <div>
            <h1 className="text-3xl text-center font-bold mb-9 text-white uppercase ">
              Login
            </h1>
          </div>
          <div> 
            <form
              onSubmit={(event) => {
                submitHandler(event);
              }}
              className="flex flex-col items-center justify-start w-full gap-6 "
            >
              <input
                type="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                placeholder="Enter Your Email"
                className="pr-24 pl-3 py-2 border-blue-600  border-2 rounded-full text-black outline-blue-600 placeholder:text-black "
              />
              <input
                type="text"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
                placeholder="Enter Your Password"
                className="pr-24 pl-3 py-2 border-blue-600 border-2  rounded-full text-black placeholder:text-black outline-blue-600"
              />
              <button className="px-32 py-2 bg-blue-600 text-white rounded-full text-lg font-semibold ">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
