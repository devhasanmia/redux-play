import TaskCard from "../components/TaskCard";
import { selectTasks } from "../redux/features/task/taskSlice";
import { useAppSelector } from "../redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        tasks.map((task) => <TaskCard task={task}/>)
      }
    </div>
  );
};

export default Tasks;
