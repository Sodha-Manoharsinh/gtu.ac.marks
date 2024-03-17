import { useInfoContext } from "./context/InfoProvider";
import logo from "../assets/logo.png";

const Header = () => {
  const { enroll } = useInfoContext();
  console.log(enroll.slice(2, 5));
  return (
    <div className="header">
      <div className="img">
        <img src={logo} alt="gtu logo" />
      </div>
      <table className="header-table">
        <tr>
          <th>Enrollment no: </th>
          <th>{enroll}</th>
        </tr>
        <tr>
          <th>Institute: </th>
          <th>{enroll.slice(2, 5)}</th>
        </tr>
        <tr>
          <th>Branch: </th>
          <th>{enroll.slice(7, 9)}</th>
        </tr>
      </table>
    </div>
  );
};

export default Header;
