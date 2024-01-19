import "./App.css";
import Button from "./components/ButtonsProps";
import Container from "./components/Container";
import Greets from "./components/Greets";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import PersonList from "./components/PersonList";
import Persons from "./components/Persons";
import Status from "./components/Status";

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
      <Status status="success"></Status>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dispario</Heading>
      </Oscar>
      <Greets name="Viswas" isLoggedIn={true}></Greets>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      ></Button>
      <Input value={""} handleChange={(event) => console.log(event)}></Input>
      <Container
        style={{ border: "1px solid black", padding: "1rem" }}
      ></Container>
    </>
  );
}

export default App;
