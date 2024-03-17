import doge from "../assets/doge.png";
import thumps from "../assets/thumps_up.png";

const Print = () => {
  return (
    <div className="print-container">
      <h1>Tension mat le bhai nahi aaya result.</h1>
      <div className="imgs">
        <img src={thumps} alt="" />
        <img src={doge} alt="" />
      </div>
      <h2>Made by:- Sodha Manoharsinh (Computer dept. sem-2)</h2>
    </div>
  );
};

export default Print;
