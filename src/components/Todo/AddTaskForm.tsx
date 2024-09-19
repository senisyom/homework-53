import "./AddTaskForm.css";

interface Props extends React.PropsWithChildren {
  taskName: string;
  changeInput: React.ChangeEventHandler<HTMLElement>;
  moveTaskDown: React.MouseEventHandler
}

const Task: React.FC<Props> = ({
  taskName,
  changeInput,
  moveTaskDown
}) => {
  return (
    <div className="task-container">
      <input
        type="text"
        value={taskName}
        className="add-task-input"
        placeholder="Добавить новую задачу"
        onChange={changeInput}
      />
      <button className="task-button " type="button" onClick={moveTaskDown}>
        Add
      </button>
    </div>
  );
};

export default Task;
