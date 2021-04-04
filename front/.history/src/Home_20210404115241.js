import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/user?ID=12345")
      .then(function (response) {
        setData(response);
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
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
