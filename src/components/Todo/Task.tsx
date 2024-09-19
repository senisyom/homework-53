import "./Task.css";

interface TaskProps {
  taskName: string;
  onDelete: React.MouseEventHandler;
}

const TaskItem: React.FC<TaskProps> = ({ taskName, onDelete }) => {
  return (
    <div className="task-item">
      <span>{taskName}</span>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
