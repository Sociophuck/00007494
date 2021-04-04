import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: 8,
    marginBottom: 8,
  },
}));

function AuthorDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const classes = useStyles();

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
        <>
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
            <Grid item xs={12} md={6}>
              <Typography variant="h5">
                Birth Place: {data.countryOfBirth}
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h5">Biography of the Author:</Typography>
          <Typography variant="body1">{data.bio}</Typography>
        </>
      )}
    </Container>
  );
}

export default AuthorDetails;
