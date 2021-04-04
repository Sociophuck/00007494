import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

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

  return (
    <Container>
      {data && (
        <div>
          <Typography variant="h6" color="textSecondary">
            FirstName: {data.firstName}
          </Typography>
        </div>
      )}
    </Container>
  );
}

export default AuthorDetails;
