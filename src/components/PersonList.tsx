import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  console.log(props);
  return (
    <div>
      {props?.names?.map((name) => (
        <p key={name.first}>
          {name.first} {name.last}
        </p>
      ))}
    </div>
  );
};

export default PersonList;
