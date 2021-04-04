import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  useEffect(() => {
    axios
      .get("/user?ID=12345")
      .then(function (response) {
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
    </div>
  );
}

export default Home;
