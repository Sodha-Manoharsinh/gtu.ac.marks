import Login from "./Login";
import Main from "./Main";
import Print from "./Print";
import { useInfoContext } from "./context/InfoProvider";

const Container = () => {
  const { enroll } = useInfoContext();

  return (
    <div>
      {enroll == "" || enroll == "back" ? (
        <Login />
      ) : enroll == "print" ? (
        <Print />
      ) : (
        <Main />
      )}
    </div>
  );
};

export default Container;
