const TaskList = () => {
  return (
    <div className="h-[55%] w-full mt-10 flex items-center p-4 gap-3 max-[629px]:flex-col overflow-x-auto flex-shrink">
      <div className="bg-emerald-500  h-full  w-[24%]   rounded-xl  flex-shrink-0 max-[629px]:w-[90%]">
       <div className="flex justify-between items-center p-5">
        <h1 className="text-sm bg-emerald-700 px-2 py-1 rounded-lg font-medium">High</h1>
        <p className="text-sm">2/dec/2024</p>
       </div>
       <h2 className="text-xl px-5 uppercase font-semibold">Make a Web Page for a Company</h2>
       <p className="text-sm px-5 mt-5 mb-5 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id earum perspiciatis velit eligendi. Consectetur?</p>
      </div>
      
    </div>
  );
};

export default TaskList;
