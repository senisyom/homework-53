import "./App.css";
import { useState } from "react";
import Person from "./components/Person/Person.tsx";

interface IPerson {
  name: string;
  age: number;
  hobby?: string | null;
  id: number;
}

const App = () => {
  const [people, setPeople] = useState<IPerson[]>([
    { id: 1, name: "John", age: 28, hobby: "Coding" },
    { id: 2, name: "Jane", age: 30, hobby: "Swimming" },
    { id: 3, name: "Doe", age: 20, hobby: "Playing" },
    { id: 4, name: "Lena", age: 15, hobby: "Cooking" },
  ]);

  const [togglePeople, setTogglePeople] = useState(true);

  const changeNameToFirstPerson = () => {
    console.log("Click the button");

    const copyPeople = [...people];
    const copyPerson = { ...copyPeople[0] };
    copyPerson.name = "Almaz";

    copyPeople[0] = copyPerson;

    setPeople(copyPeople);
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const copyPeople = people.map((person, i) => {
      if (person.id === id) {
        return {
          ...person,
          name: e.target.value,
        };
      }
      return { ...person };
    });
    setPeople(copyPeople);
  };

  const changeAge = (id: number) => {
    let index = people.findIndex((person) => person.id === id);
    console.log(index);

    const copyPeople = people.map((person, i) => {
      if (i === index) {
        return {
          ...person,
          age: person.age + 1,
        };
      }
      return { ...person };
    });

    setPeople(copyPeople);
  };

  let peopleList = null;

  const onTogglePeople = () => {
    setTogglePeople((prevState) => !prevState);
  };

  const deletePerson = (id: number) => {
   
    let index: number = people.findIndex((person) => person.id == id)

    const copyPeople = [...people];
    copyPeople.splice(index, 1)
    setPeople(copyPeople)
  }

  if (togglePeople) {
    peopleList = (
      <div>
        {people.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onChangeAge={() => changeAge(person.id)}
            onChangeName={(e) => changeName(e, person.id)}
            onDeletePersonById ={() => deletePerson (person.id)}
          >
            {person.hobby ? (
              <p>
                <b>Hobby:</b> {person.hobby}
              </p>
            ) : null}
          </Person>
        ))}
      </div>
    );
  }

  return (
    <>
      {peopleList}

      <button onClick={changeNameToFirstPerson} type="button">
        Change name to first person
      </button>

      <button type="button" onClick={onTogglePeople}>
        {togglePeople ? "Hide people" : "Show people"}
      </button>
    </>
  );
};

export default App;
