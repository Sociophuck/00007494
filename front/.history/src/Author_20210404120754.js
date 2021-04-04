import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    <div>
      <Typography variant="h4">List of Authors</Typography>
      <div>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <Paper>1</Paper>
          </Grid>
        </Grid>
        {data &&
          data.map((item) => {
            return <p>{item.firstName}</p>;
          })}
      </div>
    </div>
  );
}

export default Author;
