import { Button } from "../ui/button";

const AcceptTask = ({data}: {data:any}) => {
  const {title , description, date}: {title:string, description:string, date:string} = data
  return (
    <>
      <div className="bg-emerald-500  h-[40%]  w-1/4   rounded-xl flex flex-col gap-3 flex-shrink-0 max-[629px]:w-[90%]">
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
        <div className="text-sm font-light text-black flex justify-around mb-5 items-end">
          <Button className="bg-green-600 text-black hover:bg-green-700 hover:font-semibold transition-all duration-500">
            Mark as compleqted
          </Button>
          <Button className="bg-red-600 text-black hover:bg-red-700 hover:font-semibold transition-all duration-500">
            Falied
          </Button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;

{
  /* <Button className='bg-green-600 text-black hover:bg-green-700 hover:font-semibold transition-all duration-500'>Mark as compleqted</Button>
<Button className='bg-red-600 text-black hover:bg-red-700 hover:font-semibold transition-all duration-500'>Falied</Button> */
}
