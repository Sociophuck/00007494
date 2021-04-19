import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, LinearProgress, Paper } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { Select } from "formik-material-ui";

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

function BookCreate() {
  const classes = useStyles();
  let history = useHistory();

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3318/api/Authors")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (!data) {
    return <div>loading</div>;
  }

  if (data && data.length === 0) {
    return (
      <Container>
        Before creating book there must be at least 1 author, so please create
        an author
      </Container>
    );
  }

  const submitForm = (values) => {
    console.log(values);
    axios
      .post("http://localhost:3318/api/Books/", values)
      .then(function (response) {
        history.push("/books");
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
            title: "",
            description: "",
            publishedYear: "",
            numOfPages: "",
            coverImageLink: "",
            authorId: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Title cannot be empty"),
            description: Yup.string().required("Description cannot be empty"),
            publishedYear: Yup.number()
              .required("Published Year cannot be empty")
              .positive()
              .min(1000)
              .integer(),
            numOfPages: Yup.number()
              .required("Number of pages cannot be empty")
              .positive()
              .integer(),
            coverImageLink: Yup.string().required(
              "Cover image Link cannot be empty"
            ),
            authorId: Yup.number()
              .required("Author ID cannot be empty")
              .positive()
              .integer(),
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
              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="description"
                type="text"
                label="Description"
              />
              <br />
              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="publishedYear"
                type="number"
                label="Published Year"
              />
              <br />
              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="numOfPages"
                type="number"
                label="Number Of Pages"
              />
              <br />
              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="coverImageLink"
                type="text"
                label="Cover Image Link"
              />
              <br />
              <br />
              <br />
              <InputLabel htmlFor="label">Author</InputLabel>
              <Field
                style={{ width: "500px" }}
                component={Select}
                name="authorId"
                inputProps={{
                  id: "label",
                }}
              >
                {data.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.firstName}
                    </MenuItem>
                  );
                })}
              </Field>

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

export default BookCreate;
