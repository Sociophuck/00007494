import axios from "axios";
import { useEffect, useState } from "react";

function Author() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3318/api/Authors")
      .then(function (response) {
        setData(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      List of Authors
      <div>
        {/* {data &&
          data.map((item) => {
            return <p>{item.firstName}</p>;
          })} */}
      </div>
    </div>
  );
}

export default Author;
