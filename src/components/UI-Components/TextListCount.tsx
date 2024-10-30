import TaskList from "./TaskList";

const TextListCount = ({ taskCount }: { taskCount: any }) => {
  function getTaskData() {
    const data = taskCount.map((elem: any) => {
      const data = elem.taskCount;
      return data;
    });
    return data;
  }

  const data = getTaskData();

  return (
    <>
      {data.map((items: any, idx: number) => {
        const { active, failed, completed, newTask } = items;
        if (idx === 0) {
          return <TaskList data={{ active, failed, completed, newTask }} />;
        }
      })}
    </>
  );
};

export default TextListCount;
