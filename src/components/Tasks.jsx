import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //const onClick = () => console.log("click");
  return (
    <>
      {tasks.map((task) => (
        <Task
          onToggle={onToggle}
          onDelete={onDelete}
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;
