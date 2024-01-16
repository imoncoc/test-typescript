import "./App.css";
import Greets from "./components/Greets";
import PersonList from "./components/PersonList";
import Persons from "./components/Persons";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Diana",
      last: "Prince",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Selina",
      last: "Kyle",
    },
  ];
  return (
    <>
      <Greets name={"Viswas"} messageCount={10} isLoggedIn={true}></Greets>
      <Persons name={personName}></Persons>
      <PersonList names={nameList}></PersonList>
    </>
  );
}

export default App;
