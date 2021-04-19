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
import CardMedia from "@material-ui/core/CardMedia";

function Book() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3318/api/Books")
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

  if (data.length === 0) {
    return <Container>No books to show</Container>;
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3318/api/Books/${id}`);

    const newData = data.filter((data) => data.id != id);
    setData(newData);
  };

  return (
    <Container>
      <Typography variant="h4">List of Books</Typography>
      <div className="divide" />
      <div>
        <Grid container spacing={3}>
          {data &&
            data.map((a) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={a.id}>
                  <BookCard book={a} handleDelete={handleDelete} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Container>
  );
}

export default Book;

const useStyles = makeStyles((theme) => ({
  action: {
    marginLeft: 8,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function BookCard({ book, handleDelete }) {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(book.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={book.title}
          subheader={book.countryOfBirth}
        />
        <CardMedia
          className={classes.media}
          image={book.coverImageLink}
          title="cover of the book"
        />
        <CardActions className={classes.action}>
          <Link to={`/books/${book.id}`}>
            <Typography variant="h6" color="inherit">
              Learn More
            </Typography>
          </Link>
          <Link to={`/book/${book.id}/edit`}>
            <EditOutlined color="secondary" />
          </Link>
        </CardActions>
        {/* <CardContent>
          <Typography>{book.countryOfBirth}</Typography>
        </CardContent> */}
      </Card>
    </div>
  );
}
