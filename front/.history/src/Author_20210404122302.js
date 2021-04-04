import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

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
            data.map((item) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={item.id}>
                  {/* <Paper>{item.firstName}</Paper> */}
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Container>
  );
}

export default Author;

function AuthorCard() {
  return <div></div>;
}
