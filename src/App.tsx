import "./App.css";
import { useState } from "react";
import AddTaskForm from "./components/Todo/AddTaskForm";
import TaskItem from "./components/Todo/Task";

interface Task {
  taskName: string;
  id: string;
}

const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: "1", taskName: "Сходить в душ" },
    { id: "2", taskName: "Приготовить завтрак" },
    { id: "3", taskName: "Сделать зарядку" },
  ]);

  const [currentTask, setCurrentTask] = useState<string>("");

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const moveTaskDown = () => {
    const newTask: Task = {
      id: Date.now().toString(), 
      taskName: currentTask, 
    };
    setTaskList([...taskList, newTask]);
    setCurrentTask("");
  }

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="task-list-container">
      <AddTaskForm
        taskName={currentTask}
        changeInput={changeInput}
        moveTaskDown={moveTaskDown}
      />
      <div>
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            taskName={task.taskName}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
