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
import { DeleteOutlined } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

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

  const handleDelete = async (id) => {
    await axios.delete(``);

    const newData = data.filter((data) => data.id != id);
    setData(newData);
  };

  return (
    <Container>
      <Typography variant="h4">List of Authors</Typography>
      <div>
        <Grid container spacing={3}>
          {data &&
            data.map((a) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={a.id}>
                  <AuthorCard author={a} handleDelete={handleDelete} />
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
  const fullName = author.firstName + " " + author.lastName;
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => console.log("deleted")}>
              <DeleteOutlined />
            </IconButton>
          }
          title={fullName}
          subheader={author.countryOfBirth}
        />
        {/* <CardContent>
          <Typography>{author.countryOfBirth}</Typography>
        </CardContent> */}
      </Card>
    </div>
  );
}

{
  /* <Paper>{item.firstName}</Paper> */
}
