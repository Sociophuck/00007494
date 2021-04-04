import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

function Author() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3318/api/Authors")
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
      <Typography variant="h4">List of Authors</Typography>
      <div>
        <Grid container>
          {data &&
            data.map((a) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={a.id}>
                  <AuthorCard author={a} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Container>
  );
}

export default Author;

function AuthorCard({ author }) {
  return (
    <div>
      <Card>{author.firstName}</Card>
    </div>
  );
}

{
  /* <Paper>{item.firstName}</Paper> */
}
