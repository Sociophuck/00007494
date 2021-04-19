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
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";

function Author() {
  const [data, setData] = useState();
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

  if (!data) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (data.length == 0) {
    return <Container>No Authors to show</Container>;
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3318/api/Authors/${id}`);

    const newData = data.filter((data) => data.id != id);
    setData(newData);
  };

  return (
    <Container>
      <Typography variant="h4">List of Authors</Typography>
      <div className="divide" />
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

const useStyles = makeStyles((theme) => ({
  action: {
    marginLeft: 8,
  },
}));

function AuthorCard({ author, handleDelete }) {
  const classes = useStyles();
  const fullName = author.firstName + " " + author.lastName;
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(author.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={fullName}
          subheader={author.countryOfBirth}
        />
        <CardActions className={classes.action}>
          <Link to={`/authors/${author.id}`}>
            <Typography variant="h6" color="inherit">
              Learn More
            </Typography>
          </Link>
          <Link to={`/author/${author.id}/edit`}>
            <EditOutlined color="secondary" />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
