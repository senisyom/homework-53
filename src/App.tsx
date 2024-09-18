import "./App.css";
import { useState } from "react";
import Task from "./components/Todo/Todo.tsx";

interface Task {
 taskName: string
}

const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([
    { taskName: 'Add new task' },
  ]);

  return (
    <div className="task-list-container">
      <Task taskName={taskList[0].taskName} />
    </div>
  );
  <button type="button"></button>
   
};

export default App;
