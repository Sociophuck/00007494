import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState();
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
      <p>Home Page</p>
      {data &&
        data.map((item) => {
          return <p>{item.firstName}</p>;
        })}
    </div>
  );
}

export default Home;
