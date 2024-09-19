import "./App.css";
import { useState } from "react";
import AddTaskForm from "./components/Todo/AddTaskForm";
import TaskItem from "./components/Todo/Task";
import DoneTask from "./components/Todo/DoneTask";

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

  const [doneTasks, setDoneTasks] = useState<Task[]>([]);
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
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const onDone = (id: string) => {
    const task = taskList.find((task) => task.id === id);
    if (task) {
      setTaskList(taskList.filter((task) => task.id !== id));
      setDoneTasks([...doneTasks, task]);
    }
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
            onDone={() => onDone(task.id)}
          />
        ))}
      </div>
      <div>
        <h2>Завершённые задачи</h2>
        {doneTasks.map((task) => (
          <DoneTask key={task.id} taskName={task.taskName} />
        ))}
      </div>
    </div>
  );
};

export default App;
