import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function AuthorDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3318/api/Authors/${id}`)
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div>{data && data.firstName}</div>;
}

export default AuthorDetails;
