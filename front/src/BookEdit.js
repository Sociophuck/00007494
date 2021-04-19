import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, LinearProgress, Paper } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: theme.spacing.unit * 24,
    marginRight: theme.spacing.unit * 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${
      theme.spacing.unit * 5
    }px`,
  },
  container: {
    maxWidth: "200px",
  },
}));

function BookEdit() {
  const classes = useStyles();
  let history = useHistory();

  const [data, setData] = useState();
  let { id } = useParams();

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

  if (!data) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  const submitForm = (values) => {
    const myData = {
      ...values,
      id: parseInt(id),
      authorId: data.authorId,
    };
    console.log(data);
    axios
      .put(`http://localhost:3318/api/Books/${id}`, myData)
      .then(function (response) {
        history.push(`/books/${id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" color="inherit">
          Add Book
        </Typography>
        <Formik
          initialValues={{
            title: data.title,
            description: data.description,
            publishedYear: data.publishedYear,
            numOfPages: data.numOfPages,
            coverImageLink: data.coverImageLink,
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title cannot be empty"),
            description: Yup.string().required("Description cannot be empty"),
            publishedYear: Yup.number()
              .required("Published Year cannot be empty")
              .positive()
              .integer(),
            numOfPages: Yup.number()
              .required("Number of pages cannot be empty")
              .positive()
              .integer(),
            coverImageLink: Yup.string().required(
              "Cover image Link cannot be empty"
            ),
          })}
          onSubmit={(values) => {
            submitForm(values);
          }}
        >
          {({ submitForm, isSubmitting, errors }) => (
            <Form>
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="title"
                type="text"
                label="Title"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="description"
                type="text"
                label="Description"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="publishedYear"
                type="number"
                label="Published Year"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="numOfPages"
                type="number"
                label="Number Of Pages"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="coverImageLink"
                type="text"
                label="Cover Image Link"
              />

              <br />
              <Button
                style={{ marginTop: "20px", float: "right" }}
                variant="contained"
                color="primary"
                onClick={submitForm}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}

export default BookEdit;
