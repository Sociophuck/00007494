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

function AuthorEdit() {
  const classes = useStyles();
  let history = useHistory();
  const [data, setData] = useState();
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:3318/api/Authors/${id}`)
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
    const data = {
      ...values,
      id: parseInt(id),
    };
    console.log(data);
    axios
      .put(`http://localhost:3318/api/Authors/${id}`, data)
      .then(function (response) {
        history.push(`/authors/${id}`);
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
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            countryOfBirth: data.countryOfBirth,
            bio: data.bio,
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

export default AuthorEdit;
