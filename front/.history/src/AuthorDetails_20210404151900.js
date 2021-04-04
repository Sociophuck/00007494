import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

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
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">First Name: {data.firstName}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Last Name: {data.lastName}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Age (Aged): {data.age}</Typography>
          </Grid>
          <Grid item container xs={12} md={6}>
            <Typography variant="h5" color="textSecondary">
              Birth Place:
            </Typography>
            " "<Typography variant="h5">{" " + data.countryOfBirth}</Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default AuthorDetails;
