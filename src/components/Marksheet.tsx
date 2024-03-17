const Marksheet = () => {
  return (
    <div className="container">
      <table className="marksheet">
        <thead>
          <tr>
            <th>Code</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>4300002</th>
            <th>Communication Skills in English</th>
            <th>{Math.floor(Math.random() * 60) + 17}</th>
            <th>09/01/2024</th>
          </tr>
          <tr>
            <th>4300001</th>
            <th>Mathematics</th>
            <th>{Math.floor(Math.random() * 60) + 17}</th>
            <th>10/01/2024</th>
          </tr>
          <tr>
            <th>4300003</th>
            <th>Environment and Substainability</th>
            <th>{Math.floor(Math.random() * 60) + 17}</th>
            <th>11/01/2024</th>
          </tr>
          <tr>
            <th>4300018</th>
            <th>Fundamentals of Electrical and Electronics</th>
            <th>{Math.floor(Math.random() * 60) + 17}</th>
            <th>19/01/2024</th>
          </tr>
          <tr>
            <th>4310702</th>
            <th>Basic Computer Programming</th>
            <th>{Math.floor(Math.random() * 60) + 17}</th>
            <th>24/01/2024</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marksheet;
