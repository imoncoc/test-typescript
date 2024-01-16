type propsName = {
  name: {
    first: string;
    last: string;
  };
};

const Persons = (props: propsName) => {
  return (
    <div>
      {props?.name.first} {props?.name.last}
    </div>
  );
};

export default Persons;
