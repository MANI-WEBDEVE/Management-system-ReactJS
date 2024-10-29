import { Button } from "../ui/button";

const CompletedTask = ({data}: {data:any}) => {
  const {title , description, date}: {title:string, description:string, date:string} = data
  return (
    <>
      <div className="bg-blue-600    h-1/2  w-1/5  rounded-xl  flex-shrink-0 max-[629px]:w-[90%]">
        <div className="flex justify-between items-center p-5">
          <h1 className="text-sm bg-emerald-700 px-2 py-1 rounded-lg font-medium">
            High
          </h1>
          <p className="text-sm">{date}</p>
        </div>
        <h2 className="text-xl px-5 uppercase font-semibold">
          {title}
        </h2>
        <p className="text-sm px-5 mt-5 mb-5 font-medium">
         {description}
        </p>
        <div className="text-sm font-light text-black flex justify-start mb-5 ml-4 ">
          <Button className="bg-blue-400 text-black hover:bg-blue-700 hover:font-semibold transition-all duration-500">
            Completed 
          </Button>
         
        </div>
      </div>
    </>
  );
};

export default CompletedTask;
