import { propsName } from "./Person.types";

const Persons = (props: propsName) => {
  return (
    <div>
      {props?.name.first} {props?.name.last}
    </div>
  );
};

export default Persons;
