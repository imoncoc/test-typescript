type GreetProps = {
  name: string;
  messageCount: 10;
  isLoggedIn: boolean;
};

const Greets = (props: GreetProps) => {
  console.log("props: ", props);
  return (
    <div>
      <h2 className="text-2xl">
        {props?.isLoggedIn
          ? `Welcome ${props?.name}! You have ${props?.messageCount} unread messages`
          : `Welcome guest.`}
      </h2>
    </div>
  );
};

export default Greets;
