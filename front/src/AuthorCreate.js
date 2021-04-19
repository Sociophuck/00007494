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

function AuthorCreate() {
  const classes = useStyles();
  let history = useHistory();

  const submitForm = (values) => {
    axios
      .post("http://localhost:3318/api/Authors/", values)
      .then(function (response) {
        history.push("/authors");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" color="inherit">
          Add author
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            age: "",
            countryOfBirth: "",
            bio: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("Firstname cannot be empty"),
            lastName: Yup.string().required("Lastname cannot be empty"),
            age: Yup.number()
              .required("Age cannot be empty")
              .positive()
              .integer(),
            countryOfBirth: Yup.string().required("Country cannot be empty"),
            bio: Yup.string().required("Biography cannot be empty"),
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
                name="firstName"
                type="text"
                label="First Name"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="lastName"
                type="text"
                label="Last Name"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="age"
                type="number"
                label="Age"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="countryOfBirth"
                type="text"
                label="Country of Birth"
              />

              <br />
              <Field
                style={{ width: "500px" }}
                component={TextField}
                name="bio"
                type="text"
                label="Biography"
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

export default AuthorCreate;
