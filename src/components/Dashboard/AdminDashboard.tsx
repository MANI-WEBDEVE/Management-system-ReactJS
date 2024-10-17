import Header from "../UI-Components/Header";

const AdminDashboard = () => {
  return (
    <div className="h-full w-full bg-[#1C1C1C] ">
      <Header />
        <h3 className="text-4xl font-bold text-blue-500 text-center">Create Task</h3>
      <div className=" h-full flex flex-col ">

        <form className="w-full flex justify-center items-center gap-10">
          <div className="w-[20%] flex items-center justify-start m-3 flex-col">
            <label
              htmlFor="title"
              className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
            >
              Task
              <input
                type="text"
                placeholder="Enter Your Task Title"
                className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
              />
            </label>
            <label
              htmlFor="desctiption"
              className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
            >
              Description
              <textarea
                name="desctiption"
                id="desctiption"
                placeholder="Enter Your Task Description"
                rows={5}
                cols={22}
                className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
              ></textarea>
            </label>
          </div>
          <div className="w-[20%] flex items-center justify-start m-3 flex-col">
            <label
              htmlFor="Date"
              className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
            >
              Date
              <input
                type="text"
                placeholder="Enter Your Task Date"
                className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
              />
            </label>
            <label
              htmlFor="Asign"
              className="text-white flex flex-col justify-center items-start gap-3 font-semibold "
            >
              Asign
              <input
                type="text"
                placeholder="Enter Your Task Asign"
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
                placeholder="Enter Company Name"
                className="pr-20 pl-3 py-2 rounded-lg bg-transparent border-blue-500 border-[1px]"
              />
            </label>
          </div>
        </form>
          <div className="flex justify-center">
            <button className="px-10 py-2 bg-blue-600 font-semibold text-xl mb-10 mt-4 rounded-lg">
              Create Task
            </button>
          </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
