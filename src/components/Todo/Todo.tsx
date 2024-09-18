import "./Todo.css";

interface Props extends React.PropsWithChildren {
taskName: string
}

const Task: React.FC<Props> = ({
taskName
}) => {
  return (
    <div className="task-container">
      <input type="text" value={taskName} className="task-input" />
      <button className='task-button 'type="button">Add</button>
 </div>
  );
};

export default Task;
