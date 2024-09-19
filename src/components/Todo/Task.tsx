import "./Task.css";

interface TaskProps {
  taskName: string;
  onDelete: React.MouseEventHandler;
  onDone: React.MouseEventHandler
}

const TaskItem: React.FC<TaskProps> = ({ taskName, onDelete, onDone }) => {
  return (
    <div className="task-item">
      <span>{taskName}</span>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
      <button className='done-button' type='button' onClick={onDone}>Done</button>
    </div>
  );
};

export default TaskItem;
