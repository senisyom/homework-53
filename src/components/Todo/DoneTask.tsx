import "./Task.css";

interface TaskProps {
  taskName: string;
}

const DoneTask: React.FC<TaskProps> = ({ taskName }) => {
  return (
    <div className="task-item">
      <span>{taskName}</span>
    </div>
  );
};

export default DoneTask;
