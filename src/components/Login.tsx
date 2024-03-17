import logo from "../assets/logo.png";
import "../App.css";
import { useState } from "react";
import { useInfoContext } from "./context/InfoProvider";

const Login = () => {
  const { setEnroll } = useInfoContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnroll(inputValue);
    setInputValue("");
    console.log(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="login-container">
      <div>
        <img src={logo} alt="GTU image" />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Enter Enrollment Number:- </h3>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
