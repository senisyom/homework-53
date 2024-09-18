import "./Person.css";

interface Props extends React.PropsWithChildren {
  name: string;
  age: number;
  onChangeAge: React.MouseEventHandler;
  onChangeName: React.ChangeEventHandler<HTMLInputElement>;
  onDeletePersonById: React.MouseEventHandler;
}

const Person: React.FC<Props> = ({
  name,
  age,
  children,
  onChangeAge,
  onChangeName,
  onDeletePersonById,
  
}) => {
  return (
    <div className="person">
      <h1>{name}</h1>
      <p>Age: {age}</p>
      {children}
      <hr />
      <input type="text" value={name} />
      <hr />
      {/* <button onClick={onChangeName}>Add age</button>
      <hr /> */}
      <button type="button" onClick={onDeletePersonById}>
        Delete
      </button>
    </div>
  );
};

export default Person;
