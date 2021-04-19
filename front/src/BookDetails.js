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
    marginTop: 20,
    marginBottom: 20,
  },
}));

function BookDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:3318/api/Books/${id}`)
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
              <Typography variant="h5">Title: {data.title}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5">
                Published Year: {data.publishedYear}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5">
                Number of Pages: {data.numOfPages}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5">Author Id: {data.authorId}</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h5">Description of the book:</Typography>
          <Typography variant="body1">{data.description}</Typography>
        </>
      )}
    </Container>
  );
}

export default BookDetails;
