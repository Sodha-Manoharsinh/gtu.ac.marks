import { useInfoContext } from "./context/InfoProvider";

const Buttons = () => {
  const { setEnroll } = useInfoContext();

  const handleBackButtonClick = () => {
    setEnroll("back");
  };
  const handlePrintButtonClick = () => {
    setEnroll("print");
  };

  return (
    <div className="btns">
      <button className="btn back" onClick={handleBackButtonClick}>
        Back
      </button>
      <button className="btn print" onClick={handlePrintButtonClick}>
        Print
      </button>
    </div>
  );
};

export default Buttons;
